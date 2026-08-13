/* ============================================================
   ai.js — Assistente IA local (sem API externa)
   Faz busca semântica simples nos dados do site (categorias,
   tarefas, passos, materiais, dicas, avisos) e responde ao
   usuário citando os guias existentes.
   ============================================================ */

/* ------------------------------------------------------------
   Utilitários de texto: normalização e tokens
   ------------------------------------------------------------ */
function normalize(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Lista de "stop words" em português — palavras sem valor semântico
const STOP = new Set(('a o e de da do dos das em na no nas nos para por com sem que qual quais como quando onde ' +
  'quem porque porquê pra pro pros pras num numa nuns numas ao aos à às um uma uns umas eu tu ele ela ' +
  'nos vos eles elas meu minha teu tua seu sua nossos vossos deles delas isso isto aquilo esse essa ' +
  'este esta aquele aquela ser estar ter haver não sim se ou mas também ai la lá aqui ali cada mais menos ' +
  'muito muita muitos muitas pouco pouca poucos poucas todo toda todos todas nada tudo já ainda só apenas ' +
  'me te lhe nos vos lhes é são foi são vou vai ir').split(/\s+/));

function tokens(s) {
  return normalize(s).split(' ').filter(t => t && t.length > 1 && !STOP.has(t));
}

// Sinônimos e termos usuais que ajudam a encontrar o guia mesmo
// quando a pessoa não usa exatamente as mesmas palavras do título.
const TERM_ALIASES = {
  roda: ['pneu', 'estepe'],
  pneu: ['roda', 'estepe'],
  carro: ['automovel', 'veiculo'],
  automovel: ['carro', 'veiculo'],
  vazamento: ['torneira', 'chuveiro', 'cano'],
  pia: ['torneira', 'ralo'],
  luz: ['lampada', 'eletricidade'],
  lampada: ['luz', 'eletricidade'],
  internet: ['wifi', 'roteador'],
  wifi: ['internet', 'roteador'],
  senha: ['password', 'seguranca'],
  queimar: ['queimadura', 'fogo'],
  queimadura: ['queimar', 'fogo'],
  engasgo: ['engasgamento', 'heimlich'],
  engasgamento: ['engasgo', 'heimlich'],
};

function expandedTokens(query) {
  const expanded = new Set(tokens(query));
  [...expanded].forEach(token => {
    (TERM_ALIASES[token] || []).forEach(alias => expanded.add(alias));
  });
  return [...expanded];
}

/* ------------------------------------------------------------
   Índice de busca — construído uma vez no carregamento
   ------------------------------------------------------------ */
let SEARCH_INDEX = [];

function buildIndex() {
  SEARCH_INDEX = [];
  if (typeof CATEGORIES === 'undefined') return;
  CATEGORIES.forEach(cat => {
    cat.tasks.forEach(task => {
      const parts = [];
      parts.push(task.title);
      parts.push(task.summary);
      parts.push(cat.name);
      task.materials.forEach(m => parts.push(m));
      task.steps.forEach(step => {
        parts.push(step.title);
        parts.push(step.text);
        if (step.tip) parts.push(step.tip);
        if (step.warn) parts.push(step.warn);
      });
      const fullText = parts.join(' ');
      SEARCH_INDEX.push({
        cat, task,
        tokens: new Set(tokens(fullText)),
        titleTokens: new Set(tokens(task.title + ' ' + cat.name)),
      });
    });
  });
}

/* ------------------------------------------------------------
   Score = quantos tokens da query aparecem na tarefa,
   com peso extra se aparecem no título/categoria.
   ------------------------------------------------------------ */
function scoreTask(entry, qTokens) {
  let score = 0;
  qTokens.forEach(t => {
    if (entry.titleTokens.has(t)) score += 3;
    else if (entry.tokens.has(t)) score += 1;
    else {
      // "match parcial" — para plural, gênero etc.
      for (const w of entry.tokens) {
        if (w.length > 3 && (w.startsWith(t.slice(0, 4)) || t.startsWith(w.slice(0, 4)))) {
          score += 0.5;
          break;
        }
      }
    }
  });
  return score;
}

function findTopMatches(query, limit) {
  const qTokens = expandedTokens(query);
  if (!qTokens.length) return [];
  return SEARCH_INDEX
    .map(entry => ({ entry, score: scoreTask(entry, qTokens) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit || 3)
    .map(x => x.entry);
}

/* ------------------------------------------------------------
   Respostas para saudações e perguntas genéricas
   ------------------------------------------------------------ */
const GREETINGS = ['oi', 'ola', 'hey', 'e ai', 'bom dia', 'boa tarde', 'boa noite', 'salve'];
const THANKS = ['obrigado', 'obrigada', 'valeu', 'vlw', 'thanks', 'brigado', 'brigada'];

function detectIntent(qNorm) {
  if (GREETINGS.some(g => qNorm === g || qNorm.startsWith(g + ' ') || qNorm.startsWith(g + ','))) return 'greeting';
  if (THANKS.some(t => qNorm.includes(t))) return 'thanks';
  if (/^(quem|o que) (e|eh|é) (voce|vc|voces)/.test(qNorm)) return 'about';
  if (/(quais|liste|mostrar?|ver) (categorias|topicos|assuntos)/.test(qNorm)) return 'list-categories';
  if (qNorm.includes('ajuda') && qNorm.split(' ').length <= 3) return 'help';
  return null;
}

/* ------------------------------------------------------------
   Seleção do trecho mais útil para a pergunta
   ------------------------------------------------------------ */
function findRelevantStep(task, query) {
  const queryTokens = expandedTokens(query);
  if (!task.steps.length || !queryTokens.length) return task.steps[0];

  return task.steps
    .map((step, index) => {
      const titleTokens = new Set(tokens(step.title));
      const bodyTokens = new Set(tokens(`${step.text} ${step.tip || ''} ${step.warn || ''}`));
      const score = queryTokens.reduce((total, token) => {
        if (titleTokens.has(token)) return total + 3;
        if (bodyTokens.has(token)) return total + 1;
        return total;
      }, 0);
      return { step, index, score };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)[0].step;
}

function findSafetyNote(task) {
  const warnedStep = task.steps.find(step => step.warn);
  return warnedStep ? warnedStep.warn : '';
}

function firstParagraph(text) {
  return (text || '').split('\n')[0].trim();
}

/* ------------------------------------------------------------
   Geração de resposta
   ------------------------------------------------------------ */
function buildAnswer(query) {
  const qNorm = normalize(query);
  const intent = detectIntent(qNorm);

  if (intent === 'greeting') {
    return {
      text: 'Oi! Eu sou o assistente do SAP IA. Me pergunte sobre qualquer tarefa: "como trocar um pneu?", "torneira pingando", "engasgamento"... e eu te levo ao guia certo.',
      matches: [],
    };
  }
  if (intent === 'thanks') {
    return { text: 'De nada! Sempre que precisar, é só chamar. 💪', matches: [] };
  }
  if (intent === 'about') {
    return {
      text: 'Sou uma IA local do próprio site — não uso serviços externos. Pesquiso dentro dos guias que temos aqui e te aponto o passo-a-passo mais relevante.',
      matches: [],
    };
  }
  if (intent === 'help') {
    return {
      text: 'Você pode me perguntar coisas do tipo:\n• "como faço arroz soltinho?"\n• "meu chuveiro não esquenta"\n• "primeiros socorros para queimadura"\n• "quais categorias vocês têm?"',
      matches: [],
    };
  }
  if (intent === 'list-categories') {
    const list = (typeof CATEGORIES !== 'undefined' ? CATEGORIES : []).map(c => `• **${c.name}** — ${c.tasks.length} tarefas`).join('\n');
    return {
      text: 'Nossas categorias:\n' + list + '\n\nQuer entrar em alguma? É só clicar no card ou me pedir sobre uma tarefa específica.',
      matches: [],
    };
  }

  // Busca nos guias
  const matches = findTopMatches(query, 3);

  if (matches.length === 0) {
    return {
      text: 'Não encontrei um guia específico para essa dúvida. Tente citar o objeto ou o problema, como "pneu furado", "torneira pingando", "arroz" ou "wifi". Você também pode perguntar quais categorias estão disponíveis.',
      matches: [],
    };
  }

  const primary = matches[0];
  const { task, cat } = primary;
  const step = findRelevantStep(task, query);
  const safetyNote = findSafetyNote(task);
  const materialList = task.materials.slice(0, 3).join(', ');

  let text = `Encontrei o guia **${task.title}** na categoria **${cat.name}**.\n\n` +
    `${task.summary}\n\n` +
    `**Ponto mais relevante:** ${step.title}. ${firstParagraph(step.text)}\n\n` +
    `**Você vai precisar:** ${materialList}${task.materials.length > 3 ? ' e mais itens indicados no guia.' : '.'}`;

  if (safetyNote) {
    text += `\n\n**Atenção:** ${safetyNote}`;
  }

  text += `\n\nO guia completo possui ${task.steps.length} passos. Use o botão abaixo para abri-lo diretamente.`;

  if (matches.length > 1) {
    text += '\n\n**Outros guias relacionados:**';
    matches.slice(1).forEach(match => {
      text += `\n• ${match.task.title} (${match.cat.name})`;
    });
  }

  return { text, matches };
}

/* ------------------------------------------------------------
   Widget de UI
   ------------------------------------------------------------ */
function initAiWidget() {
  buildIndex();

  const btn = document.createElement('button');
  btn.id = 'aiFab';
  btn.setAttribute('aria-label', 'Abrir assistente de dúvidas');
  btn.innerHTML = `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <span class="fab-dot" aria-hidden="true"></span>
  `;
  btn.addEventListener('click', toggleChat);
  document.body.appendChild(btn);

  const panel = document.createElement('aside');
  panel.id = 'aiPanel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Assistente SAP IA');
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML = `
    <header class="ai-head">
      <div class="ai-brand">
        <div class="ai-avatar" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
        </div>
        <div>
          <div class="ai-title">Assistente</div>
          <div class="ai-sub">responde dúvidas dos guias</div>
        </div>
      </div>
      <button class="ai-close" onclick="toggleChat()" aria-label="Fechar assistente">×</button>
    </header>

    <div class="ai-log" id="aiLog" role="log" aria-live="polite" aria-atomic="false"></div>

    <div class="ai-suggest" id="aiSuggest">
      <button onclick="askAi('como trocar um pneu?')">como trocar um pneu?</button>
      <button onclick="askAi('minha torneira está pingando')">torneira pingando</button>
      <button onclick="askAi('quais categorias vocês têm?')">quais categorias?</button>
      <button onclick="askAi('alguém engasgou, o que fazer?')">alguém engasgou</button>
    </div>

    <form class="ai-form" id="aiForm" onsubmit="event.preventDefault(); submitAi();">
      <label for="aiInput" style="position:absolute;left:-9999px">Digite sua pergunta</label>
      <input id="aiInput" type="text" placeholder="Pergunte alguma coisa..." autocomplete="off" />
      <button type="submit" aria-label="Enviar pergunta">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
      </button>
    </form>
  `;
  document.body.appendChild(panel);

  // Mensagem inicial
  pushMessage('bot', 'Olá! Sou o assistente do SAP. Descreva o que você precisa fazer ou o problema que encontrou; eu localizo o guia, indico por onde começar e deixo um botão para abri-lo.');
}

function toggleChat() {
  const p = document.getElementById('aiPanel');
  const b = document.getElementById('aiFab');
  if (!p) return;
  const open = p.classList.toggle('open');
  p.setAttribute('aria-hidden', open ? 'false' : 'true');
  b.classList.toggle('active', open);
  if (open) {
    setTimeout(() => document.getElementById('aiInput')?.focus(), 100);
  }
}

function pushMessage(kind, text, matches) {
  const log = document.getElementById('aiLog');
  if (!log) return;
  const wrap = document.createElement('div');
  wrap.className = 'ai-msg ' + kind;

  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = renderMarkdownLite(text);
  wrap.appendChild(bubble);

  if (matches && matches.length) {
    const links = document.createElement('div');
    links.className = 'ai-links';
    matches.slice(0, 3).forEach(m => {
      const a = document.createElement('button');
      a.type = 'button';
      a.textContent = 'Abrir guia: ' + m.task.title;
      a.setAttribute('aria-label', 'Abrir o guia ' + m.task.title);
      a.addEventListener('click', () => {
        if (window.openTask) {
          window.openTask(m.cat.id, m.task.id);
          toggleChat();
        }
      });
      links.appendChild(a);
    });
    wrap.appendChild(links);
  }

  log.appendChild(wrap);
  log.scrollTop = log.scrollHeight;
}

// Markdown mini: **negrito** e quebra de linha
function renderMarkdownLite(text) {
  return escapeAi(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}
function escapeAi(s) {
  return (s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function submitAi() {
  const input = document.getElementById('aiInput');
  const q = (input.value || '').trim();
  if (!q) return;
  input.value = '';
  askAi(q);
}

function askAi(query) {
  pushMessage('user', query);
  // Esconde os chips de sugestão após primeira interação real
  const s = document.getElementById('aiSuggest');
  if (s) s.style.display = 'none';

  // Simula "digitando"
  const log = document.getElementById('aiLog');
  const typing = document.createElement('div');
  typing.className = 'ai-msg bot';
  typing.innerHTML = `<div class="bubble typing"><span></span><span></span><span></span></div>`;
  log.appendChild(typing);
  log.scrollTop = log.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const ans = buildAnswer(query);
    pushMessage('bot', ans.text, ans.matches);
  }, 380 + Math.random() * 220);
}

/* ------------------------------------------------------------
   Init
   ------------------------------------------------------------ */
window.toggleChat = toggleChat;
window.askAi = askAi;
window.submitAi = submitAi;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAiWidget);
} else {
  initAiWidget();
}
