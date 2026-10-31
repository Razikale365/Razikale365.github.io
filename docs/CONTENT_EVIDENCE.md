# Content evidence

What each public claim rests on. Case studies describe inspected implementation, not measured business results.

| Project | Evidence behind the case study | Public status |
| --- | --- | --- |
| RegMais | Allocation preview separated from confirmation; production configuration guards; history-aware deletion; tenant-isolation tests | In production; private repository; genuine interface capture without patient records |
| DispensaMais | Authorization/version checks before stock mutation; tenant-scoped idempotency; linked authorization, batch and stock-event records; integration test scenarios | Built end to end; private repository; architecture available for interview discussion |
| Study Brain | Asynchronous PDF ingestion; Qdrant vector retrieval; worker-owned Neo4j indexing; source/page provenance; model-role routing; retained synthetic demo artifacts rechecked against the PDF | Personal tool, used daily; private repository; the published two-page synthetic example is not answer-quality proof |
| Bulldog: Sverige | Unity 6 project; product direction (2D life simulator for learning Swedish) taken from the project README. No technical claims are made | In development; private repository; listed under further exploration, no case study |

The site presents RegMais, DispensaMais and Study Brain, in that order. "Answers you can trace" and "source-backed answers" refer to Study Brain's provenance (and, for data, to Nordic Balancing Watch's version history), not to every project. Study Brain was called Fiscal Brain until 2026-10-30 and is being rebuilt under the new name; the published captures, synthetic PDF and evidence JSON come from the earlier build and keep their `fiscal-brain-*` file names. The old `/work/fiscal-brain/` URLs redirect. See [the Study Brain evidence ledger](FISCAL_BRAIN_EVIDENCE.md) for source files, tests, artifact boundaries, screenshot provenance and unverified claims.

## Experience, education and languages

- Professional experience comes from João Paulo's own résumé. Employer code was not inspected; the portfolio claims no numerical outcomes and no sole authorship of team work. The natural-language-to-SQL chatbot is described as built, with no production-user claim. PHP and Laravel are listed as João Paulo stated them: PHP is the base of the DemandaNet platform and has been part of his work alongside Python since the start of his career. No years are attached to any technology.
- Education is shown as in progress: Tecnólogo in Applied AI, PUCPR, expected end of 2027.
- Language levels are as João Paulo stated them, not upgraded.

## Résumé keywords (added 2026-10-30)

Words that Swedish developer ads ask for, named only where there is evidence or João Paulo stated them:

- **CI/CD with GitHub Actions, pytest, Playwright:** public workflows. `nordic-balancing` runs pytest and releases to PyPI. `nordic-balancing-watch` runs pytest and Playwright and deploys with Wrangler.
- **Node.js:** the Node toolchain in the `nordic-balancing-watch` CI and its Cloudflare functions.
- **Cloudflare:** `nordic-balancing-watch` is deployed to Cloudflare Pages with a D1 database.
- **RAG, LLM, embeddings, vector search:** Study Brain's retrieval path, as described in its case study (Qdrant vectors, Ollama models). These are names for what it does, not new claims.
- **Next.js:** Study Brain's stack in `projects.ts`.
- **AWS:** DemandaNet, as João Paulo stated (already in the experience line).
- **Google Cloud:** stated by João Paulo, used in several projects. No public repository shows it.
- **Linux:** stated by João Paulo on 2026-10-30 (setting up Linux machines and working on the command line). The public CI runs on Ubuntu.
- **Relocation to Sweden, Denmark or elsewhere in Europe:** João Paulo's stated target countries.

Not added for lack of evidence: Docker (only a benchmark Dockerfile is public), Azure, Kubernetes.

## Nordic open-source work

- **nordic-balancing:** public repository and PyPI package (v0.4.0, checked 2026-10-27). The description paraphrases the package summary.
- **nordic-balancing contracts:** "never zero" and source reconciliation come from the v0.4.0 README (no gap filling; `None` for unpublished values; `reconcile_imbalance_prices`).
- **Nordic Balancing Watch:** describes what it tracks only: it runs on nordic-balancing and keeps every price version its collector sees. Collection started on 24 October 2026, so the site states no findings, statistics or market conclusions.
- **entsoe-py PR #557:** shown as "submitted, under review". Open and not merged as of 2026-10-28; recheck before changing the wording.

RegMais, DispensaMais and Study Brain repositories stay private and have no source links.

## Engineering decisions page

`/decisions/` restates eight decisions already published in the RegMais, DispensaMais and Study Brain case studies and the nordic-balancing description. It adds no new claims; each decision links to its case study or to the nordic-balancing source. It is not linked from the site navigation.

## Languages of the site

English is the default; Brazilian Portuguese and Swedish mirror it. Every translated claim matches an English claim, and no claim exists in only one language.

## Privacy

The downloadable résumés omit the phone number and unverified graduation status. There are no patient records, credentials or recruiter correspondence in the site assets. The published synthetic PDF and evidence JSON contain no real legal material or personal records.

When changing a claim, inspect the implementation and update its status here. Record executed checks in [VERIFICATION.md](VERIFICATION.md).
