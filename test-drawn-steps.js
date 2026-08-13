const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const projectDir = __dirname;
const read = (file) => fs.readFileSync(path.join(projectDir, file), 'utf8');
const main = { innerHTML: '' };
const searchInput = { value: '', addEventListener: () => {} };
const context = vm.createContext({
  window: { scrollTo: () => {} },
  document: { getElementById: (id) => ({ main, searchInput }[id] || null) },
});

vm.runInContext(read('data.js'), context, { filename: 'data.js' });
vm.runInContext(read('app.js'), context, { filename: 'app.js' });

const report = JSON.parse(vm.runInContext(`
  const visualSteps = CATEGORIES.flatMap(category =>
    category.tasks.flatMap(task => task.steps
      .filter(step => step.art)
      .map(step => ({ task, step }))
    )
  );
  const failures = visualSteps.filter(({ task, step }) => {
    const html = stepImageHtml(task, step);
    return !html.includes('<svg') || html.includes('<img') || html.includes('illus--photo');
  });
  JSON.stringify({ visualSteps: visualSteps.length, failures: failures.map(({ task }) => task.id) })
`, context));

assert.ok(report.visualSteps > 0, 'Nenhum passo ilustrado foi encontrado.');
assert.deepStrictEqual(report.failures, [], 'Há passos que não estão usando o desenho SVG correto.');
console.log(JSON.stringify({ status: 'ok', visualSteps: report.visualSteps }, null, 2));
