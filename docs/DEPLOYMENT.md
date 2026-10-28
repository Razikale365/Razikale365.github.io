# Deployment

The site is static. No backend, database, paid API or persistent process is needed in production.

Configured destination: the existing `Razikale365/Razikale365.github.io` repository, using GitHub Pages. This avoids a repository subpath and gives the stable intended URL `https://razikale365.github.io/`.

## Local workflow

Use Node 24 and pnpm (or `npx pnpm` where pnpm is not installed).

```powershell
npx pnpm install --frozen-lockfile
npx pnpm lint
npx pnpm typecheck
$env:SITE_URL='https://razikale365.github.io'
npx pnpm build
npx pnpm preview --host 127.0.0.1 --port 4322
```

The deployment artifact is `dist/` only. Documentation, source-repository paths, browser captures, scripts and dependencies are not published as site files.

## Publishing

A push to `main` runs the Deploy Pages workflow (`.github/workflows/deploy.yml`), which builds the static output and deploys it through the GitHub Pages OIDC flow. The repository's Pages settings must use GitHub Actions as the build source. The workflow can also be run manually.

After each deployment, check the live URLs, canonical metadata, sitemap, social preview, PDFs and Lighthouse. Local Lighthouse runs do not measure the CDN or network.

For a custom domain, set `SITE_URL` when building and configure that domain at the host. No example canonical is emitted on local builds. Deploy to a root domain; repository subpath hosting is intentionally outside V1.

Official recipe: https://docs.astro.build/en/guides/deploy/github/

## Updating content

`src/content/profile.ts` holds public contact details and `src/content/projects.ts` the locale-neutral project facts. All visible text, including project narrative and the résumé, lives in `src/content/locales/{en,pt-br,sv}.ts`; edit the three languages together. Update `docs/CONTENT_EVIDENCE.md` when changing a technical claim. Rebuild and rerun checks. If résumé text changed, regenerate the PDFs and confirm each is still one A4 page. Keep student status and employment dates current.
