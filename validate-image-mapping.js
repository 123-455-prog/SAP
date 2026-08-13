const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectDir = __dirname;
const source = fs.readFileSync(path.join(projectDir, 'data.js'), 'utf8');
const context = vm.createContext({});
vm.runInContext(source, context, { filename: 'data.js' });

const categories = vm.runInContext('CATEGORIES', context);
const tasks = categories.flatMap(category => category.tasks.map(task => ({ category: category.name, ...task })));
const issues = [];

for (const task of tasks) {
  if (!task.imageUrl || !task.imageUrl.startsWith('image/')) {
    issues.push(`${task.id}: imageUrl inválido`);
    continue;
  }
  if (!task.imageAlt) {
    issues.push(`${task.id}: imageAlt ausente`);
  }
  if (!fs.existsSync(path.join(projectDir, task.imageUrl))) {
    issues.push(`${task.id}: arquivo não encontrado (${task.imageUrl})`);
  }
}

if (issues.length) {
  console.error(issues.join('\n'));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'ok',
  tasksWithImages: tasks.length,
  localImagesInDirectory: fs.readdirSync(path.join(projectDir, 'image')).length,
}, null, 2));
