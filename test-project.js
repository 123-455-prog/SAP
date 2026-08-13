const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const projectDir = __dirname;
const read = (file) => fs.readFileSync(`${projectDir}/${file}`, 'utf8');

function runAiTests() {
  const context = vm.createContext({
    console,
    setTimeout,
    Math,
    document: {
      readyState: 'loading',
      addEventListener: () => {},
    },
    window: {},
  });

  vm.runInContext(read('data.js'), context, { filename: 'data.js' });
  vm.runInContext(read('ai.js'), context, { filename: 'ai.js' });

  const results = JSON.parse(vm.runInContext(`
    buildIndex();
    JSON.stringify([
      ['meu pneu furou', buildAnswer('meu pneu furou').matches[0].task.id],
      ['minha internet caiu', buildAnswer('minha internet caiu').matches[0].task.id],
      ['alguém engasgou', buildAnswer('alguém engasgou').matches[0].task.id],
      ['vazamento na pia', buildAnswer('vazamento na pia').matches[0].task.id],
      ['estrutura', buildAnswer('meu pneu furou').text.includes('Ponto mais relevante')],
    ])
  `, context));

  assert.strictEqual(results[0][1], 'trocar-pneu');
  assert.ok(results[1][1]);
  assert.ok(results[2][1]);
  assert.ok(results[3][1]);
  assert.strictEqual(results[4][1], true);

  return results;
}

function runSearchNavigationTests() {
  const main = { innerHTML: '' };
  const searchInput = {
    value: '',
    addEventListener: () => {},
  };
  const context = vm.createContext({
    console,
    window: { scrollTo: () => {} },
    document: {
      getElementById: (id) => ({ main, searchInput }[id] || null),
    },
  });

  vm.runInContext(read('data.js'), context, { filename: 'data.js' });
  vm.runInContext(read('app.js'), context, { filename: 'app.js' });

  const result = JSON.parse(vm.runInContext(`
    const searchResults = findSiteSearchResults('pneu furado');
    searchInput.value = 'pneu';
    openTask('carros', 'trocar-pneu');
    JSON.stringify({
      resultCount: searchResults.length,
      firstTask: searchResults[0].task.id,
      clearedSearch: searchInput.value === '',
      openedTask: main.innerHTML.includes('Trocar um pneu furado'),
      escapedQuery: renderSearch('<img src=x>').includes('&lt;img src=x&gt;'),
    })
  `, context));

  assert.ok(result.resultCount > 0);
  assert.strictEqual(result.firstTask, 'trocar-pneu');
  assert.strictEqual(result.clearedSearch, true);
  assert.strictEqual(result.openedTask, true);
  assert.strictEqual(result.escapedQuery, true);

  return result;
}

const aiResults = runAiTests();
const searchResults = runSearchNavigationTests();
console.log(JSON.stringify({ status: 'ok', aiResults, searchResults }, null, 2));
