# Lazy Beans Smart Home Website

Official marketing website for Lazy Beans Smart Home.

This project uses Next.js (Pages Router), Tailwind CSS v4, and static export for deployment.

## Tech Stack

- Next.js 16 (Pages Router)
- React 19
- Tailwind CSS v4
- EmailJS (`@emailjs/browser`) for contact form delivery
- Static export (`next build`) with asset-safe base path support

## Main Pages

- `/` Home
- `/services` Services overview (plus service anchors)
- `/devices` Device showcase
- `/gallery` Poster gallery
- `/cases` Case studies
- `/about` About and social channels
- `/contact` Contact form + direct contact channels

## Project Structure

- `pages/` route pages (Pages Router)
- `components/` reusable UI blocks
- `data/` local data sources (`services`, `projects`, `cases`)
- `src/translations/` i18n dictionaries (`en`, `zh-tw`, `zh-cn`)
- `src/contexts/LanguageContext.js` language state + persistence
- `src/config/site.ts` site-level config (`basePath`, EmailJS config)
- `public/images/` static assets

## Local Development

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev    # start local dev server
npm run build  # production build + static export
npm run start  # run production server (non-export preview)
npm run lint   # run ESLint
```

## Internationalization

Supported languages:

- English (`en`)
- Traditional Chinese (`zh-tw`)
- Simplified Chinese (`zh-cn`)

Language selection is stored in `localStorage` (`lang` key).

## Contact Form (EmailJS)

The contact page reads credentials from environment variables through `src/config/site.ts`.

Create `.env.local`:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:

- If `serviceId` or `templateId` is missing, the form shows a configuration error.
- These values are public client-side keys by design (prefix `NEXT_PUBLIC_`).

## Deployment Notes

This project is configured for static export in `next.config.ts`:

- `output: "export"`
- `images.unoptimized: true`
- `basePath` and `assetPrefix` read from `SITE_CONFIG.basePath`

For root domain deploys (example: `lazysmarthome.com`):

- Keep `basePath` in `src/config/site.ts` as `""`.

For subpath deploys (example: GitHub Pages project path):

- Set `basePath` to that subpath (example: `"/lazybeanslab-website"`).

Build command:

```bash
npm run build
```

Exported static files are generated under `out/`.

## Maintenance Notes

- Keep user-facing brand copy as `Lazy Beans Smart Home`.
- Prefer editing existing translation keys instead of hardcoded page text.
- When adding images, use `SITE_CONFIG.basePath` in URLs for deploy-safe paths.
