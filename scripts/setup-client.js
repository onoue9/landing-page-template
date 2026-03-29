#!/usr/bin/env node
/**
 * Aplica a config do cliente em config/ antes do build.
 *
 * Modo 1 — Variáveis de ambiente (produção/Netlify):
 *   NEXT_PUBLIC_CLIENT=joao-silva
 *   CONFIG_SITE='{"company":{"name":"..."},...}'
 *   CONFIG_CONTENT='{"hero":{...},...}'
 *   CONFIG_THEME='{"colors":{...},...}'
 *
 * Modo 2 — Arquivos locais (desenvolvimento):
 *   NEXT_PUBLIC_CLIENT=joao-silva
 *   config/clients/joao-silva/site.json
 *   config/clients/joao-silva/content.json
 *   config/clients/joao-silva/theme.json
 *
 * Se NEXT_PUBLIC_CLIENT não estiver definido, o script encerra sem erros
 * (build de portfólio/demo).
 */

const fs = require('fs');
const path = require('path');

const client = process.env.NEXT_PUBLIC_CLIENT;

if (!client) {
  console.log('[setup-client] Sem NEXT_PUBLIC_CLIENT — build de portfólio/demo.');
  process.exit(0);
}

console.log(`[setup-client] Configurando cliente: "${client}"`);

const dest = path.resolve(__dirname, '..', 'config');

// ─── Modo 1: variáveis de ambiente ───────────────────────────────────────────

const ENV_VARS = {
  'site.json':    process.env.CONFIG_SITE,
  'content.json': process.env.CONFIG_CONTENT,
  'theme.json':   process.env.CONFIG_THEME,
};

const hasEnvVars = Object.values(ENV_VARS).every(Boolean);

if (hasEnvVars) {
  console.log('[setup-client] Modo: variáveis de ambiente.');

  for (const [file, value] of Object.entries(ENV_VARS)) {
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch {
      console.error(`[setup-client] CONFIG_${file.replace('.json', '').toUpperCase()} contém JSON inválido.`);
      process.exit(1);
    }
    fs.writeFileSync(
      path.join(dest, file),
      JSON.stringify(parsed, null, 2),
      'utf8'
    );
    console.log(`[setup-client] ${file} gravado a partir da variável de ambiente.`);
  }

  console.log(`[setup-client] Config de "${client}" aplicada com sucesso.`);
  process.exit(0);
}

// ─── Modo 2: arquivos locais ──────────────────────────────────────────────────

console.log('[setup-client] Modo: arquivos locais.');

const src = path.resolve(__dirname, '..', 'config', 'clients', client);

if (!fs.existsSync(src)) {
  console.error(`[setup-client] Pasta não encontrada: ${src}`);
  console.error('[setup-client] Defina CONFIG_SITE, CONFIG_CONTENT e CONFIG_THEME ou crie a pasta de config local.');
  process.exit(1);
}

for (const file of ['site.json', 'content.json', 'theme.json']) {
  const srcFile = path.join(src, file);
  if (!fs.existsSync(srcFile)) {
    console.error(`[setup-client] Arquivo ausente: ${srcFile}`);
    process.exit(1);
  }
  fs.copyFileSync(srcFile, path.join(dest, file));
  console.log(`[setup-client] ${file} copiado de config/clients/${client}/`);
}

console.log(`[setup-client] Config de "${client}" aplicada com sucesso.`);
