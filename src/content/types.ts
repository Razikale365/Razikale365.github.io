export type ProjectSlug = "dispensamais" | "fiscal-brain" | "regmais";
export type OpenWorkId = "nordic-balancing" | "nordic-balancing-watch" | "entsoe-py";

type Step = { readonly title: string; readonly detail: string };
type Decision = { readonly title: string; readonly body: string };

export type ProjectText = {
  readonly domain: string;
  readonly headline: string;
  readonly summary: string;
  /** Shorter résumé version of the summary (the résumé PDF must stay one page). */
  readonly resumeLine: string;
  readonly status: string;
  readonly responsibility: string;
  readonly problem: string;
  readonly architecture: string;
  readonly steps: readonly Step[];
  readonly flowCaption: string;
  readonly decisions: readonly Decision[];
  readonly verification: string;
  readonly limitation: string;
  readonly discussion: string;
};

export type Project = ProjectText & {
  readonly slug: ProjectSlug;
  readonly number: string;
  readonly name: string;
  readonly tone: "green" | "blue" | "amber";
  readonly stack: readonly string[];
  readonly sourceHref?: string;
};

export type OpenWorkText = {
  readonly name: string;
  readonly domain: string;
  readonly description: string;
  readonly resumeLine: string;
  /** One label per link, in the order of the shared links in open-work.ts. */
  readonly linkLabels: readonly string[];
};

type Lines = readonly string[];

/** Every user-visible string for one locale. Adding a key here makes the typecheck require it in all locales. */
export type SiteText = {
  readonly profile: { readonly role: string; readonly location: string };
  readonly shell: {
    readonly skip: string;
    readonly identityRole: string;
    readonly mainNav: string;
    readonly work: string;
    readonly resume: string;
    readonly contact: string;
    readonly languageNav: string;
    readonly darkTheme: string;
    readonly footer: string;
  };
  readonly home: {
    readonly title: string;
    readonly description: string;
    readonly heroTitle: Lines;
    readonly intro: string;
    readonly introDetail: string;
    /** Short, scannable proof points shown under the hero intro. */
    readonly proof: readonly string[];
    readonly explore: string;
    readonly seeCases: string;
    readonly viewResume: string;
    readonly availability: string;
    readonly indexLabel: string;
    readonly indexEyebrow: string;
    readonly indexIntro: Lines;
    readonly indexOpen: string;
    readonly indexNote: Lines;
    readonly workEyebrow: string;
    readonly workTitle: string;
    readonly workIntro: Lines;
    readonly technologies: (name: string) => string;
    readonly insideSystem: string;
    readonly readCase: (name: string) => string;
    readonly approachEyebrow: string;
    readonly approachTitle: string;
    readonly approach: readonly {
      readonly title: string;
      readonly body: string;
      readonly link: string;
      readonly slug: ProjectSlug;
    }[];
    readonly openEyebrow: string;
    readonly openTitle: string;
    readonly openIntro: string;
    readonly moreEyebrow: string;
    readonly moreTitle: string;
    readonly bulldog: {
      readonly name: string;
      readonly domain: string;
      readonly description: string;
      readonly linkLabel: string;
    };
    readonly aboutEyebrow: string;
    readonly aboutTitle: Lines;
    readonly aboutLead: string;
    readonly aboutBody: Lines;
    readonly aboutLink: string;
    readonly contactEyebrow: string;
    readonly contactTitle: string;
    readonly contactLead: string;
    readonly contactResume: string;
    readonly contactNote: string;
  };
  readonly caseStudy: {
    readonly titleSuffix: string;
    readonly back: string;
    readonly eyebrow: string;
    readonly contribution: string;
    readonly stack: string;
    readonly problem: string;
    readonly question: string;
    readonly structureEyebrow: string;
    readonly structureTitle: string;
    readonly decisions: string;
    readonly regmaisAlt: string;
    readonly regmaisCaption: string;
    readonly verification: string;
    readonly sourceEyebrow: string;
    readonly sourcePublic: string;
    readonly sourceRead: string;
    readonly sourcePrivate: string;
    readonly discuss: string;
    readonly otherCases: string;
    readonly keepExploring: string;
  };
  readonly fiscalEvidence: {
    readonly eyebrow: string;
    readonly title: string;
    readonly introBefore: string;
    readonly introAfter: string;
    readonly tutorLabel: string;
    readonly tutorAlt: string;
    readonly tutorCaption: string;
    readonly ingestionLabel: string;
    readonly ingestionAlt: string;
    readonly ingestionCaption: string;
    readonly mobileLabel: string;
    readonly mobileAlt: string;
    readonly mobileCaption: string;
    readonly pdfLink: string;
    readonly jsonLink: string;
  };
  readonly resume: {
    readonly title: string;
    readonly description: string;
    readonly back: string;
    readonly download: string;
    readonly eyebrow: string;
    readonly profileHeading: string;
    readonly experienceHeading: string;
    readonly independentHeading: string;
    readonly openHeading: string;
    readonly capabilitiesHeading: string;
    readonly educationHeading: string;
    readonly languagesLabel: string;
    readonly summary: string;
    readonly experience: {
      readonly title: string;
      readonly company: string;
      readonly period: string;
      readonly points: readonly string[];
    };
    readonly fiscalBrain: { readonly title: string; readonly points: readonly string[] };
    readonly capabilities: readonly { readonly title: string; readonly detail: string }[];
    readonly education: { readonly title: string; readonly status: string };
    readonly languages: string;
  };
  readonly notFound: {
    readonly title: string;
    readonly description: string;
    readonly eyebrow: string;
    readonly heading: Lines;
    readonly body: string;
    readonly back: string;
  };
  readonly projects: Record<ProjectSlug, ProjectText>;
  readonly openWork: Record<OpenWorkId, OpenWorkText>;
};
