# Fiscal Brain evidence ledger

This ledger separates the implementation, retained demonstration artifacts, and
unverified claims for the portfolio entry. It is intentionally limited to a
synthetic local demonstration. No production, legal-advice, answer-accuracy, or
real-course-content claim is made.

## Source boundary

| Item | Evidence | Status |
| --- | --- | --- |
| Public repository visibility | The Fiscal Brain GitHub repository is private; public source links are unavailable. | VERIFIED |
| Upstream baseline | Remote `master` was verified at `5b9f1a55fd543aeb14081b4d8fd2552fceb1e8ba`. | VERIFIED |
| Local hardening source | Local branch `portfolio/fiscal-brain-ui-hardening` was clean at `5117d06fa02cdb26743eff55d4c041f058a57db1`, two commits ahead of the verified remote baseline. The remote hardening ref was absent. | VERIFIED |
| Portfolio worktree | Portfolio branch `portfolio/fiscal-brain-flagship` is based on `4731508c2a8be9e56ecbd12fd5f3c8acb5dbfbe9`. | VERIFIED |

## Implemented in code

| Capability | Code evidence | Scope and qualification |
| --- | --- | --- |
| Asynchronous ingestion | `api/routers/ingestion.py:108-138` queues a job; `worker/ingestion_worker.py:432-451` claims and processes it. PDF extraction/chunking runs through `ingestion/pdf/pipeline.py:56-177`. | IMPLEMENTED IN CODE |
| Dual chunk materialization | `worker/ingestion_worker.py:102-122,280-300` initializes both stores, upserts Neo4j discipline/lesson/chunk data, then embeds and upserts Qdrant PDF chunks. | IMPLEMENTED IN CODE. Neo4j direct store state was not retained, so its completion is indirect rather than independently store-verified. |
| Vector retrieval | `index/vector_store.py:183-214,248-291` embeds full chunks with page/source metadata and searches Qdrant with metadata filters. | IMPLEMENTED IN CODE |
| Graph participation | `retrieval/engine.py:152-203` uses Neo4j full-text results, concepts of top-ranked chunks, and community summaries. | IMPLEMENTED IN CODE. This is not proof of full multi-hop GraphRAG in the Tutor request path. |
| Tutor provenance | REST `/tutor/chat` retrieves evidence and persists serialized evidence items: `api/routers/tutor.py:321-389`. The graph path preserves citation, source, pages, retrieval method, score, type, and audio fields: `answering/graph_tutor.py:59-98`. | IMPLEMENTED IN CODE |
| Provider role routing | `providers/llm/roles.py:14-52` resolves tiny, fast, reasoning, and validation models deterministically. Concept extraction selects FAST; Tutor REST/WS select REASONING (`providers/llm/factory.py:21-39`, `api/routers/tutor.py:463`). | IMPLEMENTED IN CODE |
| Runtime profiles | `api/config_service.py:122-208` defines local-full, cloud-lite, hybrid, and privacy/Ollama profiles. | IMPLEMENTED IN CODE |
| Frontend Tutor fallback | `frontend/src/hooks/useTutor.ts:249-299` falls back from WebSocket to REST and retains evidence metadata and the returned next phase. | IMPLEMENTED IN CODE |

### Retrieval semantics

Qdrant similarity is the starting score. A Neo4j full-text-only item is assigned
`0.4`; an item found by both paths is multiplied by `1.2`, capped at `1.0`
(`retrieval/engine.py:132-174`). Audio enrichment has separate relation/vector
scores (`retrieval/engine.py:205-230`). These are ranking heuristics, not
calibrated probabilities or cross-method confidence measures.

The main Tutor path does not call Neo4j `get_related_chunks`; it uses full-text,
concept lookup, and optional community summaries. Related-chunk retrieval exists
outside that request path and is not claimed here.

## Verified E2E — retained artifacts rechecked, not a fresh run

The following artifacts were retained from a local golden demonstration and
rechecked. They are historical evidence only: no Fiscal Brain containers are currently
present and no fresh E2E execution was performed for this portfolio entry.

