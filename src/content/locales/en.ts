import type { SiteText } from "../types";

export const en: SiteText = {
  profile: { role: "Full-Stack / Applied AI Engineer", location: "São Paulo, Brazil" },
  shell: {
    skip: "Skip to content",
    identityRole: "Software engineer",
    mainNav: "Main navigation",
    work: "Work",
    resume: "Résumé",
    contact: "Get in touch",
    languageNav: "Language",
    darkTheme: "Dark theme",
    footer: "Built with care. Kept simple.",
  },
  home: {
    title: "João Paulo Navarro — Full-Stack / Applied AI Engineer",
    description:
      "Full-stack and applied AI engineer: backend systems for public-sector health workflows, an AI tutor whose answers cite their sources, and open-source tools for Nordic energy data.",
    heroTitle: ["Reliable systems.", "Answers you can\u00a0trace."],
    intro:
      "I’m João Paulo. I build backend systems for public-sector workflows, and an AI tutor whose answers cite the pages they rely on. Now I’m bringing the same care for data integrity to open-source software for Nordic energy data.",
    introDetail:
      "What connects the work: business rules that have to hold, data that has to stay consistent, and answers that can be checked.",
    proof: [
      "5 years shipping production software",
      "Patient-regulation system in production",
      "Open-source Nordic energy library on PyPI",
      "AI answers linked to their source pages",
    ],
    explore: "Explore Nordic energy tools",
    seeCases: "See backend and AI case studies",
    viewResume: "View résumé ↗",
    availability: "Available to relocate, with visa sponsorship",
    indexLabel: "Selected systems",
    indexEyebrow: "An engineer’s fieldnotes",
    indexIntro: ["The rule behind", "the interface."],
    indexOpen: "Nordic energy, in public",
    indexNote: ["Domain models. Deliberate boundaries.", "Software you can reason about."],
    workEyebrow: "02 / Selected work",
    workTitle: "Built to solve real problems.",
    workIntro: [
      "Health, regulation and applied AI.",
      "Each one built so the right decision is the easy one.",
    ],
    technologies: (name) => `${name} technologies`,
    insideSystem: "Inside the system",
    readCase: (name) => `Read the ${name} case study →`,
    approachEyebrow: "03 / Engineering approach",
    approachTitle: "The useful work is in the decisions.",
    approach: [
      {
        title: "Model the rules.",
        body: "Authorization, stock, capacity and history deserve explicit models. The backend should protect the rules the interface promises.",
        link: "See the dispensing boundary →",
        slug: "dispensamais",
      },
      {
        title: "Make actions understandable.",
        body: "Preview consequential changes. Explain empty and failure states. Let the operator understand a decision before committing it.",
        link: "See the allocation workflow →",
        slug: "regmais",
      },
      {
        title: "Make answers inspectable.",
        body: "Carry source text and page references through ingestion, retrieval and model output. Verify the evidence against the document it came from.",
        link: "See the document-to-evidence path →",
        slug: "study-brain",
      },
    ],
    openEyebrow: "01 / Nordic energy, built in public",
    openTitle: "Making Nordic energy data easier to inspect and use.",
    openIntro:
      "Nordic balancing data comes from five sources, each with its own formats, gaps and revisions, and the public APIs show only the latest value. nordic-balancing puts it into one 15-minute UTC model and leaves a missing value missing instead of filling it in. Nordic Balancing Watch runs on that library and keeps every version it sees, so you can trace when a price first appeared and what changed later.",
    moreEyebrow: "04 / Further exploration",
    moreTitle: "A wider engineering toolkit.",
    bulldog: {
      name: "Bulldog: Sverige",
      domain: "Interactive language learning",
      description:
        "A 2D life simulator in Unity 6 for learning Swedish by living an ordinary life in a small Swedish town: exploring, studying, shopping, working and making friends. Designed so Swedish becomes something the player needs, not just studies. In development.",
      linkLabel: "Ask me about it →",
    },
    aboutEyebrow: "05 / Professional context",
    aboutTitle: ["Close to the domain.", "Across the stack."],
    aboutLead: "I build software that real organizations run on every day.",
    aboutBody: [
      "At DemandaNet, I’ve worked on education-management workflows, relational data migrations and product modules since 2021. My independent projects extend that practice into public-sector health services and evidence-grounded document intelligence.",
      "Python and PHP have been part of my work since the start of my career: PHP is the base of the DemandaNet platform, and I also work with Laravel. TypeScript and SQL cover much of the rest, and I choose other tools around the problem, the people using the software and the cost of maintaining it.",
    ],
    aboutLink: "Experience & résumé →",
    contactEyebrow: "Let’s talk about the work",
    contactTitle:
      "Need help with a backend system, a data integration or an AI tool with source-backed answers?",
    contactLead:
      "Tell me what you’re building. I’m looking for backend, full-stack and applied AI roles, in Nordic energy and beyond.",
    contactResume: "Résumé →",
    contactNote:
      "Based in Brazil. Fluent in English, learning Swedish. Available to relocate to Sweden, Denmark or elsewhere in Europe with visa sponsorship, or to work remotely.",
  },
  caseStudy: {
    titleSuffix: "Engineering case study",
    back: "← All selected work",
    eyebrow: "Case study",
    contribution: "My contribution",
    stack: "Core stack",
    problem: "The problem",
    question: "Engineering question",
    structureEyebrow: "System structure",
    structureTitle: "A boundary worth making explicit.",
    decisions: "Engineering decisions",
    regmaisAlt:
      "RegMais allocation preview showing that no compatible patient is waiting, and that the queue remains unchanged until confirmation.",
    regmaisCaption:
      "Actual interface captured during earlier local QA. Empty allocation state; no patient records are shown. Portuguese is the product’s operating language.",
    verification: "Verification & current state",
    sourceEyebrow: "Source access",
    sourcePublic: "This project’s source is public. Read the implementation directly.",
    sourceRead: "Read the source ↗",
    sourcePrivate:
      "This project’s repository is private. I can discuss the architecture and implementation in an interview.",
    discuss: "Get in touch →",
    otherCases: "Other case studies",
    keepExploring: "Keep exploring",
  },
  studyEvidence: {
    eyebrow: "Verified on a synthetic document",
    title: "An answer with evidence you can inspect.",
    introBefore: "The demo document is labeled",
    introAfter:
      "Every tax rule, amount and deadline in these captures is fictional. They test ingestion and provenance. The product interface is in Portuguese. The captures are from the earlier build, then named Fiscal Brain.",
    tutorLabel: "Open the full-size Study Brain answer and evidence capture",
    tutorAlt:
      "Recorded Tutor answer showing the fictional 17-day appeal period beside two PDF sources, pages 1 and 2, vector retrieval labels and ranking scores.",
    tutorCaption:
      "The saved answer, scrolled to the appeal passage, alongside both evidence items. Cropped from the real 1366 px browser capture; output is unchanged. Scores rank retrieved material, not answer confidence. Open the image to read it at full size.",
    ingestionLabel: "Open the full-size Study Brain completed ingestion capture",
    ingestionAlt:
      "Ingestion page history showing fiscal-brain-golden-demo.pdf with complete status.",
    ingestionCaption:
      "Completed job in the ingestion history. The retained job record reports two chunks and zero errors; the idle console is not a live processing trace.",
    mobileLabel: "Open the full-size Study Brain mobile evidence capture",
    mobileAlt:
      "At 390 px, the mobile evidence drawer exposes both synthetic PDF sources, their page numbers, vector method and retrieval scores.",
    mobileCaption:
      "Evidence remains accessible in the 390 px drawer. “Unknown” is the current discipline label for this flat-path synthetic source; its filename and page metadata are preserved.",
    pdfLink: "Inspect the synthetic source PDF ↗",
    jsonLink: "Inspect the recorded evidence JSON ↗",
  },
  resume: {
    title: "Résumé — João Paulo Navarro | Full-Stack / Applied AI Engineer",
    description:
      "João Paulo Navarro’s full-stack and applied AI engineering experience: operational software, document intelligence and selected project evidence.",
    back: "← Back to portfolio",
    download: "Download résumé PDF ↓",
    eyebrow: "Résumé",
    profileHeading: "Profile",
    experienceHeading: "Professional experience",
    independentHeading: "Independent product development",
    openHeading: "Nordic energy · built in public",
    capabilitiesHeading: "Technical capabilities",
    educationHeading: "Education & languages",
    languagesLabel: "Languages:",
    summary:
      "Full-stack engineer with five years shipping production software in Python and PHP, largely for the public sector, plus TypeScript/React and applied AI (RAG, LLMs). Now building open-source tools for Nordic energy data.",
    experience: {
      title: "Full-Stack Developer",
      company: "DemandaNet",
      period: "June 2021–present",
      points: [
        "Built and maintained modules that let school networks import, recover, process and manage their data.",
        "Designed the Dynamic Virtual Warehouse module and extended the platform to school libraries and intra-municipal networks.",
        "Migrated legacy Oracle data to MySQL, protecting data integrity and keeping operations running.",
        "Built a LangChain chatbot that turns plain-language questions into SQL; delivered AWS-backed improvements.",
      ],
    },
    studyBrain: {
      title: "Study Brain — personal AI study tool, used daily",
      points: [
        "Built a RAG tutor that cites its sources: async PDF ingestion (FastAPI + worker), Qdrant vector search, Neo4j.",
        "Ran it daily on my own hardware, splitting inference between local and cloud models; evidence checked verbatim.",
      ],
    },
    capabilities: [
      {
        title: "Backend & data",
        detail:
          "Python, FastAPI, SQLAlchemy, PHP, Laravel, Node.js, SQL (PostgreSQL, MySQL, Oracle), REST APIs, ETL.",
      },
      {
        title: "Frontend",
        detail: "TypeScript, React, Next.js, JavaScript, HTML, CSS and operational interfaces.",
      },
      {
        title: "Applied AI, cloud & delivery",
        detail:
          "RAG and LLM apps (Qdrant, Neo4j, Ollama, LangChain, natural language to SQL); AWS, Google Cloud, Cloudflare, Linux; CI/CD with GitHub Actions; pytest and Playwright tests.",
      },
    ],
    education: {
      title: "Tecnólogo in Applied AI (IA aplicada) · PUCPR",
      status: "in progress, expected completion end of 2027",
    },
    languages: "Portuguese (native), English (fluent), Swedish (A1/A2), German (beginner).",
  },
  notFound: {
    title: "Page not found — João Paulo Navarro",
    description: "Return to João Paulo Navarro’s software engineering portfolio.",
    eyebrow: "404 / Page not found",
    heading: ["Let’s get you back", "to the work."],
    body: "The page may have moved or the address may be incomplete.",
    back: "Return to the portfolio →",
  },
  projects: {
    dispensamais: {
      domain: "Public pharmacy operations",
      headline: "The right medicine, in the right amount, from the right lot.",
      resumeLine:
        "Pharmacy system that gives each patient exactly the medication and quantity authorized, with lot-level stock accuracy.",
      summary:
        "A public pharmacy must give each patient exactly what they are authorized to receive and keep stock true down to the lot. I built the dispensing system end to end. Each dispensation rechecks the authorization version before stock moves and carries an idempotency key, so a retry is recognized instead of counted as a new dispensation.",
      status: "Built end to end · private repository",
      responsibility:
        "Designed and built independently, end to end: domain model, API, operational interface and verification workflows.",
      problem:
        "A pharmacy needs to know more than whether a medicine is in stock. Staff must check who is authorized to receive it, how much remains in the current coverage cycle and which lot should be dispensed. Repeated requests and concurrent edits must not silently create additional stock movements.",
      architecture:
        "A React interface calls a FastAPI service backed by relational models for patient authorizations, dispensations, items and stock events. Authorization and dispensing are separate records. Tenant-scoped queries, transaction locks and a tenant-level idempotency constraint protect the write path.",
      steps: [
        { title: "Authorization", detail: "Patient · medicine · version" },
        { title: "Eligibility checks", detail: "Active dates · cycle balance" },
        { title: "Dispensing", detail: "Lot · quantity · stock event" },
      ],
      flowCaption: "Simplified write path. Authorization checks run before stock mutation.",
      decisions: [
        {
          title: "Check the version before moving stock",
          body: "The dispensing service compares the expected authorization version with the current record. A stale request is rejected before a stock mutation. Row locks coordinate access to the authorization during the transaction.",
        },
        {
          title: "Give retries a stable identity",
          body: "Dispensations have an idempotency key unique within a tenant and a payload hash. The intent is to recognize a repeated request instead of treating every retry as a new dispensing event.",
        },
        {
          title: "Keep the domain visible in the data model",
          body: "Dispensation items retain the authorization, batch and stock-event references. The model also records the recommended batch and an override reason, making lot-selection decisions inspectable.",
        },
      ],
      verification:
        "The repository includes integration scenarios for partial dispensing, authorization changes within a cycle, concurrent requests, repeat idempotency keys, negative-stock prevention and cross-tenant isolation.",
      limitation:
        "Operational workflows are implemented. National health-system integrations require additional configuration, and production readiness has separate release requirements.",
      discussion: "Where should optimistic version checks end and transactional locking begin?",
    },
    "study-brain": {
      domain: "Applied AI · personal study tool",
      headline: "AI answers you can check against the source.",
      resumeLine:
        "Personal AI study tool, used daily: answers cite the exact passages and pages they rely on.",
      summary:
        "Fluent chatbot answers were no use for exam study if I couldn’t check them. I built a personal AI tutor over my own PDF library and used it daily. Each retrieved passage keeps its file and page all the way to the answer, so every answer can be checked against the document.",
      status: "Personal tool · used daily · being rebuilt",
      responsibility:
        "Designed, built and used daily: document ingestion, retrieval, model integration and the Tutor interface, all running on my own hardware.",
      problem:
        "I was preparing for tax exams from a large, growing library of PDFs. General-purpose chatbots gave fluent answers I couldn’t check. I built Study Brain so that every answer points back to the exact source text and page, which is what makes an AI answer usable for serious study.",
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
        "Running it locally was the real engineering challenge. Qdrant, Neo4j and the models all compete for one machine, so I split inference between local models and cloud providers, and kept the study library in Google Drive. The verification above uses a synthetic document because the real study material stays private.",
      discussion: "What can a reader verify about an AI answer, beyond the answer itself?",
    },
    regmais: {
      domain: "Public-service regulation",
      headline: "Patients reach the right specialist care, in the right order.",
      resumeLine:
        "Patient-regulation system that routes waiting-list patients to the right specialist appointment by specialty, priority and waiting time.",
      summary:
        "Public-sector staff have to match a specialist waiting list against limited appointment capacity. I built the system that proposes allocations by specialty, priority and waiting time. A proposal is only a preview: nothing changes in patient records until the operator confirms it.",
      status: "In production",
      responsibility:
        "Designed, built and taken to production independently, to the client’s specification: multi-tenant workflows, the web interface and deployment safeguards.",
      problem:
        "Public-sector staff coordinate demand against limited appointment capacity. An allocation interface must explain who is eligible and why they appear in the queue, while preserving a clear boundary between reviewing a proposal and changing patient records.",
      architecture:
        "The React client presents patients, service demands, queues and agendas. FastAPI routes manage the relational records. Tenant-scoped entities and API checks keep each tenant’s data separate; production configuration guards reject insecure defaults.",
      steps: [
        { title: "Waiting list", detail: "Specialty · priority · waiting time" },
        { title: "Allocation preview", detail: "Compatible patients · available slots" },
        { title: "Operator confirms", detail: "Explicit action before allocation" },
      ],
      flowCaption:
        "Interaction flow. Previewing compatible patients does not itself allocate them.",
      decisions: [
        {
          title: "Separate preview from commitment",
          body: "The interface fetches the queue when the preview opens, filters waiting patients by specialty and limits the proposal to available slots. The allocation action is separate, so the operator can inspect the proposal first.",
        },
        {
          title: "Treat unsafe configuration as an error",
          body: "Production startup validation rejects the default session secret, insecure cookies, SQLite and an empty CORS allowlist. Configuration mistakes are made visible before the service starts.",
        },
        {
          title: "Protect records with history",
          body: "Patient and queue deletion routes check linked operational history. This puts the consequences of deletion into the domain workflow rather than leaving them to a generic delete button.",
        },
      ],
      verification:
        "Repository tests exercise tenant isolation using synthetic tenants. The allocation component implements loading, unavailable-queue, no-agenda and no-compatible-patient states. The deployment workflow includes explicit release gates and health checks.",
      limitation:
        "The public-sector regulation workflows are in production. Each new deployment requires environment configuration, release verification and authorization to handle real patient data.",
      discussion:
        "How do you make a batch operation understandable without hiding its consequences?",
    },
  },
  openWork: {
    "nordic-balancing": {
      name: "nordic-balancing",
      domain: "Open-source Python library",
      description:
        "The data layer: typed Python clients for balancing and imbalance data from Energinet, Fingrid, Svenska kraftnät, eSett and ENTSO-E, on 15-minute UTC intervals. A value the source has not published stays empty, never zero, and two sources can be reconciled where they disagree. Installable from PyPI.",
      resumeLine:
        "Open-source Python library for Nordic balancing and imbalance data, normalized to 15-minute UTC intervals; on PyPI (v0.4.0).",
      linkLabels: ["Source", "PyPI v0.4.0"],
    },
    "nordic-balancing-watch": {
      name: "Nordic Balancing Watch",
      domain: "Live tracking site",
      description:
        "Built on nordic-balancing: a collector polls the sources and keeps every price version it sees; the site shows when each price first appeared, per zone and source, and what was revised afterward. Collection started in October 2026, so the history is still short.",
      resumeLine:
        "Live site tracking when Nordic balancing data appears from each source and what is revised afterward.",
      linkLabels: ["Visit the site"],
    },
    "entsoe-py": {
      name: "entsoe-py contribution",
      domain: "Upstream pull request",
      description:
        "A contribution to entsoe-py, the Python client for the ENTSO-E Transparency Platform. Submitted, under review.",
      resumeLine:
        "Pull request to the ENTSO-E Transparency Platform client; submitted, under review.",
      linkLabels: ["View the pull request"],
    },
  },
};
