/* ============================================================
   auth.js — Login e Cadastro com Consentimento LGPD
   Armazena usuários apenas no navegador (localStorage).
   Não envia dados a servidores externos.
   ============================================================ */

const AUTH_STORAGE_KEY = 'SAP_users_v1';
const SESSION_STORAGE_KEY = 'SAP_session_v1';
const FAVORITES_STORAGE_PREFIX = 'SAP_favorites_v1:';

/* ------------------------------------------------------------
   Helpers de storage
   ------------------------------------------------------------ */
function loadUsers() {
  try { return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || []; }
  catch { return []; }
}
function saveUsers(list) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(list));
}
function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY)); }
  catch { return null; }
}
function setSession(user) {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
}
function clearSession() {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

/* ------------------------------------------------------------
   Favoritos — armazenados separadamente para cada usuário local
   ------------------------------------------------------------ */
function favoriteKey(email) {
  return FAVORITES_STORAGE_PREFIX + String(email || '').toLowerCase();
}

function getFavoritesForUser(email) {
  if (!email) return [];
  try {
    const saved = JSON.parse(localStorage.getItem(favoriteKey(email)));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveFavoritesForUser(email, favorites) {
  if (!email) return;
  localStorage.setItem(favoriteKey(email), JSON.stringify(favorites));
}

function isTaskFavorite(categoryId, taskId) {
  const session = getSession();
  if (!session) return false;
  return getFavoritesForUser(session.email)
    .some(item => item.categoryId === categoryId && item.taskId === taskId);
}

function toggleTaskFavorite(categoryId, taskId) {
  const session = getSession();
  if (!session) {
    toast('Entre ou crie uma conta para salvar favoritos.');
    openAuth('login');
    return false;
  }

  const favorites = getFavoritesForUser(session.email);
  const index = favorites.findIndex(item => item.categoryId === categoryId && item.taskId === taskId);

  if (index >= 0) {
    favorites.splice(index, 1);
    toast('Guia removido dos favoritos.', 'success');
  } else {
    favorites.push({ categoryId, taskId, savedAt: new Date().toISOString() });
    toast('Guia salvo nos favoritos.', 'success');
  }

  saveFavoritesForUser(session.email, favorites);
  renderAuthArea();
  if (window.render) window.render();
  return index < 0;
}

/* ------------------------------------------------------------
   Hash simples para não guardar a senha em texto puro
   (obs.: hash real de produção usa bcrypt/argon2 no backend;
   este é apenas para demonstração local didática).
   ------------------------------------------------------------ */
async function hashPassword(pw) {
  const data = new TextEncoder().encode(pw + '::SAP::salt');
  const buf = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/* ------------------------------------------------------------
   Toast
   ------------------------------------------------------------ */
function toast(msg, type) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.className = 'toast'; }, 2600);
}

/* ------------------------------------------------------------
   Estado
   ------------------------------------------------------------ */
let authMode = 'login'; // 'login' | 'signup'

/* ------------------------------------------------------------
   Chip do usuário no header
   ------------------------------------------------------------ */
function renderAuthArea() {
  const area = document.getElementById('authArea');
  if (!area) return;
  const session = getSession();
  if (session) {
    const initials = (session.nome || 'U').trim().split(/\s+/).map(p => p[0]).slice(0, 2).join('').toUpperCase();
    const favoriteCount = getFavoritesForUser(session.email).length;
    area.innerHTML = `
      <div class="user-chip" title="Logado como ${escapeHtml(session.email)}">
        <span class="avatar" aria-hidden="true">${escapeHtml(initials)}</span>
        <span>${escapeHtml(session.nome.split(' ')[0])}</span>
        <button class="favorites-link" onclick="openFavorites()" aria-label="Abrir meus favoritos">Favoritos <span class="favorite-count">${favoriteCount}</span></button>
        <button class="logout" onclick="doLogout()" aria-label="Sair">sair</button>
      </div>`;
  } else {
    area.innerHTML = `
      <button class="auth-btn" onclick="openAuth('login')" aria-label="Entrar ou criar conta">Entrar / Cadastrar</button>
    `;
  }
}

function doLogout() {
  clearSession();
  renderAuthArea();
  toast('Sessão encerrada', 'success');
  if (window.render) window.render();
}

/* ------------------------------------------------------------
   Escapar HTML — segurança
   ------------------------------------------------------------ */
function escapeHtml(s) {
  return (s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

/* ------------------------------------------------------------
   Abrir a área de autenticação (login/cadastro)
   ------------------------------------------------------------ */
function openAuth(mode) {
  authMode = mode || 'login';
  if (window.view) window.view = { name: 'auth' };
  renderAuthView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchAuth(mode) {
  authMode = mode;
  renderAuthView();
}

/* ------------------------------------------------------------
   Renderiza a tela de auth dentro do <main>
   ------------------------------------------------------------ */
function renderAuthView() {
  const main = document.getElementById('main');
  if (!main) return;
  const isLogin = authMode === 'login';

  main.innerHTML = `
    <section class="auth-wrap fade-in" aria-labelledby="authTitle">
      <div class="auth-card">
        <div class="brand-row">
          <div class="mark" aria-hidden="true" style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand-2));display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:22px;box-shadow:0 6px 18px rgba(232,70,43,.35)">S</div>
          <div>
            <h1 id="authTitle">${isLogin ? 'Entrar na sua conta' : 'Criar conta'}</h1>
            <p class="subhead">${isLogin ? 'Acesse seus favoritos e histórico de guias.' : 'Cadastre-se para salvar seus guias favoritos.'}</p>
          </div>
        </div>

        <div class="form-tabs" role="tablist" aria-label="Escolha entre login ou cadastro">
          <button role="tab" aria-selected="${isLogin}" class="${isLogin ? 'active' : ''}" onclick="switchAuth('login')">Entrar</button>
          <button role="tab" aria-selected="${!isLogin}" class="${!isLogin ? 'active' : ''}" onclick="switchAuth('signup')">Cadastrar</button>
        </div>

        ${isLogin ? renderLoginForm() : renderSignupForm()}

        <div class="auth-footer">
          ${isLogin
            ? `Ainda não tem conta? <button onclick="switchAuth('signup')">Cadastre-se</button>`
            : `Já tem conta? <button onclick="switchAuth('login')">Entrar</button>`
          }
        </div>

        <p class="privacy-note">
          Este site respeita a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
          Seus dados são armazenados <strong>apenas neste navegador</strong> e nunca são enviados a terceiros.
          <a href="#" onclick="openPrivacy(); return false;">Ver política completa</a>.
        </p>
      </div>
    </section>
  `;

  attachAuthHandlers();
}

/* ------------------------------------------------------------
   Formulário de LOGIN
   ------------------------------------------------------------ */
function renderLoginForm() {
  return `
    <form id="loginForm" novalidate aria-describedby="loginTitle">
      <div class="field" id="fLoginEmail">
        <label for="loginEmail">E-mail <span class="req" aria-hidden="true">*</span></label>
        <input id="loginEmail" name="email" type="email" autocomplete="email" required
               aria-required="true" aria-describedby="loginEmailErr" placeholder="voce@exemplo.com" />
        <span class="error" id="loginEmailErr">Informe um e-mail válido.</span>
      </div>

      <div class="field" id="fLoginPass">
        <label for="loginPass">Senha <span class="req" aria-hidden="true">*</span></label>
        <div class="password-wrap">
          <input id="loginPass" name="password" type="password" autocomplete="current-password"
                 required aria-required="true" aria-describedby="loginPassErr" placeholder="Sua senha" />
          <button type="button" class="toggle" onclick="togglePw('loginPass', this)" aria-label="Mostrar ou ocultar senha">mostrar</button>
        </div>
        <span class="error" id="loginPassErr">Informe sua senha.</span>
      </div>

      <div class="consent-item" style="margin:12px 0 20px">
        <input id="rememberMe" type="checkbox" />
        <label for="rememberMe" style="cursor:pointer;font-weight:500;color:var(--muted)">Manter conectado neste navegador</label>
      </div>

      <button class="submit-btn" type="submit">Entrar</button>
    </form>
  `;
}

/* ------------------------------------------------------------
   Formulário de CADASTRO (com consentimentos LGPD)
   ------------------------------------------------------------ */
function renderSignupForm() {
  return `
    <form id="signupForm" novalidate aria-describedby="authTitle">
      <div class="field" id="fNome">
        <label for="suNome">Nome completo <span class="req" aria-hidden="true">*</span></label>
        <input id="suNome" name="nome" type="text" autocomplete="name" required
               aria-required="true" aria-describedby="suNomeErr" placeholder="Ex: Maria da Silva" />
        <span class="error" id="suNomeErr">Informe seu nome (mínimo 3 caracteres).</span>
      </div>

      <div class="field" id="fEmail">
        <label for="suEmail">E-mail <span class="req" aria-hidden="true">*</span></label>
        <input id="suEmail" name="email" type="email" autocomplete="email" required
               aria-required="true" aria-describedby="suEmailErr" placeholder="voce@exemplo.com" />
        <span class="error" id="suEmailErr">Informe um e-mail válido.</span>
      </div>

      <div class="field" id="fFone">
        <label for="suFone">Telefone <span style="font-weight:500;color:var(--muted);font-size:11px">(opcional)</span></label>
        <input id="suFone" name="telefone" type="tel" autocomplete="tel" placeholder="(11) 99999-9999"
               aria-describedby="suFoneHint" />
        <span class="hint" id="suFoneHint">Usaremos apenas se você marcar a opção de contato abaixo.</span>
      </div>

      <div class="field" id="fNasc">
        <label for="suNasc">Data de nascimento <span class="req" aria-hidden="true">*</span></label>
        <input id="suNasc" name="nascimento" type="date" required aria-required="true"
               aria-describedby="suNascErr suNascHint" />
        <span class="hint" id="suNascHint">Verificamos que você tem 18 anos ou mais.</span>
        <span class="error" id="suNascErr">Você precisa ter 18 anos ou mais para se cadastrar.</span>
      </div>

      <div class="field" id="fPass">
        <label for="suPass">Senha <span class="req" aria-hidden="true">*</span></label>
        <div class="password-wrap">
          <input id="suPass" name="password" type="password" autocomplete="new-password"
                 required aria-required="true" aria-describedby="suPassErr suPassHint"
                 placeholder="Mínimo 8 caracteres" minlength="8" />
          <button type="button" class="toggle" onclick="togglePw('suPass', this)" aria-label="Mostrar ou ocultar senha">mostrar</button>
        </div>
        <div class="strength" id="pwStrength" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <span class="hint" id="suPassHint">Use letras, números e símbolos para uma senha forte.</span>
        <span class="error" id="suPassErr">Senha precisa ter no mínimo 8 caracteres.</span>
      </div>

      <div class="field" id="fPass2">
        <label for="suPass2">Confirmar senha <span class="req" aria-hidden="true">*</span></label>
        <input id="suPass2" name="password2" type="password" autocomplete="new-password"
               required aria-required="true" aria-describedby="suPass2Err" placeholder="Repita a senha" />
        <span class="error" id="suPass2Err">As senhas não coincidem.</span>
      </div>

      <!-- BLOCO LGPD -->
      <fieldset class="consent-group" aria-labelledby="lgpdTitle">
        <legend id="lgpdTitle" style="padding:0"></legend>
        <h4>Consentimento LGPD</h4>

        <label class="consent-item" for="lgpdTermos">
          <input id="lgpdTermos" name="lgpdTermos" type="checkbox" required aria-required="true" />
          <span>
            Li e concordo com os
            <a href="#" onclick="openTerms(); return false;">Termos de Uso</a>
            e a
            <a href="#" onclick="openPrivacy(); return false;">Política de Privacidade</a>.
            <span class="req-mark" aria-hidden="true">*</span>
          </span>
        </label>

        <label class="consent-item" for="lgpdDados">
          <input id="lgpdDados" name="lgpdDados" type="checkbox" required aria-required="true" />
          <span>
            <strong>Consinto o tratamento dos meus dados pessoais</strong> (nome, e-mail e data de nascimento)
            para criar e manter minha conta, nos termos do art. 7º, I da Lei nº 13.709/2018 (LGPD).
            <span class="req-mark" aria-hidden="true">*</span>
          </span>
        </label>

        <label class="consent-item" for="lgpdComunicacao">
          <input id="lgpdComunicacao" name="lgpdComunicacao" type="checkbox" />
          <span>
            (Opcional) Aceito receber comunicações por e-mail sobre novos guias e novidades.
            Posso revogar este consentimento a qualquer momento.
          </span>
        </label>

        <label class="consent-item" for="lgpdMaior">
          <input id="lgpdMaior" name="lgpdMaior" type="checkbox" required aria-required="true" />
          <span>
            Declaro ter <strong>18 anos ou mais</strong> e estar apto(a) a fornecer este consentimento.
            <span class="req-mark" aria-hidden="true">*</span>
          </span>
        </label>

        <div class="consent-error" id="consentErr" role="alert">
          É necessário marcar os itens obrigatórios (marcados com *) para prosseguir.
        </div>
      </fieldset>

      <button class="submit-btn" type="submit" id="submitBtn">Criar conta</button>
    </form>
  `;
}

/* ------------------------------------------------------------
   Anexar comportamentos ao form recém-renderizado
   ------------------------------------------------------------ */
function attachAuthHandlers() {
  const login = document.getElementById('loginForm');
  const signup = document.getElementById('signupForm');
  if (login) login.addEventListener('submit', handleLogin);
  if (signup) {
    signup.addEventListener('submit', handleSignup);
    const pw = document.getElementById('suPass');
    if (pw) pw.addEventListener('input', updateStrengthMeter);
  }
}

function togglePw(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const showing = el.type === 'text';
  el.type = showing ? 'password' : 'text';
  btn.textContent = showing ? 'mostrar' : 'ocultar';
}

/* ------------------------------------------------------------
   Medidor de força de senha
   ------------------------------------------------------------ */
function updateStrengthMeter() {
  const pw = document.getElementById('suPass').value;
  const meter = document.getElementById('pwStrength');
  if (!meter) return;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  meter.className = 'strength';
  if (pw.length === 0) return;
  if (score <= 1) meter.classList.add('weak');
  else if (score === 2) meter.classList.add('medium');
  else if (score === 3) meter.classList.add('strong');
  else meter.classList.add('great');
}

/* ------------------------------------------------------------
   Validação de campos
   ------------------------------------------------------------ */
function setInvalid(fieldId, isInvalid) {
  const el = document.getElementById(fieldId);
  if (!el) return;
  el.classList.toggle('invalid', !!isInvalid);
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function ageFromDate(dateStr) {
  if (!dateStr) return -1;
  const b = new Date(dateStr);
  if (isNaN(b)) return -1;
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  return age;
}

/* ------------------------------------------------------------
   Fluxo de LOGIN
   ------------------------------------------------------------ */
async function handleLogin(ev) {
  ev.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPass').value;

  let ok = true;
  setInvalid('fLoginEmail', !isValidEmail(email)); if (!isValidEmail(email)) ok = false;
  setInvalid('fLoginPass', !pass); if (!pass) ok = false;
  if (!ok) return;

  const users = loadUsers();
  const user = users.find(u => u.email === email);
  if (!user) {
    setInvalid('fLoginEmail', true);
    document.getElementById('loginEmailErr').textContent = 'Nenhuma conta encontrada com esse e-mail.';
    return;
  }
  const hashed = await hashPassword(pass);
  if (hashed !== user.passwordHash) {
    setInvalid('fLoginPass', true);
    document.getElementById('loginPassErr').textContent = 'Senha incorreta.';
    return;
  }

  setSession({
    email: user.email,
    nome: user.nome,
    lgpdComunicacao: !!user.lgpdComunicacao,
  });
  renderAuthArea();
  toast('Bem-vindo(a), ' + user.nome.split(' ')[0] + '!', 'success');
  if (window.goHome) window.goHome();
}

/* ------------------------------------------------------------
   Fluxo de CADASTRO
   ------------------------------------------------------------ */
async function handleSignup(ev) {
  ev.preventDefault();

  const nome = document.getElementById('suNome').value.trim();
  const email = document.getElementById('suEmail').value.trim().toLowerCase();
  const telefone = document.getElementById('suFone').value.trim();
  const nasc = document.getElementById('suNasc').value;
  const pass = document.getElementById('suPass').value;
  const pass2 = document.getElementById('suPass2').value;

  const termos = document.getElementById('lgpdTermos').checked;
  const dados = document.getElementById('lgpdDados').checked;
  const maior = document.getElementById('lgpdMaior').checked;
  const comunicacao = document.getElementById('lgpdComunicacao').checked;

  let ok = true;

  const nomeValid = nome.length >= 3 && /\s/.test(nome);
  setInvalid('fNome', !nomeValid);
  if (!nomeValid) {
    document.getElementById('suNomeErr').textContent = 'Informe seu nome completo (nome e sobrenome).';
    ok = false;
  }

  const emailValid = isValidEmail(email);
  setInvalid('fEmail', !emailValid);
  if (!emailValid) { ok = false; }

  const idade = ageFromDate(nasc);
  const nascValid = idade >= 18 && idade <= 120;
  setInvalid('fNasc', !nascValid);
  if (!nascValid) ok = false;

  const passValid = pass.length >= 8;
  setInvalid('fPass', !passValid);
  if (!passValid) ok = false;

  const pass2Valid = pass === pass2 && pass.length > 0;
  setInvalid('fPass2', !pass2Valid);
  if (!pass2Valid) ok = false;

  // Consentimento LGPD obrigatório
  const consentOk = termos && dados && maior;
  const consentErrEl = document.getElementById('consentErr');
  consentErrEl.classList.toggle('show', !consentOk);
  if (!consentOk) ok = false;

  if (!ok) {
    // Foca no primeiro campo inválido
    const firstInvalid = document.querySelector('.field.invalid input, .field.invalid select');
    if (firstInvalid) firstInvalid.focus();
    else if (!consentOk) document.getElementById('lgpdTermos').focus();
    toast('Verifique os campos destacados', '');
    return;
  }

  // Verifica se e-mail já existe
  const users = loadUsers();
  if (users.some(u => u.email === email)) {
    setInvalid('fEmail', true);
    document.getElementById('suEmailErr').textContent = 'Este e-mail já está cadastrado. Faça login.';
    document.getElementById('suEmail').focus();
    return;
  }

  // Registra o timestamp de consentimento — exigência de rastreabilidade LGPD
  const consentRecord = {
    timestamp: new Date().toISOString(),
    ip: 'não coletado (armazenamento local)',
    versaoTermos: '1.0.0',
    itens: {
      termos: true,
      tratamentoDados: true,
      maiorIdade: true,
      comunicacaoMarketing: comunicacao,
    },
  };

  const passwordHash = await hashPassword(pass);

  const newUser = {
    email,
    nome,
    telefone: telefone || null,
    nascimento: nasc,
    passwordHash,
    lgpdComunicacao: comunicacao,
    consentRecord,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  setSession({ email: newUser.email, nome: newUser.nome, lgpdComunicacao: comunicacao });
  renderAuthArea();
  toast('Conta criada com sucesso!', 'success');
  if (window.goHome) window.goHome();
}

/* ------------------------------------------------------------
   Modais informativos — Termos e Política
   ------------------------------------------------------------ */
function openTerms() {
  showInfoModal('Termos de Uso', `
    <p><strong>1. Objeto.</strong> O SAp é uma plataforma educacional gratuita de guias práticos para tarefas do dia-a-dia.</p>
    <p><strong>2. Uso responsável.</strong> Os conteúdos são informativos. Para tarefas que envolvem risco (elétrica, gás, primeiros socorros graves), sempre priorize a orientação de um profissional.</p>
    <p><strong>3. Cadastro.</strong> Você pode navegar sem cadastro. O cadastro é opcional e serve para salvar favoritos.</p>
    <p><strong>4. Vedações.</strong> É proibido usar a plataforma para atividades ilegais, publicar conteúdo ofensivo ou desrespeitar outros usuários.</p>
    <p><strong>5. Encerramento de conta.</strong> Você pode excluir sua conta a qualquer momento pelo menu do usuário.</p>
    <p><em>Versão 1.0.0 — última atualização em 2026-07.</em></p>
  `);
}

function openPrivacy() {
  showInfoModal('Política de Privacidade — LGPD', `
    <p>Esta política descreve como tratamos seus dados pessoais em conformidade com a <strong>Lei nº 13.709/2018 (LGPD)</strong>.</p>

    <p><strong>Dados coletados</strong></p>
    <ul style="padding-left:20px;line-height:1.7">
      <li>Nome completo, e-mail e data de nascimento (obrigatórios para cadastro).</li>
      <li>Telefone (opcional).</li>
      <li>Senha, armazenada com hash SHA-256 + salt (não guardamos senha em texto puro).</li>
      <li>Registro do consentimento (data/hora e itens marcados).</li>
    </ul>

    <p><strong>Finalidade</strong></p>
    <ul style="padding-left:20px;line-height:1.7">
      <li>Criar e manter a sua conta.</li>
      <li>Salvar suas preferências (favoritos, histórico).</li>
      <li>Enviar comunicações apenas se você optar pelo marketing.</li>
    </ul>

    <p><strong>Base legal</strong> — Consentimento (art. 7º, I, LGPD).</p>

    <p><strong>Onde ficam seus dados</strong> — <strong>Apenas neste navegador</strong> (localStorage). Não enviamos, vendemos ou compartilhamos com terceiros.</p>

    <p><strong>Seus direitos (art. 18, LGPD)</strong> — Você pode a qualquer momento: acessar, corrigir, excluir seus dados, revogar consentimento e solicitar portabilidade. Para exercer, use as opções do perfil ou envie e-mail para <em>privacidade@manodojeito.exemplo</em>.</p>

    <p><strong>Retenção</strong> — Mantemos os dados enquanto sua conta estiver ativa. Ao excluir a conta, os dados são removidos imediatamente.</p>

    <p><strong>Encarregado (DPO)</strong> — privacidade@sap.exemplo</p>

    <p><em>Versão 1.0.0 — última atualização em 2026-07.</em></p>
  `);
}

function showInfoModal(title, htmlBody) {
  let modal = document.getElementById('infoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'infoModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(6,8,20,.6);display:flex;align-items:center;justify-content:center;z-index:200;padding:20px;backdrop-filter:blur(4px)';
    document.body.appendChild(modal);
  }
  modal.innerHTML = `
    <div style="background:#fff;border-radius:20px;max-width:640px;width:100%;max-height:85vh;overflow:auto;padding:32px 32px 24px;box-shadow:0 30px 80px rgba(0,0,0,.4)" role="document">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;gap:12px">
        <h2 style="font-size:22px;font-weight:900;letter-spacing:-.02em">${escapeHtml(title)}</h2>
        <button onclick="closeInfoModal()" aria-label="Fechar" style="font-size:24px;color:#6b7280;padding:4px 10px;border-radius:8px">×</button>
      </div>
      <div style="font-size:14.5px;line-height:1.65;color:#333;display:flex;flex-direction:column;gap:10px">${htmlBody}</div>
      <div style="margin-top:22px;text-align:right">
        <button onclick="closeInfoModal()" class="submit-btn" style="width:auto;padding:10px 22px">Entendi</button>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
  modal.addEventListener('click', (e) => { if (e.target === modal) closeInfoModal(); });
}

function closeInfoModal() {
  const m = document.getElementById('infoModal');
  if (m) m.style.display = 'none';
}

/* ------------------------------------------------------------
   Init
   ------------------------------------------------------------ */
window.openAuth = openAuth;
window.switchAuth = switchAuth;
window.togglePw = togglePw;
window.doLogout = doLogout;
window.getSession = getSession;
window.getFavoritesForUser = getFavoritesForUser;
window.isTaskFavorite = isTaskFavorite;
window.toggleTaskFavorite = toggleTaskFavorite;
window.openTerms = openTerms;
window.openPrivacy = openPrivacy;
window.closeInfoModal = closeInfoModal;

document.addEventListener('DOMContentLoaded', renderAuthArea);
// Se o script carregar depois do DOMContentLoaded, chama de qualquer forma
if (document.readyState !== 'loading') renderAuthArea();
