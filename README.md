# Create — Comunicação e Imagem

Website estático construído com [Astro](https://astro.build) e deployado na Cloudflare Workers.

## Estrutura

```
├── src/
│   ├── pages/
│   │   ├── index.astro        → Início (Home)
│   │   ├── sobre-nos.astro    → Sobre Nós
│   │   ├── servicos.astro     → Serviços
│   │   └── contactos.astro    → Contactos
│   ├── layouts/
│   │   └── Layout.astro       → Layout base (header + footer + meta tags)
│   ├── components/
│   │   ├── Header.astro       → Navegação + menu mobile
│   │   └── Footer.astro      → Rodapé + redes sociais
│   ├── styles/
│   │   └── global.css         → Tema dark/tech completo
│   └── worker.js              → Worker (redirect www → apex + serve assets)
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── wrangler.jsonc
├── package.json
└── .github/workflows/deploy.yml → CI/CD auto-deploy
```

## Desenvolvimento no GitHub (sem git local)

### 1. Criar repositório
1. Ir a [github.com/new](https://github.com/new)
2. Nome: `createdesign-site` (ou outro)
3. Private ou Public
4. **Não** inicializar com README
5. Create repository

### 2. Adicionar ficheiros
- No repositório, pressionar a tecla `.` para abrir o **github.dev** (VS Code no browser)
- Criar cada ficheiro/folder e colar o conteúdo
- Commit para `main`

### 3. Configurar secrets para auto-deploy
Em Settings → Secrets and variables → Actions → New repository secret:

| Secret | Valor |
|---|---|
| `CLOUDFLARE_API_TOKEN` | Token criado em [API Tokens](https://dash.cloudflare.com/profile/api-tokens) → template "Edit Cloudflare Workers" |
| `CLOUDFLARE_ACCOUNT_ID` | `7037e354b913ba50cc7669a9b2300a29` |

### 4. Deploy automático
Cada push para `main`:
1. Instala dependências
2. Faz build do Astro (`npm run build` → `dist/`)
3. Deploy com Wrangler para a Cloudflare Workers

O site fica disponível em **https://createdesign.pt**

## Desenvolvimento local (opcional)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build para ./dist
npm run deploy   # deploy direto (requer wrangler login)
```

## Personalização

- **Cores e tema:** editar variáveis CSS em `src/styles/global.css` (`:root`)
- **Conteúdo das páginas:** editar os ficheiros em `src/pages/`
- **Serviços:** editar o array `services` em `src/pages/servicos.astro` e `src/pages/index.astro`
- **Contactos:** atualizar email, telefone em `src/pages/contactos.astro`
- **Redes sociais:** atualizar links em `src/components/Footer.astro`
- **Fontes:** Space Grotesk (títulos) + Inter (texto) via Google Fonts
