export type Project = {
  readonly slug: string;
  readonly number: string;
  readonly name: string;
  readonly domain: string;
  readonly headline: string;
  readonly summary: string;
  readonly status: string;
  readonly tone: "green" | "blue" | "amber";
  readonly stack: readonly string[];
  readonly responsibility: string;
  readonly problem: string;
  readonly architecture: string;
  readonly steps: readonly { readonly title: string; readonly detail: string }[];
  readonly flowCaption: string;
  readonly decisions: readonly { readonly title: string; readonly body: string }[];
  readonly verification: string;
  readonly limitation: string;
  readonly discussion: string;
  readonly sourceHref?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "dispensamais",
    number: "01",
    name: "DispensaMais",
    domain: "Municipal pharmacy operations",
    headline: "Medication dispensing is a data-integrity problem.",
    summary:
      "A pharmacy workflow connecting patient authorization, dispensing limits and lot-level stock—with checks before inventory changes.",
    status: "Implemented · private project",
    tone: "green",
    stack: ["Python / FastAPI", "PostgreSQL", "React / TypeScript"],
    responsibility:
      "Independent product development across the domain model, API, operational interface and verification workflows.",
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
  {
    slug: "regmais",
    number: "02",
    name: "RegMais",
    domain: "Public-service regulation",
    headline: "Make allocation decisions visible before they become records.",
    summary:
      "Patient demand, waiting lists and appointment capacity in one workflow, with a preview before an operator confirms an allocation.",
    status: "Implemented · private project",
    tone: "blue",
    stack: ["React / TypeScript", "FastAPI", "SQLAlchemy / Alembic"],
    responsibility:
      "Independent development of the regulation product, including multi-tenant workflows, the web interface and deployment safeguards.",
    problem:
      "Municipal staff coordinate demand against limited appointment capacity. An allocation interface must explain who is eligible and why they appear in the queue, while preserving a clear boundary between reviewing a proposal and changing patient records.",
    architecture:
      "The React client presents patients, service demands, queues and agendas. FastAPI routes manage the relational records. Municipality-scoped entities and API checks separate tenants; production configuration guards reject insecure defaults.",
    steps: [
      { title: "Waiting list", detail: "Specialty · priority · waiting time" },
      { title: "Allocation preview", detail: "Compatible patients · available slots" },
      { title: "Operator confirms", detail: "Explicit action before allocation" },
    ],
    flowCaption: "Interaction flow. Previewing compatible patients does not itself allocate them.",
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
      "Repository tests exercise tenant isolation using synthetic municipalities. The allocation component implements loading, unavailable-queue, no-agenda and no-compatible-patient states. The deployment workflow includes explicit release gates and health checks.",
    limitation:
      "The municipal-regulation workflows are implemented. Production operation requires environment configuration, release verification and authorization to handle real patient data.",
    discussion: "How do you make a batch operation understandable without hiding its consequences?",
  },
  {
    slug: "study-os",
    number: "03",
    name: "Study OS",
    domain: "Local-first study planning",
    headline: "A local-first system needs a recovery plan.",
    summary:
      "A local-first study system with SQLite backups, integrity checks and validated portable archives, so study plans and history can be moved and recovered safely.",
    status: "In development · public source",
    tone: "amber",
    stack: ["React / TypeScript", "Python / FastAPI", "SQLite"],
    responsibility:
      "Independent development of the local study workflows, API, data storage and recovery tooling.",
    problem:
      "Study planning and history need durable local records, and a local-first system must let a user move or recover their own data. The hard part is replacing an existing database without losing what is already there.",
    architecture:
      "A React client works against a local FastAPI service backed by SQLite. Portable archives carry a manifest and the database, so a study history can be moved between machines and restored on the other side.",
    steps: [
      { title: "Local records", detail: "Study plans · history" },
      { title: "Validated archive", detail: "Manifest · checksum · integrity" },
      { title: "Restore", detail: "Stage · back up · replace" },
    ],
    flowCaption:
      "Recovery flow. An archive is validated before it is allowed to replace existing data.",
    decisions: [
      {
        title: "Create a consistent database backup",
        body: "Backups use the SQLite backup API rather than copying the live database file. An integrity check runs before a backup is accepted, and a partial backup is removed on failure.",
      },
      {
        title: "Validate an archive before trusting it",
        body: "Restore accepts only manifest.json and study-os.sqlite3 archive members. Unexpected fields, unsafe members, oversized entries, unsupported schema, and size or SHA256 mismatch are rejected, and the staged SQLite file is integrity-validated. The checksum detects corruption; it is not an authenticity or security guarantee.",
      },
      {
        title: "Protect existing data during restore",
        body: "Restore stages the archive first, backs up the current database, replaces the current database with the staged copy, and validates the replacement. A rollback copy remains available if replacement fails.",
      },
    ],
    verification:
      "Repository tests cover readable backups, round-trip restore, invalid archives leaving the destination unchanged, and rollback when replacement fails.",
    limitation:
      "In development. The local backup and restore workflow is implemented. The case study describes the current development revision linked here.",
    discussion: "What must be checked before an import can replace a user's data?",
    sourceHref:
      "https://github.com/Razikale365/Diario-Questoes/tree/e26be60fa54c3075c72f23139863d9f296b971c4",
  },
];

export const additionalProjects = [
  {
    name: "Bulldog — Arrival Day",
    domain: "Interactive language learning",
    description:
      "A Godot prototype for learning Swedish through world interactions. Authored semantic actions are separate from presentation; versioned saves are validated before replacement. Audio content remains incomplete.",
    href: "mailto:jp.ccn.dev@gmail.com?subject=Bulldog%20project%20walkthrough",
    linkLabel: "Ask about the prototype",
  },
] as const;
