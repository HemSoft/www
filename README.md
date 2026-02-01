# hs-landing-page

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss)
![Bun](https://img.shields.io/badge/Bun-runtime-fbf0df?logo=bun)

HemSoft Developments landing page featuring a modern, animated hero section with the signature **gold on black** aesthetic.

## Features

- **Animated Hero Section** - Framer Motion powered animations with floating UI elements
- **Product Showcase** - Highlights HemSoft's key products and services
- **About Section** - Company mission and values presentation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern Stack** - Next.js 16 with React 19 and Tailwind CSS 4

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1 | React framework with App Router |
| React | 19.2 | UI component library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | 12 | Animations |
| Bun | latest | Package manager & runtime |

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Run linting
bun lint
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/
│   └── landing/
│       ├── hero-section.tsx      # Animated hero
│       ├── product-showcase.tsx  # Product cards
│       ├── about-section.tsx     # About content
│       └── footer.tsx            # Site footer
└── lib/
    └── utils.ts         # Utility functions
```

## Branding

This project follows [HemSoft Developments branding guidelines](https://github.com/HemSoft):

- **Primary Color**: Gold / Metallic Gold
- **Background**: Pure Black (#000000)
- **Aesthetic**: Luxurious, refined, premium tech

## License

Private - HemSoft Developments
