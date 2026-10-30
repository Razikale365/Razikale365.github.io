# João Paulo Navarro — software engineering portfolio

Static portfolio for a Full-Stack / Applied AI Engineer building operational software and document-intelligence systems. Selected work: RegMais, DispensaMais, Study Brain.

English is the default at `/`; Brazilian Portuguese lives under `/pt-br/` and Swedish under `/sv/`. A header switcher (EN / PT-BR / SV) links to the same page in each language. Light and dark themes follow the system setting, and a header toggle overrides it and remembers the choice.

## Run

Node 24 and pnpm 12.3.4.

```powershell
npx pnpm install --frozen-lockfile
npx pnpm dev
```

## Verify

```powershell
npx pnpm lint
npx pnpm typecheck
$env:SITE_URL='https://razikale365.github.io'
npx pnpm build
npx pnpm preview --host 127.0.0.1 --port 4322
# In another terminal, with Google Chrome installed:
npx pnpm test
node scripts/lighthouse.mjs
```

The browser checks cover all 16 pages (five per language plus 404) at six widths, axe accessibility in light and dark themes, overflow, console errors, internal links, keyboard navigation, the language switcher, the theme toggle, PDF retrieval, narrow mobile and zoom. Evidence writes to ignored `output/`.

## Content and architecture

- `src/i18n/locales.ts`: the three locales, URL prefixes and résumé PDF names.
- `src/content/locales/{en,pt-br,sv}.ts`: every user-visible string per language, typed by `src/content/types.ts`, so a missing translation fails the typecheck. `projects.ts` and `open-work.ts` hold the locale-neutral facts (slugs, stacks, links).
- `src/layouts/Base.astro`: shared semantic shell and metadata.
- `src/pages/[...lang]/`: home, résumé and case studies, generated once per language. Plus 404 (English only, as GitHub Pages serves one), robots and sitemap.
- `src/components/`: links, badges and architecture flow.
- `src/styles/`: design tokens and styles split by responsibility.
- `docs/CONTENT_EVIDENCE.md`: publishable claim provenance and evidence summaries.
- `DESIGN.md`: visual and accessibility contract.

No database, API keys, tracking, cookies, CMS, React runtime or third-party client scripts. The only JavaScript is a small inline theme script; it stores the theme choice in `localStorage`, and without JavaScript the site follows the system theme. Only generated static output is deployed. Private repositories remain private.

## Public assets

`public/joao-navarro-resume.pdf` (English), `joao-navarro-resume-pt-br.pdf` and `joao-navarro-resume-sv.pdf` are privacy-reduced résumés, generated from each language's résumé page. Each must stay one A4 page. It omits phone number and unverified graduation status. `public/og.png` is the share image. Regenerate from the production preview with `node scripts/generate-assets.mjs`, then rebuild. Review both assets after changing content. The source résumé stays outside the repository.

## Deployment

See `docs/DEPLOYMENT.md`. A push to `main` deploys the site to GitHub Pages.

If port 4322 is occupied, start the preview on another port and set `TEST_URL` to its actual URL before running browser checks, asset generation or Lighthouse.
