<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Repository-specific conventions

- Router/layout: This codebase uses the Pages Router (`pages/**`) with app-level wiring in `pages/_app.js`; there is no `app/` directory.
- Composition pattern: Top-level pages typically render `<Header />` + page `<main />` + `<Footer />` (see `pages/index.js`, `pages/about.js`, `pages/contact.js`).
- Data flow: Content lists are data-driven from `data/services.js` and `data/projects.js`, then mapped into `components/ServiceCard.js` and `components/ProjectCard.js`.
- Data shapes used in UI:
  - Service: `{ id, name, description }`
  - Project: `{ id, name, image }`
- Static asset paths: Use `SITE_CONFIG.basePath` from `src/config/site.ts` for deploy-safe asset URLs (examples in `components/Header.js` and `data/projects.js`).

## Workflow in this repo

- Use npm scripts from `package.json`: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- This project is configured for static export in `next.config.ts` (`output: "export"`), with `basePath`/`assetPrefix` from `SITE_CONFIG` and `images.unoptimized: true`.
- Styling is Tailwind CSS v4 via `@import "tailwindcss"` in `styles/globals.css` and `@tailwindcss/postcss` in `postcss.config.mjs`.

## Documentation caveat

- `README.md` still references `app/page.tsx`; for this repository, use `pages/index.js` and the `pages/**` tree as source of truth.
<!-- END:nextjs-agent-rules -->
