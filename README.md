# João Navarro — software engineering portfolio

Static English portfolio for a Full-Stack / Applied AI Engineer building operational software and document-intelligence systems. Selected work: DispensaMais, Fiscal Brain, RegMais.

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

The browser checks cover all six pages at six widths, axe accessibility, overflow, console errors, internal links, keyboard navigation, PDF retrieval, narrow mobile and zoom. Evidence writes to ignored `output/`.

## Content and architecture

- `src/content/`: typed profile, résumé and project content, including the Fiscal Brain case.
- `src/layouts/Base.astro`: shared semantic shell and metadata.
- `src/pages/`: home, résumé, generated case studies, 404, robots and sitemap.
- `src/components/`: links, badges and architecture flow.
- `src/styles/`: design tokens and styles split by responsibility.
- `docs/CONTENT_EVIDENCE.md`: publishable claim provenance and evidence summaries.
- `DESIGN.md`: visual and accessibility contract.

No database, API keys, tracking, cookies, CMS, React runtime or third-party client scripts. Only generated static output is deployed. Private repositories remain private.

## Public assets

`public/joao-navarro-resume.pdf` is a privacy-reduced résumé, generated from the `/resume/` page. It omits phone number and unverified graduation status. `public/og.png` is the share image. Regenerate from the production preview with `node scripts/generate-assets.mjs`, then rebuild. Review both assets after changing content. The existing tailored source résumé stays outside the repository.

## Deployment

See `docs/DEPLOYMENT.md`. Prepared for GitHub Pages on the existing account. Publication is a separate authorized step; no remote was created by the local build task.

If port 4322 is occupied, start the preview on another port and set `TEST_URL` to its actual URL before running browser checks, asset generation or Lighthouse.
