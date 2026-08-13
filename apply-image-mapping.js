const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const dataPath = path.join(projectDir, 'data.js');
const imageDir = path.join(projectDir, 'image');

const mapping = {
  'trocar-pneu': { file: 'image.png', alt: 'Pneu furado em um carro' },
  'chupeta bateria': { file: 'chupeta.png', alt: 'Cabos de chupeta para bateria de carro' },
  'oleo do carro': { file: 'oleo.png', alt: 'Verificação do óleo do motor' },
  'trocar palheta': { file: 'palheta.png', alt: 'Palheta de limpador de para-brisa' },
  'calibrar pneu': { file: 'pneu.png', alt: 'Calibragem de pneu de carro' },
  'trocar torneira': { file: 'pia.png', alt: 'Torneira de pia' },
  'desentupir a pia': { file: 'desentupir.png', alt: 'Desentupimento de pia' },
  'arrumar descarga': { file: 'descarga.png', alt: 'Reparo de descarga sanitária' },
  'trocar a resistencia': { file: 'chuveiro.png', alt: 'Chuveiro elétrico' },
  'vazamento da mangueira': { file: 'vazamento.webp', alt: 'Vazamento de água em casa' },
  'trocar a lampada': { file: 'lampada.png', alt: 'Troca de lâmpada' },
  'resetar o disjuntor': { file: 'dijuntor.png', alt: 'Quadro de disjuntores' },
  'trocar a tomada': { file: 'tomada.png', alt: 'Tomada elétrica' },
  'furar a parede': { file: 'furar.png', alt: 'Furadeira em parede' },
  'fazer arroz soltinho': { file: 'arroz.png', alt: 'Arroz cozido' },
  'fazer ovo frito': { file: 'ovo.webp', alt: 'Ovo frito' },
  'fazer cha': { file: 'cha.png', alt: 'Xícara de chá' },
  macarrao: { file: 'macarrao.png', alt: 'Macarrão preparado' },
  feijao: { file: 'feijao.png', alt: 'Feijão cozido' },
  'lavar a maquina': { file: 'maquinalavar.png', alt: 'Máquina de lavar roupas' },
  'pendurar um quadro': { file: 'quadro.png', alt: 'Quadro pendurado na parede' },
  'organizara a geladeira': { file: 'geladeira.png', alt: 'Geladeira organizada' },
  'identificar um mofo': { file: 'mofo.png', alt: 'Mofo em ambiente doméstico' },
  'resetar o wifi': { file: 'moldem.png', alt: 'Modem ou roteador Wi-Fi' },
  'senha forte': { file: 'seguro.png', alt: 'Segurança de senha' },
  'reconhecer golpes': { file: 'virus.png', alt: 'Proteção contra golpes online' },
  engasgo: { file: 'engasgo.png', alt: 'Socorro para engasgamento' },
  corte: { file: 'curativo.png', alt: 'Curativo para pequeno corte' },
  queimadura: { file: 'queimadura.png', alt: 'Cuidados com queimadura' },
  'febre alta': { file: 'dor.png', alt: 'Alívio de febre e dor' },
  'purificar a agua': { file: 'filtrar.png', alt: 'Filtragem de água' },
  'nos básicos': { file: 'nos.png', alt: 'Nós com corda' },
  'abrigo de emergência': { file: 'cabana.png', alt: 'Abrigo de emergência na natureza' },
  'fazer fogueira': { file: 'fogueira.png', alt: 'Fogueira acesa' },
  'orientação': { file: 'localizar.png', alt: 'Orientação e localização' },
  'plantas comestiveis': { file: 'fruta.png', alt: 'Planta ou fruta comestível' },
  'kit de sobrevivencia': { file: 'kit.png', alt: 'Kit de emergência' },
  apagao: { file: 'semluz.png', alt: 'Casa sem energia elétrica' },
  'incendio em casa': { file: 'incendio.png', alt: 'Incêndio doméstico' },
  'preso no elevador': { file: 'elevador.png', alt: 'Elevador' },
  assalto: { file: 'assalto.png', alt: 'Situação de assalto' },
  desmaio: { file: 'infarto.png', alt: 'Atendimento a parada cardíaca' },
};

let source = fs.readFileSync(dataPath, 'utf8');
const allTaskIds = [...source.matchAll(/^\s{8}id:\s*'([^']+)',/gm)].map(match => match[1]);

if (allTaskIds.length !== Object.keys(mapping).length) {
  throw new Error(`O catálogo tem ${allTaskIds.length} tarefas, mas o mapeamento contém ${Object.keys(mapping).length} imagens.`);
}

const missingIds = allTaskIds.filter(id => !mapping[id]);
if (missingIds.length) {
  throw new Error(`Tarefas sem imagem associada: ${missingIds.join(', ')}`);
}

fs.mkdirSync(imageDir, { recursive: true });
const copiedFiles = new Set();

for (const id of allTaskIds) {
  const { file, alt } = mapping[id];
  const sourceImage = path.join(projectDir, file);
  const targetImage = path.join(imageDir, file);

  if (!fs.existsSync(sourceImage)) {
    throw new Error(`Arquivo de imagem ausente: ${file}`);
  }
  if (!copiedFiles.has(file)) {
    fs.copyFileSync(sourceImage, targetImage);
    copiedFiles.add(file);
  }

  const taskStart = source.indexOf(`id: '${id}',`);
  const nextTaskStart = source.indexOf("\n      {\n        id:", taskStart + 1);
  const taskEnd = nextTaskStart === -1 ? source.length : nextTaskStart;
  let taskBlock = source.slice(taskStart, taskEnd);

  taskBlock = taskBlock.replace(/\n\s*imageAlt:\s*'[^']*',/g, '');
  const imageLine = /^(\s*)imageUrl:\s*'[^']*',/m;
  if (!imageLine.test(taskBlock)) {
    throw new Error(`Campo imageUrl não encontrado na tarefa: ${id}`);
  }

  taskBlock = taskBlock.replace(imageLine, (line, indent) =>
    `${indent}imageUrl: 'image/${file}',\n${indent}imageAlt: '${alt}',`
  );

  source = source.slice(0, taskStart) + taskBlock + source.slice(taskEnd);
}

fs.copyFileSync(dataPath, `${dataPath}.before-image-mapping`);
fs.writeFileSync(dataPath, source);
console.log(JSON.stringify({
  updatedTasks: allTaskIds.length,
  copiedImages: copiedFiles.size,
  imageDirectory: 'image/',
}, null, 2));
