# Commercial Motorhomes

Brisbane-facing listing site for **Australian Motor Homes Pty Ltd**. Stock is at Bennetts Green, NSW, with delivery into Brisbane and nationwide.

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
| `npm run build:transfer` | Static files for another host or domain |
| `npm run lint` | ESLint |
| `npm test` | Inventory filter tests |

Inventory data lives in `src/data/motorhomes.ts`. Listing photos are in `public/images/`.

## Live site

Pushes to `main` publish a static export to GitHub Pages:

https://moonhus.github.io/motorhome/

## Transfer the website

The public URL is not hard-wired. Set `NEXT_PUBLIC_SITE_URL` to the address the site should live at. Canonical links, Open Graph tags, the sitemap, and asset prefixes all follow that value.

### Custom domain on this GitHub Pages site

1. In the repo, add a variable named `SITE_URL` (Settings → Secrets and variables → Actions → Variables) set to `https://www.yourdomain.com.au`.
2. Point DNS at GitHub Pages: a `CNAME` record to `moonhus.github.io`, or the [GitHub Pages A records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for an apex domain.
3. In Settings → Pages, add the same custom domain and wait for HTTPS.
4. Push to `main` (or run **Deploy site**). The build drops the `/motorhome` prefix and writes a `CNAME` file so the site serves at the domain root.

### Another web host (cPanel, Netlify, S3, and similar)

```bash
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com.au npm run build:transfer
```

Upload the contents of `out/` (or `site-transfer.zip`) to the host’s public web folder. There is no server to run — it is a static export.

### Another GitHub Pages project

```bash
NEXT_PUBLIC_SITE_URL=https://newowner.github.io/motorhome npm run build:transfer
```

The `/motorhome` (or other repo) prefix is taken from that URL automatically.
