# GBO Logistics — React Router Website

This version uses React, Vite and React Router. It has separate browser routes for Home, About, Services, Specialized Cargo, Global Reach and Contact.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are created in `dist`.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The included `public/_redirects` file ensures that refreshing a route such as `/services` works on Cloudflare Pages.

## Routes

- `/`
- `/about`
- `/services`
- `/specialized-cargo`
- `/global-reach`
- `/contact`

The quote form is a front-end demonstration and does not send or store information until connected to an email, API or CRM service.
