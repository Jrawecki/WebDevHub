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

- Build command: `npm run build:worker`
- Deploy command: `npx wrangler deploy`
- Root/path: `/`
- Production branch: `main`

Do not use `npm run build` as the Cloudflare build command for Workers. That only runs the normal Next.js build and does not create the `.open-next` files Wrangler needs.

For local deploys, run:

```cmd
npm run deploy
```

The production domain is `https://webhubde.com`.
