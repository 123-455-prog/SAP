const main = document.getElementById('main');
const searchInput = document.getElementById('searchInput');

let view = { name: 'home', catId: null, taskId: null };

function totalTasks() {
  return CATEGORIES.reduce((s, c) => s + c.tasks.length, 0);
}

function goHome() {
  view = { name: 'home' };
  window.view = view;
  searchInput.value = '';
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCategory(id) {
  // Limpa a busca ativa para que a categoria selecionada possa ser exibida.
  searchInput.value = '';
  view = { name: 'category', catId: id };
  window.view = view;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openTask(catId, taskId) {
  // Sem esta limpeza, render() continuaria mostrando os resultados da busca.
  searchInput.value = '';
  view = { name: 'task', catId, taskId };
  window.view = view;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openFavorites() {
  searchInput.value = '';
  view = { name: 'favorites' };
  window.view = view;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function difficultyLabel(d) {
  return d === 'easy' ? 'Fácil' : d === 'medium' ? 'Médio' : 'Difícil';
}

const SEARCH_STOP_WORDS = new Set(
  'a o os as e de da do das dos em no na nos nas para por com sem um uma uns umas meu minha seu sua que como qual quais onde quando'.split(' ')
);

function normalizeSearchText(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getSearchTerms(query) {
  return normalizeSearchText(query)
    .split(' ')
    .filter(term => term.length > 1 && !SEARCH_STOP_WORDS.has(term));
}

function hasSearchTerm(text, term) {
  if (text.includes(term)) return true;
  if (term.length < 4) return false;

  const root = term.slice(0, 4);
  return text.split(' ').some(word => word.length >= 4 && word.slice(0, 4) === root);
}

function scoreSearchResult(cat, task, terms) {
  const title = normalizeSearchText(`${task.title} ${cat.name}`);
  const summary = normalizeSearchText(task.summary);
  const details = normalizeSearchText([
    ...task.materials,
    ...task.steps.flatMap(step => [step.title, step.text, step.tip || '', step.warn || '']),
  ].join(' '));

  return terms.reduce((score, term) => {
    if (hasSearchTerm(title, term)) return score + 6;
    if (hasSearchTerm(summary, term)) return score + 3;
    if (hasSearchTerm(details, term)) return score + 1;
    return score;
  }, 0);
}

function findSiteSearchResults(query) {
  const terms = getSearchTerms(query);
  if (!terms.length) return [];

  return CATEGORIES
    .flatMap(cat => cat.tasks.map(task => ({ cat, task, score: scoreSearchResult(cat, task, terms) })))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
}

function escapeAppHtml(text) {
  return String(text || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}

function renderHome() {
  return `
    <section class="hero fade-in">
      <div class="container">
        <h1>Aprenda a fazer as <span>coisas do dia-a-dia</span></h1>
        <p>Guias práticos, ilustrados e diretos ao ponto — trocar pneu, consertar torneira, cozinhar arroz, salvar alguém engasgado. Tudo do mais simples.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Categorias</h2>
          <span class="link">${CATEGORIES.length} categorias · ${totalTasks()} tarefas</span>
        </div>
        <div class="cat-grid">
          ${CATEGORIES.map(c => `
            <button class="cat-card" onclick="openCategory('${c.id}')">
              <div class="cat-icon" style="background:${c.color}">${c.icon}</div>
              <div>
                <h3>${c.name}</h3>
                <div class="count">${c.tasks.length} tarefa${c.tasks.length !== 1 ? 's' : ''}</div>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Tarefas em destaque</h2>
        </div>
        <div class="task-grid">
          ${getFeatured().map(({ cat, task }) => taskCardHtml(cat, task)).join('')}
        </div>
      </div>
    </section>
  `;
}

function getFeatured() {
  const featured = [];
  CATEGORIES.forEach(c => { if (c.tasks[0]) featured.push({ cat: c, task: c.tasks[0] }); });
  return featured.slice(0, 6);
}

function favoriteButtonHtml(cat, task) {
  const session = typeof window.getSession === 'function' ? window.getSession() : null;
  const saved = !!session && typeof window.isTaskFavorite === 'function'
    && window.isTaskFavorite(cat.id, task.id);
  const label = saved ? 'Remover dos favoritos' : 'Salvar nos favoritos';
  const icon = saved ? '★' : '☆';

  return `
    <button type="button" class="favorite-btn${saved ? ' active' : ''}"
      onclick="toggleFavoriteFromGuide('${cat.id}', '${task.id}')"
      aria-pressed="${saved}" aria-label="${label}">
      <span aria-hidden="true">${icon}</span> ${label}
    </button>
  `;
}

function toggleFavoriteFromGuide(catId, taskId) {
  if (typeof window.toggleTaskFavorite === 'function') {
    window.toggleTaskFavorite(catId, taskId);
  }
}

function taskImageHtml(task, context) {
  const fallback = context === 'card'
    ? `<div class="thumb">${task.thumb}</div>`
    : `<div class="hero-img">${task.thumb}</div>`;

  // Quando uma URL for cadastrada em data.js, exibe uma foto na caixa.
  if (!task.imageUrl) return fallback;

  const alt = task.imageAlt || `Imagem ilustrativa: ${task.title}`;
  const className = context === 'card'
    ? 'image-box image-box--card'
    : 'image-box image-box--hero';

  return `
    <div class="${className}">
      <img src="${task.imageUrl}" alt="${alt}" loading="lazy">
      <span class="image-box__caption">Imagem de exemplo</span>
    </div>
  `;
}

function stepImageHtml(task, step) {
  // Cada passo ilustrado usa o SVG desenhado para a ação explicada nele.
  if (!step.art) return '';

  const label = `Ilustração do passo: ${step.title}`;
  return `<div class="illus" role="img" aria-label="${label}">${step.art}</div>`;
}

function taskCardHtml(cat, task) {
  return `
    <button type="button" class="task-card" onclick="openTask('${cat.id}','${task.id}')" aria-label="Abrir guia: ${task.title}">
      ${taskImageHtml(task, 'card')}
      <h4>${task.title}</h4>
      <p>${task.summary}</p>
      <div class="task-meta">
        <span class="pill ${task.difficulty}">${difficultyLabel(task.difficulty)}</span>
        <span class="pill">⏱ ${task.time}</span>
        <span class="pill">${cat.name}</span>
      </div>
    </button>
  `;
}

function renderCategory() {
  const cat = CATEGORIES.find(c => c.id === view.catId);
  if (!cat) return renderHome();
  return `
    <div class="container fade-in">
      <div class="breadcrumb">
        <button onclick="goHome()">Início</button>
        <span class="sep">/</span>
        <span class="current">${cat.name}</span>
      </div>
      <div class="section-title">
        <h2 style="font-size:32px">${cat.name}</h2>
        <span class="link">${cat.tasks.length} tarefa${cat.tasks.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="task-grid">
        ${cat.tasks.map(t => taskCardHtml(cat, t)).join('')}
      </div>
    </div>
  `;
}

function renderTask() {
  const cat = CATEGORIES.find(c => c.id === view.catId);
  const task = cat && cat.tasks.find(t => t.id === view.taskId);
  if (!task) return renderHome();

  return `
    <div class="container guide fade-in">
      <div class="breadcrumb">
        <button onclick="goHome()">Início</button>
        <span class="sep">/</span>
        <button onclick="openCategory('${cat.id}')">${cat.name}</button>
        <span class="sep">/</span>
        <span class="current">${task.title}</span>
      </div>

      <div class="guide-header">
        <div>
          <h1>${task.title}</h1>
          <p class="lede">${task.summary}</p>
          <div class="meta">
            <span class="pill ${task.difficulty}">Dificuldade: ${difficultyLabel(task.difficulty)}</span>
            <span class="pill">⏱ ${task.time}</span>
            <span class="pill">📚 ${task.steps.length} passos</span>
          </div>
          <div class="guide-actions">
            ${favoriteButtonHtml(cat, task)}
          </div>
        </div>
        ${taskImageHtml(task, 'hero')}
      </div>

      <div class="guide-columns">
        <div>
          <div class="card-box">
            <h3>Você vai precisar</h3>
            <ul class="materials">
              ${task.materials.map(m => `<li>${m}</li>`).join('')}
            </ul>
          </div>

          ${task.steps.map((s, i) => `
            <div class="step" id="step-${i}">
              <div class="step-head">
                <div class="step-num">${i + 1}</div>
                <h4>${s.title}</h4>
              </div>
              ${s.text.split('\n').map(p => `<p>${p}</p>`).join('')}
              ${stepImageHtml(task, s)}
              ${s.tip ? `<div class="tip"><strong>Dica:</strong> ${s.tip}</div>` : ''}
              ${s.warn ? `<div class="warn"><strong>Cuidado:</strong> ${s.warn}</div>` : ''}
            </div>
          `).join('')}
        </div>

        <aside class="sidebar">
          <h3>Passos</h3>
          <div class="sidebar-list">
            ${task.steps.map((s, i) => `
              <button onclick="jumpTo(${i})">
                <span style="opacity:.6;font-weight:700">${i + 1}.</span>
                <span>${s.title}</span>
              </button>
            `).join('')}
          </div>
          <div style="margin-top:24px">
            <h3>Outras nesta categoria</h3>
            <div class="sidebar-list">
              ${cat.tasks.filter(t => t.id !== task.id).map(t => `
                <button onclick="openTask('${cat.id}','${t.id}')">
                  <span>${t.title}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function jumpTo(i) {
  const el = document.getElementById('step-' + i);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderFavorites() {
  const session = typeof window.getSession === 'function' ? window.getSession() : null;

  if (!session) {
    return `
      <section class="section fade-in">
        <div class="container favorites-empty">
          <h1>Meus favoritos</h1>
          <p>Entre ou crie uma conta para salvar seus guias e acessá-los quando quiser.</p>
          <button type="button" class="auth-btn" onclick="openAuth('login')">Entrar para ver favoritos</button>
        </div>
      </section>
    `;
  }

  const records = typeof window.getFavoritesForUser === 'function'
    ? window.getFavoritesForUser(session.email)
    : [];
  const guides = records
    .slice()
    .sort((a, b) => String(b.savedAt || '').localeCompare(String(a.savedAt || '')))
    .map(record => {
      const cat = CATEGORIES.find(item => item.id === record.categoryId);
      const task = cat && cat.tasks.find(item => item.id === record.taskId);
      return cat && task ? { cat, task } : null;
    })
    .filter(Boolean);

  return `
    <section class="section fade-in">
      <div class="container">
        <div class="breadcrumb">
          <button onclick="goHome()">Início</button>
          <span class="sep">/</span>
          <span class="current">Meus favoritos</span>
        </div>
        <div class="section-title">
          <h1>Meus favoritos</h1>
          <span class="link">${guides.length} guia${guides.length !== 1 ? 's' : ''} salvo${guides.length !== 1 ? 's' : ''}</span>
        </div>
        ${guides.length ? `
          <p class="search-help">Abra um guia para consultar os passos ou removê-lo dos favoritos.</p>
          <div class="task-grid">
            ${guides.map(({ cat, task }) => taskCardHtml(cat, task)).join('')}
          </div>
        ` : `
          <div class="favorites-empty">
            <h2>Você ainda não salvou nenhum guia.</h2>
            <p>Abra uma tarefa e selecione <strong>Salvar nos favoritos</strong>. Seus favoritos ficam disponíveis neste navegador sempre que você entrar na sua conta.</p>
            <button type="button" class="auth-btn" onclick="goHome()">Explorar guias</button>
          </div>
        `}
      </div>
    </section>
  `;
}

function renderSearch(query) {
  const results = findSiteSearchResults(query);
  const safeQuery = escapeAppHtml(query);

  return `
    <div class="container fade-in">
      <div class="breadcrumb">
        <button onclick="goHome()">Início</button>
        <span class="sep">/</span>
        <span class="current">Busca: "${safeQuery}"</span>
      </div>
      ${results.length === 0 ? `
        <div class="empty-search">
          <h3>Nada encontrado</h3>
          <p>Tente termos como "pneu", "torneira", "arroz" ou "wifi". A busca também reconhece palavras dos passos e das dicas.</p>
        </div>
      ` : `
        <div class="section-title"><h2>${results.length} resultado${results.length !== 1 ? 's' : ''}</h2></div>
        <p class="search-help">Clique em qualquer resultado para abrir o guia completo.</p>
        <div class="task-grid">
          ${results.map(({ cat, task }) => taskCardHtml(cat, task)).join('')}
        </div>
      `}
    </div>
  `;
}

function render() {
  // Se estamos na tela de autenticação, o auth.js já é dono do <main>
  if (view.name === 'auth') return;
  const q = searchInput.value.trim();
  if (q.length > 0) {
    main.innerHTML = renderSearch(q);
    return;
  }
  if (view.name === 'home') main.innerHTML = renderHome();
  else if (view.name === 'category') main.innerHTML = renderCategory();
  else if (view.name === 'task') main.innerHTML = renderTask();
  else if (view.name === 'favorites') main.innerHTML = renderFavorites();
}

let searchTimer = null;
searchInput.addEventListener('input', () => {
  if (searchTimer) clearTimeout(searchTimer);
  searchTimer = setTimeout(render, 150);
});

// Expose to inline handlers
window.goHome = goHome;
window.openCategory = openCategory;
window.openTask = openTask;
window.openFavorites = openFavorites;
window.toggleFavoriteFromGuide = toggleFavoriteFromGuide;
window.jumpTo = jumpTo;
window.view = view;
window.render = render;

render();
