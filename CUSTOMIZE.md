# Guia de Personalização

Este guia explica como adaptar a landing page para um novo cliente.

---

## Arquivos de Configuração

```
config/
├── site.json      ← Empresa, navegação, redes sociais, WhatsApp, SEO
├── content.json   ← Textos de todas as seções da página
└── theme.json     ← Cores do site (primary, secondary, accent, etc.)
```

> Os arquivos são validados com Zod na inicialização. Se houver um campo obrigatório
> faltando ou com formato errado, o build vai falhar com uma mensagem clara indicando
> exatamente qual campo está incorreto.

---

## O que editar para cada cliente

### `config/site.json`

| Campo | O que mudar |
|-------|-------------|
| `company.name` | Nome completo da empresa |
| `company.namePrefix` + `company.nameHighlight` | Divisão visual do logo (ex: "Saúde" + "Pro") |
| `company.tagline` | Slogan curto |
| `company.email` | E-mail de contato |
| `company.whatsapp` | Número com código do país (ex: `5521999999999`) |
| `company.whatsappMessage` | Mensagem padrão ao clicar no WhatsApp |
| `social.instagram/facebook/linkedin` | URLs das redes sociais (use `null` para ocultar) |
| `nav.links` | Links do menu de navegação (desktop) |
| `nav.mobileLinks` | Links do menu mobile (subconjunto) |
| `nav.cta` | Texto do botão do header |
| `seo.title` | Título da aba do navegador |
| `seo.description` | Meta description para o Google |
| `seo.url` | URL de produção do site |
| `seo.ogImage` | Imagem de preview para WhatsApp/redes (1200×630px em `/public/`) |
| `footer.copyright` | Nome no rodapé |
| `footer.disclaimer` | Texto de aviso legal |

### `config/theme.json`

Altere as cores sem tocar em nenhum componente. As mudanças são aplicadas globalmente via CSS custom properties.

| Campo | Uso |
|-------|-----|
| `colors.primary` | Cor principal (botões, links, destaques) |
| `colors.primaryHover` | Hover da cor principal |
| `colors.secondary` | Cor de sucesso/confirmação |
| `colors.accent` | Cor de texto escuro |
| `colors.background` | Fundo geral da página |
| `colors.surface` | Fundo de cards e formulários |
| `colors.textMuted` | Texto secundário/cinza |

### `config/content.json`

| Seção | Campos importantes |
|-------|-------------------|
| `hero` | `title`, `titleHighlight`, `subtitle`, `image`, `features` |
| `benefits.items` | Até 4 benefícios com `title`, `description` e `icon` |
| `planTypes.items` | Tipos de plano com `title`, `description` e `image` |
| `operators.items` | Lista de operadoras (adicione logos em `/public/logos/`) |
| `pricing.items` | Cards de preço/serviço com `features`, `highlighted`, `cta` |
| `testimonials.items` | Depoimentos com `name`, `role`, `content`, `rating` |
| `faq.items` | Perguntas e respostas |
| `consultant` | Nome, cargo, bio, foto, credenciais (remova a seção para ocultar) |
| `form.planOptions` | Opções do select de tipo de plano |
| `cta` | Seção de call-to-action final |

### Logos e Imagens

| Arquivo | Uso |
|---------|-----|
| `/public/logos/` | Logos das operadoras parceiras (SVG ou PNG) |
| `/public/consultant.jpg` | Foto do consultor |
| `/public/og-image.jpg` | Imagem de preview social (1200×630px) |

---

## Modo Demonstração

Para enviar o link ao cliente sem risco de leads falsos chegando:

```bash
# Crie um arquivo .env.local com:
NEXT_PUBLIC_DEMO=true

# Execute normalmente:
npm run dev
```

Um banner amarelo aparece no topo e os formulários não enviam dados reais.

---

## Fluxo para novo cliente

1. **Clonar** este repositório para um novo
2. **Editar** `config/site.json`, `config/theme.json` e `config/content.json`
3. **Trocar** logos em `/public/logos/`, foto em `/public/consultant.jpg` e imagem OG em `/public/og-image.jpg`
4. **Atualizar** `public/sitemap.xml` e `public/robots.txt` com a URL do cliente
5. **Atualizar** as páginas legais em `/app/privacidade`, `/app/termos`, `/app/lgpd` com dados reais do cliente
6. **Testar** em modo demo: `NEXT_PUBLIC_DEMO=true npm run dev`
7. **Deploy** no Netlify (configurado automaticamente via `netlify.toml`)

---

## Comandos

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção → /out
npm run start    # Servir o build localmente
npm run lint     # Verificar erros de lint
```
