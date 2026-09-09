# Deployment

The site is static. No backend, database, paid API or persistent process is needed in production.

Recommended destination: a new public `Razikale365.github.io` repository under the existing GitHub account, published through GitHub Pages. This avoids a repository subpath and gives the stable intended URL `https://razikale365.github.io/`. This URL is a deployment target, not a claim of a live site.

## Local workflow

Use Node 24 and pnpm (or `npx pnpm` where pnpm is not installed).

```powershell
npx pnpm install --frozen-lockfile
npx pnpm lint
npx pnpm typecheck
npx pnpm build
npx pnpm preview --host 127.0.0.1 --port 4322
```

The deployment artifact is `dist/` only. Audit docs, source-repository paths, browser captures, scripts and dependencies are not published as site files.

## Publication handoff

External publication requires João's authorization. Local implementation does not create a GitHub repository, push commits, enable Pages, or publish private source repositories.

After authorization:

1. Review all tracked/untracked files and make the initial portfolio commit.
2. Create public repository `Razikale365/Razikale365.github.io` and push this repository's main branch. No project-source repositories change visibility.
3. In GitHub repository Settings → Pages, select GitHub Actions as the build source.
4. Run the prepared Deploy Pages workflow. It builds static output and uses the Pages OIDC deployment flow.
5. Verify live URLs, canonical metadata, sitemap, social preview, PDF and Lighthouse after deployment. Local Lighthouse is not CDN/network evidence.

For a custom domain, set `SITE_URL` when building and configure that domain at the host. No example canonical is emitted on local builds. Deploy to a root domain; repository subpath hosting is intentionally outside V1.

Official recipe: https://docs.astro.build/en/guides/deploy/github/

## Updating content

`src/content/profile.ts` holds public contact details. `src/content/projects.ts` holds project narrative and status. `src/content/resume.ts` holds the public résumé. Update the evidence ledger when changing a technical claim. Rebuild and rerun checks; inspect the downloadable PDF if résumé content changed. Keep student status and employment dates current.
