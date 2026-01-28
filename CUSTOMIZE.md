# 🎨 Guia de Personalização

Este guia explica como adaptar a landing page para um novo cliente.

---

## Arquivos de Configuração

```
config/
├── site.json      ← Empresa, WhatsApp, SEO
├── content.json   ← Textos de todas as seções
└── theme.json     ← Cores (não usado atualmente)
```

---

## 📋 O que editar para cada cliente

### 1. `config/site.json`

| Campo | O que mudar |
|-------|-------------|
| `company.name` | Nome da empresa do cliente |
| `company.tagline` | Slogan curto |
| `company.whatsapp` | Número com código do país (ex: 5521999999999) |
| `company.whatsappMessage` | Mensagem padrão ao clicar no WhatsApp |
| `seo.title` | Título da aba do navegador |
| `seo.description` | Meta description para Google |
| `footer.copyright` | Nome que aparece no rodapé |

### 2. `config/content.json`

| Seção | Campos importantes |
|-------|-------------------|
| `hero` | `title`, `titleHighlight`, `subtitle`, `image` |
| `benefits.items` | 4 benefícios com `title` e `description` |
| `planTypes.items` | 3 tipos de plano com `title`, `description`, `image` |
| `operators.items` | Lista de operadoras (adicione logos em `/public/logos/`) |
| `testimonials.items` | 3 depoimentos com `name`, `role`, `content` |
| `faq.items` | Perguntas e respostas |
| `consultant` | Nome, cargo, bio, foto, credenciais |

### 3. Logos e Imagens

- **Logos de operadoras:** `/public/logos/` (SVG ou PNG)
- **Foto do consultor:** `/public/consultant.jpg`

---

## 🚀 Fluxo para novo cliente

1. **Clonar** este repositório para um novo
2. **Editar** os arquivos em `/config/`
3. **Trocar** logos e imagens em `/public/`
4. **Atualizar** URLs em `sitemap.xml` e `robots.txt`
5. **Deploy** no Netlify

---

## 🔧 Comandos úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Ver build local
npm run start
```

---

## 📁 Estrutura de pastas

```
├── app/                 # Páginas Next.js
├── components/          # Componentes React
├── config/              # ← EDITAR AQUI
├── lib/                 # Utilitários
└── public/              # Imagens e logos
```