| Artifact | Rechecked fact | Status |
| --- | --- | --- |
| `data/ingestion_jobs.json` | Job `d1739dec` completed with 2 chunks and 0 errors. Its created, started, and finished timestamps are `2026-09-09T21:51:32`, `2026-09-09T21:51:37`, and `2026-09-09T21:52:14`. | VERIFIED E2E (historical artifact) |
| `data/tutor_demo.py` and `data/tutor_response.json` | The demonstration creates a REST session and sends an English appeal question to `/tutor/chat`. The saved response is in Portuguese and includes “17 dias”. It carries two vector evidence items: page 1, score `0.5040482`; page 2, score `0.39506763`. | VERIFIED E2E (historical artifact) |
| `public/evidence/fiscal-brain-golden-demo.pdf` | The source document is a two-page fixture. Rechecked response excerpts match their stated PDF pages. SHA-256: `612d65f33a9dcd0a3a47b5c500d0362bdfaec8af9c93dddc737400c620d16c9a`. | VERIFIED E2E (historical artifact); DEMO-SPECIFIC |
| `public/evidence/fiscal-brain-evidence.json` | Sanitized evidence payload for the public portfolio; session identifier omitted. | DEMO-SPECIFIC |

The earlier completed job `74b0aab1` has zero chunks. It is **not** evidence of
successful indexing and is excluded from portfolio claims.

## Demonstration boundaries

The golden PDF and every factual statement derived from it are fictional. Both
pages say **“SYNTHETIC TEST CONTENT - NOT REAL BRAZILIAN LAW.”** The tutor answer
is a UI/retrieval demonstration, not legal guidance or a claim that the answer
is correct.

The retained configuration selected `LLM_PROVIDER=ollama` and
`OLLAMA_MODEL=qwen3:8b`. Because execution telemetry was not retained, this is
configuration plus a reported model only; model invocation is **NOT VERIFIED**.

Selected portfolio images are demonstration-specific UI captures:

| Public asset | Source capture treatment | What it demonstrates |
| --- | --- | --- |
| `src/assets/fiscal-brain/tutor-evidence.webp` | `tutor_1366.png`, crop left 575, top 0, width 791, height 768. | Portuguese answer and cited vector evidence; unrelated history excluded. |
| `src/assets/fiscal-brain/ingestion-complete.webp` | `ingest_1366.png`, crop left 272, top 16, width 1078, height 400. | Completed job status; the two-chunk count is in the retained job record, not the screenshot. |
| `src/assets/fiscal-brain/mobile-evidence.webp` | `tutor_mobile_390_evidence.png`, unchanged. | Mobile evidence presentation. |

The dashboard was rejected because its aggregation would mislead, and the mobile
chat capture was rejected because it hides the substantive answer.

## Not verified

* Fresh end-to-end execution, current Docker runtime, and any deployment or production behavior.
* Direct Neo4j persisted state or indexing logs for the historical two-chunk job.
* Full multi-hop GraphRAG, a functional local-lite Tutor, and answer accuracy.
* A real course, real Brazilian-law source, personal data, or external user activity.
* Actual invocation of the configured `qwen3:8b` model.
* Fiscal Brain test execution in this audit. Inspected tests are unit/mock or source-contract evidence and are not E2E evidence.


## Inspected tests (not executed in this update)

- `tests/worker/test_ingestion_worker.py:164-244,387-496`: queue/pipeline and store calls with mocked adapters.
- `tests/test_retrieval.py:5-33`: retrieval using mocked stores.
- `tests/api/test_tutor_router.py:53-167`: serialized/persisted provenance with fake graph state.
- `tests/providers/llm/test_factory.py:90-152`: role resolution and provider construction.
- `tests/frontend/test_tutor_history_source.py:56-59`: source contract for history/fallback, not browser execution.

Original screenshot hashes and crop dimensions were recorded in ignored `output/screenshot-manifest.json`. Published WebP source assets use lossless encoding; responsive display variants are generated by Astro. No content was altered.
