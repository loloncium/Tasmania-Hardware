# Maison Atelier — Luxury Interiors Website

A premium Next.js 15+ project for a luxury interior design and home finishes brand.

## Project architecture

- `app/` — App Router pages and home page
- `components/` — Reusable UI components and content sections
- `lib/` — Product and category data
- `public/` — Static assets and future imagery

## Pages

- `/` — Home
- `/about` — About
- `/shop` — Product catalog with category filter
- `/shop/[slug]` — Product detail page
- `/services` — Services
- `/projects` — Portfolio
- `/inspiration` — Inspiration gallery
- `/contact` — Contact form
- `/blog` — Journal
- `/trade` — Trade program

## Design system

- Brand palette: `#dea92f`, `#111111`, `#f8f6f2`, `#ffffff`, `#d9d2c3`
- Headings: serif styling with `Playfair Display`
- Body copy: modern sans serif using `Inter`
- Tailwind theme custom colors, shadows, typography and animations
- Layout utility: editorial grid, large whitespace, asymmetrical sections

## Animations & UX

- Framer Motion applied to hero and content blocks
- Sticky premium header with mobile menu
- Smooth hover states and premium product cards
- Scroll reveal and layered editorial presentation

## Performance strategy

- Next.js App Router for server-rendered pages
- Optimized remote image patterns via `next.config.mjs`
- CSS variable-driven palette and lightweight global styles
- Responsive-first, mobile-ready layout

## Install & run

```bash
npm install
npm run dev
```

> Note: Node tooling is required in the local environment to install and build the project.
