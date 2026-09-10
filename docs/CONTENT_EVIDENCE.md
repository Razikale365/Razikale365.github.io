# Content evidence

Reviewed 2026-09-09. Case studies describe inspected implementation, not measured business results or current production usage. Project tests were inspected; the portfolio's own checks were executed separately.

| Project | Evidence behind the case study | Public status |
| --- | --- | --- |
| DispensaMais | Authorization/version checks before stock mutation; tenant-scoped idempotency; linked authorization, batch and stock-event records; integration test scenarios | Private implementation; architecture available for interview discussion |
| RegMais | Allocation preview separated from confirmation; production configuration guards; history-aware deletion; tenant-isolation tests | Private implementation; genuine historical interface capture without patient records |
| Fiscal Brain | Asynchronous PDF ingestion; Qdrant vector retrieval; worker-owned Neo4j indexing; source/page provenance; model-role routing; retained synthetic demo artifacts rechecked against the PDF | Private local MVP; two-page synthetic demo, not production or answer-quality proof |
| Bulldog | Authored semantic actions separate from presentation; versioned save validation | Private prototype; audio content incomplete |

The flagship order is DispensaMais, Fiscal Brain, RegMais. Study OS was removed from the visible portfolio to keep the narrative focused. Bulldog remains further exploration. See [the Fiscal Brain evidence ledger](FISCAL_BRAIN_EVIDENCE.md) for source files, tests, artifact boundaries, screenshot provenance and unverified claims. The published synthetic PDF and evidence JSON contain no real legal material or personal records.

Employment, language proficiency and professional experience are taken from João's existing résumé. Employer code was not inspected; the portfolio does not invent numerical outcomes or claim sole authorship of team work. The LangChain natural-language-to-SQL work is described as a prototype.

The downloadable résumé omits phone number and unverified graduation status. The original tailored documents and detailed local source audit remain outside the publishable tree. There are no patient records, credentials or recruiter correspondence in the site assets.

When changing a claim, inspect the implementation and update its status. Record executed portfolio checks in VERIFICATION.md.
