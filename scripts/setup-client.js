#!/usr/bin/env node
/**
 * Copia a config do cliente para config/ antes do build.
 *
 * Uso: NEXT_PUBLIC_CLIENT=joao-silva node scripts/setup-client.js
 *
 * Estrutura esperada:
 *   config/clients/joao-silva/site.json
 *   config/clients/joao-silva/content.json
 *   config/clients/joao-silva/theme.json
 */

const fs = require('fs');
const path = require('path');

const client = process.env.NEXT_PUBLIC_CLIENT;

if (!client) {
  console.log('[setup-client] Sem NEXT_PUBLIC_CLIENT — build de portfólio/demo.');
  process.exit(0);
}

const src = path.resolve(__dirname, '..', 'config', 'clients', client);
const dest = path.resolve(__dirname, '..', 'config');

if (!fs.existsSync(src)) {
  console.error(`[setup-client] Pasta não encontrada: ${src}`);
  process.exit(1);
}

for (const file of ['site.json', 'content.json', 'theme.json']) {
  const srcFile = path.join(src, file);
  if (!fs.existsSync(srcFile)) {
    console.error(`[setup-client] Arquivo ausente: ${srcFile}`);
    process.exit(1);
  }
  fs.copyFileSync(srcFile, path.join(dest, file));
  console.log(`[setup-client] ${file} copiado de ${client}`);
}

console.log(`[setup-client] Config de "${client}" aplicada com sucesso.`);
