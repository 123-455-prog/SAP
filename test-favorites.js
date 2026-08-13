const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const projectDir = __dirname;
const read = (file) => fs.readFileSync(path.join(projectDir, file), 'utf8');
const store = new Map();
const localStorage = {
  getItem: (key) => store.has(key) ? store.get(key) : null,
  setItem: (key, value) => store.set(key, String(value)),
  removeItem: (key) => store.delete(key),
};

const main = { innerHTML: '' };
const searchInput = { value: '', addEventListener: () => {} };
const authArea = { innerHTML: '' };
const toastElement = { textContent: '', className: '' };
const documentStub = {
  readyState: 'loading',
  addEventListener: () => {},
  getElementById: (id) => ({ main, searchInput, authArea, toast: toastElement }[id] || null),
};
const context = vm.createContext({
  console,
  localStorage,
  document: documentStub,
  window: { scrollTo: () => {} },
  setTimeout: (callback) => { callback(); return 1; },
  clearTimeout: () => {},
});

vm.runInContext(read('data.js'), context, { filename: 'data.js' });
vm.runInContext(read('auth.js'), context, { filename: 'auth.js' });
vm.runInContext(read('app.js'), context, { filename: 'app.js' });

let result = JSON.parse(vm.runInContext(`
  const userOne = { email: 'ana@example.com', nome: 'Ana Silva' };
  const userTwo = { email: 'bruno@example.com', nome: 'Bruno Lima' };
  localStorage.setItem('SAP_session_v1', JSON.stringify(userOne));

  const firstTask = CATEGORIES[0].tasks[0];
  const secondTask = CATEGORIES[1].tasks[0];
  toggleTaskFavorite(CATEGORIES[0].id, firstTask.id);
  toggleTaskFavorite(CATEGORIES[1].id, secondTask.id);
  const userOneFavorites = getFavoritesForUser(userOne.email);

  openFavorites();
  const favoritesViewShowsBoth = main.innerHTML.includes(firstTask.title) && main.innerHTML.includes(secondTask.title);
  const favoritesViewHasAccessibleHeading = main.innerHTML.includes('<h1>Meus favoritos</h1>');

  localStorage.setItem('SAP_session_v1', JSON.stringify(userTwo));
  const userTwoFavorites = getFavoritesForUser(userTwo.email);

  localStorage.setItem('SAP_session_v1', JSON.stringify(userOne));
  toggleTaskFavorite(CATEGORIES[0].id, firstTask.id);
  const afterRemoval = getFavoritesForUser(userOne.email);

  JSON.stringify({
    savedForCorrectUser: userOneFavorites.length === 2,
    persistedRecordHasIds: userOneFavorites[0].categoryId === CATEGORIES[0].id && userOneFavorites[0].taskId === firstTask.id,
    favoritesViewShowsBoth,
    favoritesViewHasAccessibleHeading,
    isolatedBetweenUsers: userTwoFavorites.length === 0,
    removedCorrectly: afterRemoval.length === 1 && afterRemoval[0].taskId === secondTask.id,
  })
`, context));
result.headerHasFavoriteAccess = authArea.innerHTML.includes('Favoritos');

Object.entries(result).forEach(([name, passed]) => assert.strictEqual(passed, true, `Teste falhou: ${name}`));
console.log(JSON.stringify({ status: 'ok', ...result }, null, 2));
