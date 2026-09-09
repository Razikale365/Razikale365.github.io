# Verification

Verified locally on 2026-09-09 using Node 24.14.1, pnpm 12.3.4 and installed Google Chrome.

## Result

Production build passes. Six HTML pages, three responsive interface images, two self-hosted fonts, social image, résumé PDF, favicon, robots and sitemap: 17 files / 416,622 bytes total. No shipped JavaScript files, API, database, cookies or analytics.

| Check | Result |
| --- | --- |
| Frozen dependency installation | Passed |
| Biome lint | 28 files, no errors |
| Astro / TypeScript diagnostics | 14 files, zero errors, warnings or hints |
| Production build | Passed; final rebuild byte-identical to the Lighthouse-tested artifact |
| Browser routes and responsive widths | 24 combinations: six pages at 375, 768, 1280 and 1536 px |
| Practical accessibility | axe WCAG 2 A/AA, 2.1 AA and 2.2 AA checks passed; keyboard skip/focus/navigation verified |
| Narrow and enlarged content | 320 px and 200% zoom passed; no horizontal overflow |
| Runtime and links | No console/page errors; internal links, anchors, case navigation and PDF retrieval passed |
| Downloadable résumé | One tagged A4 page; text and rendered page inspected; current project list; white print background |
| Dependency audit | Zero advisories across production and development dependencies at audit time |
| Independent reviews | Code PASS; recruiter-content PASS; screenshot/PDF visual PASS |

## Lighthouse

Lighthouse 13.4.1 against the production preview. Three runs per route/device; median category scores:

| Route | Device | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- | --- |
| Home | Mobile / desktop | 100 | 100 | 100 | 100 |
| DispensaMais | Mobile / desktop | 100 | 100 | 100 | 100 |
| RegMais | Mobile / desktop | 100 | 100 | 100 | 100 |
| Study OS | Mobile / desktop | 100 | 100 | 100 | 100 |
| Résumé | Mobile / desktop | 100 | 100 | 100 | 100 |

These are local lab results, not live-host or field measurements. Rerun after publication.

## Review resolutions and evidence

- Explicit project statuses distinguish implemented private systems from work in development.
- Study OS links to the actual public revision behind its case study; the older default branch is not used as source evidence.
- Final pixel review confirmed mobile readability and the RegMais image at phone, tablet and desktop widths.
- Font preloading removed the layout shift found in the initial performance pass.
- Print background corrected; final PDF independently inspected.
- Detailed private-source audit and delegation logs stay in ignored `output/`; the public evidence document contains only an appropriate summary.
- GLM-5.2 High through Devin CLI performed the replacement and independent code/content reviews. The account model catalog marked exact `glm-5-2` Free; exported generation telemetry matches that ID. Luna independently inspected screenshots because GLM's interface did not expose image pixels.

Local raw evidence is under ignored `output/playwright/final`, `output/lighthouse`, `output/final-build-manifest.json`, dependency audit JSON and `output/resume-preview.png`.

The GitHub profile and Study OS public source endpoint were reachable. LinkedIn rejected automated HTTP verification; its URL was cross-checked against the existing résumé. Contact links are mailto anchors; no message was sent.

## Deployment boundary

Local preview: http://127.0.0.1:4322/ . GitHub Pages workflow and deployment instructions are prepared. No remote repository, initial commit, push or public deployment has been performed. Publishing requires authorization for the proposed public repository and site. See DEPLOYMENT.md.
