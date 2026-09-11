# Bright Path Tuition

Premium marketing website for **Bright Path Tuition** — London KS3 / GCSE / A-level tutoring (Maths, English, Science).

- **Domain:** [brightpathtuition.london](https://brightpathtuition.london) (Namecheap)
- **Stack:** Next.js App Router · TypeScript · Tailwind CSS · static export
- **Repo:** https://github.com/QualityMaths/brightpathtuition

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (static export)

```bash
npm run build
```

Output is written to `out/` (configured via `output: 'export'` in `next.config.ts`). Serve locally to preview:

```bash
npx serve out
```

## Deploy free on Cloudflare Pages

1. Log in to [Cloudflare Pages](https://pages.cloudflare.com/).
2. **Create project** → connect the GitHub repo `QualityMaths/brightpathtuition`.
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export) — or None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20 (or set `NODE_VERSION=20` env var)
4. Save and deploy. Every push to `main` rebuilds automatically.

### Custom domain (Namecheap → Cloudflare)

1. In Cloudflare Pages → **Custom domains** → add `brightpathtuition.london` (and optionally `www`).
2. In Namecheap → Domain List → **Manage** → **Advanced DNS**:
   - For root (`@`): either use Cloudflare nameservers (recommended), **or** add a CNAME flattening / ALIAS if Namecheap supports it pointing at your `*.pages.dev` hostname.
   - Simplest free path: change **Nameservers** to the two Cloudflare nameservers shown in the Cloudflare dashboard, then manage DNS entirely in Cloudflare:
     - `CNAME` `@` → `brightpathtuition.pages.dev` (Cloudflare proxy on)
     - `CNAME` `www` → `brightpathtuition.pages.dev`
3. Wait for SSL to provision (usually minutes).

> Replace `brightpathtuition.pages.dev` with the exact Pages hostname Cloudflare assigns.

## Placeholders for the owner

Search the codebase / UI for `[PLACEHOLDER]` / `[EXAMPLE` / `placeholder`. Update:

| Item | Where |
|------|--------|
| Phone number | `src/lib/constants.ts` → `SITE.phone` |
| WhatsApp link | `SITE.whatsapp` (`wa.me`) |
| Email | `SITE.email` |
| Address / venue | `SITE.address` |
| Social URLs | `SITE.social` |
| Pricing | `PRICING` in constants + Pricing page |
| Stats & testimonials | `EXAMPLE_STATS`, `TESTIMONIALS` |
| Founder bio / DBS | About page |
| Contact form backend | Contact page — set Formspree `action` |
| Privacy & Terms | Have a solicitor review |
| Blog posts | `src/lib/blog.ts` |

## Project structure

```
src/app/           # Routes (Home, Subjects, About, Pricing, Contact, Blog, Privacy, Terms)
src/components/    # TopBar, Navbar, Footer, WhatsApp, Logo, etc.
src/lib/           # Site constants & blog data
out/               # Static export (after build)
```

## Licence

Private business site for Bright Path Tuition / QualityMaths. All rights reserved.
