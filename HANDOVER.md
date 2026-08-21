# Website handover

This is the handover for the **Commercial Motorhomes** listing site (Australian Motor Homes Pty Ltd). Give the new owner this file plus `handover.zip` (or the GitHub repository). They can put the site on a new domain or host without further code changes.

Current live site: https://moonhus.github.io/motorhome/

## What they receive

| Item | Where |
| --- | --- |
| This guide | `HANDOVER.md` |
| Ready-to-upload website | `handover/website/` or `handover.zip` |
| Source code (for ongoing edits) | this GitHub repository |
| Enquiry inbox used on the site | `inquire.chrispaytn@gmail.com` in `src/lib/site.ts` |

There is no CMS, database, or server. Listings are files in the repo. Enquiries open the visitor’s email app and send mail to the address above.

## New-owner checklist

- [ ] Domain name pointed at the new host (or GitHub Pages)
- [ ] Website files uploaded, or GitHub repo transferred
- [ ] Enquiry email changed to the new inbox
- [ ] Business name, ABN, yard address, and phone copy checked
- [ ] Stock list and photos confirmed
- [ ] Test an enquiry from the live contact page

## 1. Put the site online

Build a handover pack aimed at the new public address (no trailing slash):

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com.au npm run handover
```

That writes:

- `handover/HANDOVER.md` — this guide
- `handover/website/` — static HTML, CSS, images
- `handover.zip` — the same folder, for email or USB

Upload **everything inside** `handover/website/` to the host’s public web folder (`public_html`, `www`, Netlify drop, S3, and similar). Do not upload `HANDOVER.md` to the web root unless you want it public.

### Stay on GitHub Pages with a custom domain

1. Transfer this repository to the new GitHub account if they will own it ([GitHub: transfer a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository)).
2. Add an Actions variable `SITE_URL` = `https://www.yourdomain.com.au`.
3. Point DNS at GitHub Pages and add the domain under Settings → Pages.
4. Push to `main` (or run **Deploy site**). The `/motorhome` prefix is dropped automatically.

### Another GitHub Pages project

```bash
NEXT_PUBLIC_SITE_URL=https://newowner.github.io/motorhome npm run handover
```

Then upload `handover/website/` to that project’s Pages folder, or push this repo and keep the existing GitHub Actions deploy.

## 2. Change business details

Edit `src/lib/site.ts`:

- Trading name, legal name, ABN
- Yard address and market copy
- **Enquiry email** (this is where contact-form mail goes)

Then rebuild (`npm run handover` or push to `main`).

## 3. Change stock and photos

| Content | File / folder |
| --- | --- |
| Listings, prices, specs | `src/data/motorhomes.ts` |
| Listing photos | `public/images/listings/<stock-number>/` |
| Reviews | `src/data/reviews.ts` |
| Review portraits | `public/images/reviews/` |
| Logo and banners | `public/images/` |

Photo folders use the stock number (for example `public/images/listings/10783/01.jpg`). After edits, rebuild and upload, or push to `main`.

## 4. Work on the source

Needs [Node.js 22](https://nodejs.org/):

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local preview |
| `npm run handover` | Handover pack for a new host or domain |
| `npm test` | Inventory tests |
| `npm run lint` | Lint |

## Not included

Hand these over separately if they are in your name:

- Domain registrar login
- The enquiry email mailbox
- Google Business Profile, ads, or Search Console
- Any paid host account
