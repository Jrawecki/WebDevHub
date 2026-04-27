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

## Cloudflare Workers

This site is configured for Cloudflare Workers with OpenNext.

Cloudflare Workers build settings:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root/path: `/`
- Production branch: `main`

The `build` script runs the normal Next.js build first, then creates the `.open-next` Worker bundle that Wrangler deploys.

For local deploys, run:

```cmd
npm run deploy
```

The production domain is `https://webhubde.com`.
