import type { Locale } from "../i18n/locales";
import { getText } from "./index";
import type { Project, ProjectSlug, ProjectText } from "./types";

export type { Project } from "./types";

/** Locale-neutral project facts; prose comes from each locale's `projects` text. */
const projectMeta: readonly Omit<Project, keyof ProjectText>[] = [
  {
    slug: "regmais",
    number: "01",
    name: "RegMais",
    tone: "blue",
    stack: ["React / TypeScript", "FastAPI", "SQLAlchemy / Alembic"],
  },
  {
    slug: "dispensamais",
    number: "02",
    name: "DispensaMais",
    tone: "green",
    stack: ["Python / FastAPI", "PostgreSQL", "React / TypeScript"],
  },
  {
    slug: "fiscal-brain",
    number: "03",
    name: "Fiscal Brain",
    tone: "amber",
    stack: ["Python / FastAPI", "Qdrant / Neo4j", "Ollama", "Next.js / TypeScript"],
  },
];

export const projectSlugs: readonly ProjectSlug[] = projectMeta.map((project) => project.slug);

export const getProjects = (locale: Locale): readonly Project[] =>
  projectMeta.map((meta) => ({ ...meta, ...getText(locale).projects[meta.slug] }));
