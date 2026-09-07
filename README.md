# GBO Logistics — React / Cloudflare

Modern animated React website inspired by the existing GBO Logistics website and branding.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output directory: `dist`

## Cloudflare deployment

### Cloudflare Pages
- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 or newer

### Wrangler / Cloudflare Workers static assets
After building:

```bash
npx wrangler deploy
```

The included `wrangler.jsonc` points Cloudflare static assets to `./dist` and uses SPA fallback routing.

## Main customization points

Edit `src/main.jsx`:
- `ASSETS` object: logo and site images
- contact email and phone
- service descriptions
- partner names
- statistics
- WhatsApp link

Edit `src/styles.css` for colors, animation speed, spacing and responsive behavior.

## Contact form

The current frontend form opens the visitor's default email client with the inquiry pre-filled. If you want server-side email delivery, connect the form to a Cloudflare Worker/API or a form provider.
