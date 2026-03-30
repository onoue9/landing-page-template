#!/usr/bin/env node
/**
 * Gera um arquivo .env com as variáveis de config de um cliente,
 * com os JSONs minificados em uma linha só (formato correto para .env).
 *
 * Uso:
 *   node scripts/generate-env.js saude-exemplo
 *   node scripts/generate-env.js saude-exemplo > .env
 */

const fs = require('fs');
const path = require('path');

const client = process.argv[2];

if (!client) {
  console.error('Uso: node scripts/generate-env.js <slug-do-cliente>');
  console.error('Exemplo: node scripts/generate-env.js saude-exemplo');
  process.exit(1);
}

const src = path.resolve(__dirname, '..', 'config', 'clients', client);

if (!fs.existsSync(src)) {
  console.error(`Pasta não encontrada: ${src}`);
  process.exit(1);
}

const files = {
  CONFIG_SITE:    'site.json',
  CONFIG_CONTENT: 'content.json',
  CONFIG_THEME:   'theme.json',
};

const lines = [`NEXT_PUBLIC_CLIENT=${client}`, ''];

for (const [envVar, file] of Object.entries(files)) {
  const filePath = path.join(src, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Arquivo ausente: ${filePath}`);
    process.exit(1);
  }
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  // Minifica em uma linha e escapa aspas simples dentro do valor
  const minified = JSON.stringify(json).replace(/'/g, "\\'");
  lines.push(`${envVar}='${minified}'`);
}

console.log(lines.join('\n'));
