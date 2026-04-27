# Kuba's Web Dev Hub

Marketing site for Kuba's Web Dev Hub, a Delaware web studio focused on websites, landing pages, web apps, workflow tools, and support.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Playwright

## Local Development

```cmd
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```cmd
npm run lint
npm run build
npm run test:e2e
```

## Cloudflare Pages

This site is configured as a static Next.js export for Cloudflare Pages.

Cloudflare build settings:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`

The production domain is `https://webhubde.com`.
