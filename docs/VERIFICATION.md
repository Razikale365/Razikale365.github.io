# Verification

Last verified locally on 2026-10-28 with Node 24.14.1, pnpm 12.3.4 and Google Chrome, against the production preview.

## Result

| Check | Result |
| --- | --- |
| Frozen dependency installation | Passed |
| Biome lint | No errors |
| Astro / TypeScript diagnostics | Zero errors, warnings or hints |
| Production build | 16 HTML pages: home, résumé and three case studies in each of three languages, plus 404 |
| Browser routes and widths (`pnpm test`) | 96 page/width combinations |
| Accessibility | axe WCAG 2 A/AA, 2.1 AA and 2.2 AA in light and dark themes; keyboard skip, focus and navigation |
| Narrow and enlarged content | 320 px and 200% zoom; no horizontal overflow |
| Runtime and links | No console or page errors; internal links, anchors, language switcher, theme toggle and PDF retrieval |
| Résumé PDFs | English, Brazilian Portuguese and Swedish: one tagged A4 page each, light print background |

No shipped JavaScript files, API, database, cookies or analytics; the only script is a small inline theme script.

## Lighthouse

Lighthouse 13.4.1 against the production preview. Three runs per route and device; median category scores.

| Route | Device | Performance | Accessibility | Best practices | SEO |
| --- | --- | --- | --- | --- | --- |
| Home | Mobile / desktop | 99 / 98 | 100 | 100 | 100 |
| DispensaMais | Mobile / desktop | 95 / 97 | 100 | 100 | 100 |
| RegMais | Mobile / desktop | 96 / 99 | 100 | 100 | 100 |
| Fiscal Brain | Mobile / desktop | 99 / 100 | 100 | 100 | 100 |
| Résumé | Mobile / desktop | 100 / 100 | 100 | 100 | 100 |
| pt-BR home | Mobile / desktop | 100 / 100 | 100 | 100 | 100 |
| pt-BR résumé | Mobile / desktop | 100 / 100 | 100 | 100 | 100 |
| Swedish home | Mobile / desktop | 100 / 98 | 100 | 100 | 100 |
| Swedish résumé | Mobile / desktop | 100 / 100 | 100 | 100 | 100 |

These are local lab results, not live-host or field measurements. Raw output is written to the ignored `output/` folder.
