#!/usr/bin/env node
/**
 * Aplica a config do cliente em config/ antes do build.
 *
 * Modo 1 — Repositório privado (produção/Netlify):
 *   NEXT_PUBLIC_CLIENT=joao-silva
 *   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx   ← token de leitura
 *   GITHUB_CLIENTS_REPO=seu-usuario/landing-page-clients
 *
 *   O script clona o repo privado e copia a pasta do cliente:
 *   landing-page-clients/joao-silva/{site,content,theme}.json → config/
 *
 * Modo 2 — Arquivos locais (desenvolvimento):
 *   NEXT_PUBLIC_CLIENT=joao-silva
 *   config/clients/joao-silva/{site,content,theme}.json
 *
 * Se NEXT_PUBLIC_CLIENT não estiver definido, encerra sem erros
 * (build de portfólio/demo).
 */

const fs   = require('fs');
const path = require('path');
const os   = require('os');
const { execSync } = require('child_process');

const client      = process.env.NEXT_PUBLIC_CLIENT;
const token       = process.env.GITHUB_TOKEN;
const clientsRepo = process.env.GITHUB_CLIENTS_REPO;

// ─── Sem cliente definido → build de portfólio/demo ──────────────────────────

if (!client) {
  console.log('[setup-client] Sem NEXT_PUBLIC_CLIENT — build de portfólio/demo.');
  process.exit(0);
}

console.log(`[setup-client] Configurando cliente: "${client}"`);

const dest = path.resolve(__dirname, '..', 'config');

// ─── Modo 1: repositório privado ─────────────────────────────────────────────

if (token && clientsRepo) {
  console.log(`[setup-client] Modo: repositório privado (${clientsRepo}).`);

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'lp-clients-'));

  try {
    const repoUrl = `https://${token}@github.com/${clientsRepo}.git`;

    console.log('[setup-client] Clonando repositório de clientes...');
    execSync(
      `git clone --depth=1 --quiet "${repoUrl}" "${tmpDir}"`,
      { stdio: 'pipe' }
    );

    const clientSrc = path.join(tmpDir, client);

    if (!fs.existsSync(clientSrc)) {
      console.error(`[setup-client] Cliente "${client}" não encontrado no repositório ${clientsRepo}.`);
      console.error(`[setup-client] Verifique se a pasta "${client}/" existe no repo de clientes.`);
      process.exit(1);
    }

    for (const file of ['site.json', 'content.json', 'theme.json']) {
      const srcFile = path.join(clientSrc, file);
      if (!fs.existsSync(srcFile)) {
        console.error(`[setup-client] Arquivo ausente no repo de clientes: ${client}/${file}`);
        process.exit(1);
      }
      fs.copyFileSync(srcFile, path.join(dest, file));
      console.log(`[setup-client] ${file} copiado do repositório privado.`);
    }

    console.log(`[setup-client] Config de "${client}" aplicada com sucesso.`);
  } finally {
    // Remove o clone temporário independente de sucesso ou erro
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }

  process.exit(0);
}

// ─── Modo 2: arquivos locais ──────────────────────────────────────────────────

console.log('[setup-client] Modo: arquivos locais.');

const localSrc = path.resolve(__dirname, '..', 'config', 'clients', client);

if (!fs.existsSync(localSrc)) {
  console.error(`[setup-client] Pasta local não encontrada: ${localSrc}`);
  console.error('[setup-client] Para produção, defina GITHUB_TOKEN e GITHUB_CLIENTS_REPO.');
  console.error('[setup-client] Para desenvolvimento, crie config/clients/' + client + '/');
  process.exit(1);
}

for (const file of ['site.json', 'content.json', 'theme.json']) {
  const srcFile = path.join(localSrc, file);
  if (!fs.existsSync(srcFile)) {
    console.error(`[setup-client] Arquivo ausente: ${srcFile}`);
    process.exit(1);
  }
  fs.copyFileSync(srcFile, path.join(dest, file));
  console.log(`[setup-client] ${file} copiado de config/clients/${client}/`);
}

console.log(`[setup-client] Config de "${client}" aplicada com sucesso.`);
