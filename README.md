# Kainde Tecnologia – Site Institucional

Este repositório contém o código do site institucional da **Kainde Tecnologia**, construído com [Next.js 16](https://nextjs.org/docs) aproveitando o **App Router** e o bundler Turbopack. O projeto é multilíngue (PT/EN), responsivo e traz um pequeno efeito 3D via **Three.js** no cabeçalho.

> Antes de publicar este projeto no GitHub, atualize qualquer informação de contato e verifique os dados do portfólio.

---

## 🚀 Começando

### Pré‑requisitos

- Node.js **20.9.0** ou superior (Next.js 16 exige).
- npm ou pnpm.

```bash
# verificar versão
node -v
```

### Instalação

```bash
cd /home/ruan/Downloads/kainde-tecnologia
git clone <url-do-repo>   # se estiver clonando
npm install               # ou pnpm install
```

### Desenvolvimento

```bash
npm run dev
# abre em http://localhost:3000
```

### Build e produção

```bash
npm run build
npm start                # ou deploy via Vercel/Netlify/Azure Static
```

---

## 🛠️ Tecnologias principais

- **Next.js 16.1** (App Router, Turbopack)
- **React 19.2**
- **TypeScript 5**
- **Tailwind CSS 3**
- **Three.js** (hero light 3D scene)
- **Framer Motion, Lucide Icons, clsx, tailwind-merge**

---

## 📁 Estrutura resumida

the top-level layout of the project

```
kainde-tecnologia/
├── app/                # páginas e layout do Next
├── components/         # UI reutilizável
├── lib/                # helpers, i18n, context
├── public/             # imagens e assets estáticos
└── tailwind.config.ts  # configuração do Tailwind
```

Consulte o README completo para detalhes caso necessário.

---

## ✅ Funcionalidades destacadas

- 6 páginas: Home, Sobre, Serviços, Portfólio, Contato e Certificações
- Dark/light mode com persistência em `localStorage`
- Idiomas PT/EN via contexto global
- Navbar responsiva com menu mobile
- Footer oculto em dispositivos móveis
- Formulário de contato com feedback
- Marquee de logos de clientes
- Contadores animados e filtros no portfólio
- Botão flutuante do WhatsApp
- SEO com metadata dinâmico
- Totalmente responsivo + animações scroll-triggered

---

## 🔧 Personalização rápida

- **Contatos**: edite `lib/i18n.ts` (campos `contact.info`).
- **Clientes/portfólio**: adicione em `lib/i18n.ts` dentro de `portfolio.cases`.
- **Cores**: variáveis em `tailwind.config.ts`.

---

## 📞 Contato da Kainde (exemplo)

- Endereço: QNB 16, Lote 08, Taguatinga Norte, DF
- CNPJ: 46.355.902/0001-41
- Telefone: (61) 98239-7391
- E-mail: kainde@kainde.com.br

---


