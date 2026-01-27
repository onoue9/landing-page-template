# SaúdePro - Landing Page

Landing page de alta conversão para consultoria de planos de saúde.

## Tecnologias

- **Next.js 15** - Framework React com Static Export
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Netlify Forms** - Captura de leads

## Executar Localmente

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build
```

## Deploy

O projeto está configurado para deploy no **Netlify**:

1. Conecte o repositório ao Netlify
2. As configurações de build são detectadas automaticamente via `netlify.toml`
3. Acesse **Forms** no painel para ver os leads capturados

## Personalização

- `constants.tsx` - Dados configuráveis (telefone, benefícios, planos, operadoras)
- `app/layout.tsx` - Metadados SEO
- `public/logos/` - Logos das operadoras

## Estrutura

```
├── app/
│   ├── page.tsx          # Página principal
│   ├── layout.tsx        # Layout com metadados
│   └── privacidade/      # Política de privacidade
├── components/           # Componentes React
├── public/
│   ├── logos/            # Logos das operadoras
│   ├── sitemap.xml       # Sitemap para SEO
│   └── robots.txt        # Configuração de crawlers
└── constants.tsx         # Dados configuráveis
```
