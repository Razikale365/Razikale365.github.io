import type { Project } from "./projects";

export const fiscalBrain: Project = {
  slug: "fiscal-brain",
  number: "02",
  name: "Fiscal Brain",
  domain: "Applied AI / document intelligence",
  headline: "Evidence-grounded document intelligence.",
  summary:
    "An asynchronous PDF ingestion and retrieval system that connects AI tutoring to inspectable source text, pages and retrieval metadata.",
  status: "Local MVP · verified synthetic demo",
  tone: "amber",
  stack: ["Python / FastAPI", "Qdrant / Neo4j", "Ollama", "Next.js / TypeScript"],
  responsibility:
    "Independent development of document ingestion, retrieval, model integration and the Tutor interface, with a synthetic integration demo for evidence verification.",
  problem:
    "Large document collections are hard to query reliably when an answer also needs an inspectable source. Built in the domain of tax-exam preparation, Fiscal Brain addresses the engineering problem underneath: turning PDFs into retrievable material while keeping the source text and page references available to the reader.",
  architecture:
    "FastAPI queues ingestion work. A separate worker extracts and chunks PDFs, writes their structure to Neo4j, and embeds full chunk text in Qdrant. Tutor retrieves evidence, passes it to a model and returns the answer with source metadata. The recorded REST demo was configured for local Ollama with qwen3:8b. Its two evidence items are labeled vector. Neo4j full-text search and graph enrichment exist in code, but their contribution to this answer was not separately measured.",
  steps: [
    { title: "PDF → worker", detail: "Queued job · extraction · page-aware chunks" },
    { title: "Index → retrieve", detail: "Qdrant vectors · source text and pages" },
    { title: "Tutor → evidence", detail: "Model response · inspectable sources" },
  ],
  flowCaption:
    "Demonstrated answer path. The worker also indexes Neo4j; this diagram does not attribute the answer to graph reasoning.",
  decisions: [
    {
      title: "Move ingestion outside the request lifecycle",
      body: "The API accepts a job and exposes its status; a separate worker owns extraction and index writes. PDF processing can continue independently of the initiating HTTP request. The worker writes chunk structure to Neo4j and embedded text to Qdrant; these are separate stores, not one atomic transaction.",
    },
    {
      title: "Keep provenance attached to the evidence",
      body: "Retrieved items retain source text, path, page range, retrieval method and score. The REST response and saved assistant history preserve that metadata for the evidence panel. Scores rank retrieval results: vector similarity can be boosted by a full-text match, so the displayed value is not an answer-confidence probability.",
    },
    {
      title: "Choose models by role, with explicit fallback",
      body: "A provider abstraction separates model integration from tutoring. Reasoning and extraction can select different configured model roles, with deterministic fallback to the provider default. Local Ollama is supported. The golden demo exercises one local configuration; it is not a benchmark across providers or hardware.",
    },
  ],
  verification:
    "A recorded golden-path run used a two-page synthetic PDF with deliberately unique fictional facts. The real ingestion job completed with two chunks and zero recorded errors. A REST Tutor response returned an answer and two vector evidence items. During this portfolio audit, both returned texts were independently matched verbatim to their stated PDF pages. The screenshots show the saved response and its evidence in the real browser interface.",
  limitation:
    "This is a local, development-oriented MVP. The full runtime is relatively heavy and secondary routes remain uneven. Dashboard counts have known aggregation inconsistencies; the flat-path demo is labeled Unknown for discipline. Verification covers a constrained synthetic corpus, not production scale or general answer accuracy. Existing artifacts were rechecked; the full service stack was not rerun for this portfolio update.",
  discussion: "What can a reader verify about an AI answer, beyond the answer itself?",
};
