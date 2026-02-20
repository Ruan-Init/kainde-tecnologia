# Kainde Tecnologia – Site Institucional

Site institucional completo construído com **Next.js 16.1**, **Three.js** e **Tailwind CSS**.

## 🚀 Como Rodar

```bash
# Node.js 20.9.0 ou superior é obrigatório no Next.js 16
node -v

# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento (Turbopack é padrão no Next.js 16)
npm run dev

# 3. Abrir no navegador
http://localhost:3000
```

## 📦 Stack

- **Next.js 16.1** — App Router, Turbopack estável como bundler padrão
- **React 19.2** — com suporte a View Transitions e Activity
- **Tailwind CSS 3** — utility-first styling
- **Three.js** — cena 3D leve no hero
- **TypeScript 5** — tipagem completa

## ⚠️ Requisitos do Next.js 16

- Node.js **≥ 20.9.0** (obrigatório)
- `params` e `searchParams` são assíncronos (não impacta este projeto pois não usa rotas dinâmicas)
- Turbopack é o bundler padrão para `next dev` e `next build`
- `middleware.ts` foi renomeado para `proxy.ts` (não utilizado neste projeto)

## 📁 Estrutura do Projeto

```
kainde-tecnologia/
├── app/
│   ├── layout.tsx          # Layout raiz com AppProvider
│   ├── page.tsx            # Home (todas as seções)
│   ├── sobre/page.tsx      # Página Sobre
│   ├── servicos/page.tsx   # Página Serviços
│   ├── portfolio/page.tsx  # Página Portfólio
│   ├── contato/page.tsx    # Página Contato
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar responsiva + dark/light + idioma
│   │   └── Footer.tsx      # Footer (oculto no mobile)
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero com Three.js
│   │   ├── AboutSection.tsx     # Sobre
│   │   ├── ServicesSection.tsx  # Grid de serviços
│   │   ├── StatsSection.tsx     # Contadores animados
│   │   ├── PortfolioSection.tsx # Cases + galeria
│   │   ├── ContactSection.tsx   # Formulário de contato
│   │   └── ClientsMarquee.tsx   # Carrossel de logos
│   ├── three/
│   │   └── HeroCanvas.tsx  # Three.js (leve, SSR-safe via dynamic import)
│   └── ui/
│       └── WhatsAppButton.tsx
├── lib/
│   ├── i18n.ts     # Traduções PT/EN completas
│   ├── context.tsx # Theme + Language context
│   └── utils.ts
├── public/
│   └── images/     # Todos os assets
└── tailwind.config.ts
```

## ✅ Funcionalidades

- **5 páginas completas**: Home, Sobre, Serviços, Portfólio, Contato
- **Dark / Light mode** com persistência
- **PT / EN** bilíngue
- **Three.js leve** no hero
- **Footer oculto no mobile**
- **Formulário de contato** com feedback visual
- **Navbar** responsiva com mobile menu
- **Marquee** de logos de clientes
- **Contadores animados**
- **Filtros de portfólio** por categoria
- **WhatsApp** floating button
- **SEO** com metadata completo
- **Totalmente responsivo**

## 🎨 Paleta de Cores

| Token | Valor |
|-------|-------|
| `brand-red` | `#C1121F` |
| `brand-black` | `#0A0A0A` |
| `brand-dark-1` | `#111111` |
| `brand-gray-light` | `#A0A0A0` |

## 📞 Contato

- **Endereço**: QNB 16, Lote 08, Taguatinga Norte, Distrito Federal
- **CNPJ**: 46.355.902/0001-41
- **Telefone**: (61) 98239-7391
- **E-mail**: kainde@kainde.com.br


## 📁 Estrutura do Projeto

```
kainde-tecnologia/
├── app/
│   ├── layout.tsx          # Layout raiz com AppProvider
│   ├── page.tsx            # Home (todas as seções)
│   ├── sobre/page.tsx      # Página Sobre
│   ├── servicos/page.tsx   # Página Serviços
│   ├── portfolio/page.tsx  # Página Portfólio
│   ├── contato/page.tsx    # Página Contato
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navbar responsiva + dark/light + idioma
│   │   └── Footer.tsx      # Footer completo
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero com Three.js
│   │   ├── AboutSection.tsx     # Sobre com timeline
│   │   ├── ServicesSection.tsx  # Grid de serviços
│   │   ├── StatsSection.tsx     # Contadores animados
│   │   ├── PortfolioSection.tsx # Cases + galeria
│   │   ├── ContactSection.tsx   # Formulário de contato
│   │   └── ClientsMarquee.tsx   # Carrossel de logos
│   ├── three/
│   │   └── HeroCanvas.tsx  # Three.js (leve, SSR-safe)
│   └── ui/
│       └── WhatsAppButton.tsx
├── lib/
│   ├── i18n.ts     # Traduções PT/EN completas
│   ├── context.tsx # Theme + Language context
│   └── utils.ts    # Utilitários
├── public/
│   └── images/     # Todos os assets
└── tailwind.config.ts
```

## ✅ Funcionalidades

- **5 páginas completas**: Home, Sobre, Serviços, Portfólio, Contato
- **Dark / Light mode** com persistência (localStorage)
- **PT / EN** bilíngue com context global
- **Three.js leve** no hero (partículas + mouse tracking)
- **Formulário de contato** funcional com feedback visual
- **Navbar** responsiva com mobile menu
- **Marquee** de logos de clientes
- **Contadores animados** com IntersectionObserver
- **Filtros de portfólio** por categoria
- **WhatsApp** floating button
- **SEO** com metadata completo
- **Totalmente responsivo** (mobile-first)
- **Animações** scroll-triggered

## 🎨 Paleta de Cores

| Token | Valor |
|-------|-------|
| `brand-red` | `#C1121F` |
| `brand-black` | `#0A0A0A` |
| `brand-dark-1` | `#111111` |
| `brand-gray-light` | `#A0A0A0` |

## 📦 Dependências Principais

- `next` 14
- `three` + `@types/three`
- `tailwindcss` 3
- `lucide-react`
- `framer-motion`
- `clsx` + `tailwind-merge`

## 🔧 Personalização

### Trocar Dados de Contato
Edite em `lib/i18n.ts`:
```ts
contact: {
  info: {
    phone: "(61) 99876-5432",
    email: "contato@kainde.com.br",
    address: "...",
  }
}
```

### Adicionar Clientes no Portfólio
Adicione em `lib/i18n.ts` dentro de `portfolio.cases` (PT e EN).

### Three.js Performance
O canvas está configurado com `powerPreference: "low-power"` e `pixelRatio` limitado a 1.5 para máxima performance.
