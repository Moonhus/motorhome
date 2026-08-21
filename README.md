# Commercial Motorhomes

Brisbane-facing listing site for **Australian Motor Homes Pty Ltd**. Stock is at Bennetts Green, NSW, with delivery into Brisbane and nationwide.

**Handing this site to a new owner?** Follow [HANDOVER.md](./HANDOVER.md). Run `npm run handover` to build a zip they can upload to any host.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Cloud Agent environments run `npm ci` then `./scripts/dev-start.sh`, which starts the same dev server if it is not already listening on port 3000.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Production build |
| `npm run handover` | Handover pack (guide + static site) for a new host or domain |
| `npm run lint` | ESLint |
| `npm test` | Inventory filter tests |

Inventory data lives in `src/data/motorhomes.ts`. Listing photos are in `public/images/`.

## Live site

Pushes to `main` publish a static export to GitHub Pages:

https://moonhus.github.io/motorhome/
