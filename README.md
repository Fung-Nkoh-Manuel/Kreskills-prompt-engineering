# Kreskills — Prompt Engineering Masterclass

A Next.js 14 (App Router) + TypeScript + Tailwind CSS landing page recreating the
Kreskills Prompt Engineering Masterclass poster as a responsive, interactive website.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push this project to a GitHub repository (or use the Vercel CLI: `vercel`).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Deploy — no backend or database is needed.

## Structure

```text
app/                Next.js App Router entry (layout, page, global styles)
components/         Reusable React/TypeScript components
lib/                WhatsApp link helpers and stat data
public/              Static assets
```

## WhatsApp contact

Numbers and the pre-filled reservation message live in `lib/whatsapp.ts`. Update
them there if the contact details ever change — every button in the app reads
from that single source.
