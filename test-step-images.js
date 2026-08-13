const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const projectDir = __dirname;
const read = (file) => fs.readFileSync(path.join(projectDir, file), 'utf8');
const main = { innerHTML: '' };
const searchInput = { value: '', addEventListener: () => {} };
const context = vm.createContext({
  console,
  window: { scrollTo: () => {} },
  document: {
    getElementById: (id) => ({ main, searchInput }[id] || null),
  },
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
    return !html.includes('illus--photo') ||
      !html.includes('src="' + task.imageUrl + '"') ||
      html.includes('<svg');
  });

  JSON.stringify({
    visualSteps: visualSteps.length,
    failures: failures.map(({ task }) => task.id),
    sample: stepImageHtml(CATEGORIES[0].tasks[0], CATEGORIES[0].tasks[0].steps[1]),
  })
`, context));

assert.ok(report.visualSteps > 0, 'Nenhum passo com ilustração foi encontrado.');
assert.deepStrictEqual(report.failures, [], 'Há passos que ainda não usam a foto da tarefa.');
assert.ok(report.sample.includes('image/image.png'), 'A foto local da tarefa de pneu não foi usada no passo.');

console.log(JSON.stringify({ status: 'ok', visualSteps: report.visualSteps }, null, 2));
