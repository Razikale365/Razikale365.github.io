/**
 * Engineering decisions page (/decisions/ in every locale), not linked from the site navigation. Every sentence
 * restates something already published in src/content/locales/*.ts (case-study problems and
 * decisions, open work). Add nothing new here; translate faithfully.
 */
import { type Locale, localePath } from "../i18n/locales";

type Source = { readonly label: string; readonly href: string };

export type EngineeringDecision = {
  readonly project: string;
  readonly title: string;
  readonly chosen: string;
  readonly against: string;
  readonly why: string;
  readonly source: Source;
};

type Project = "RegMais" | "DispensaMais" | "Study Brain" | "nordic-balancing";

type DecisionText = Omit<EngineeringDecision, "project" | "source"> & { readonly project: Project };

type DecisionsLocale = {
  readonly page: {
    readonly title: string;
    readonly description: string;
    readonly eyebrow: string;
    readonly heading: string;
    readonly intro: string;
    readonly listTitle: string;
    readonly chosen: string;
    readonly against: string;
    readonly why: string;
  };
  readonly readCase: (name: string) => string;
  readonly readSource: (name: string) => string;
  readonly decisions: readonly [
    DecisionText,
    DecisionText,
    DecisionText,
    DecisionText,
    DecisionText,
    DecisionText,
    DecisionText,
    DecisionText,
  ];
};

const caseSlugs = {
  RegMais: "regmais",
  DispensaMais: "dispensamais",
  "Study Brain": "study-brain",
} as const;
const nordicBalancingHref = "https://github.com/Razikale365/nordic-balancing";

const en: DecisionsLocale = {
  page: {
    title: "Engineering decisions | João Paulo Navarro",
    description:
      "Eight engineering decisions from RegMais, DispensaMais, Study Brain and nordic-balancing: what I chose, instead of what, and why.",
    eyebrow: "Engineering decisions",
    heading: "What I chose, instead of what, and why.",
    intro:
      "Eight decisions from my case studies and open-source work. Each one links to the case study or source it comes from.",
    listTitle: "Decisions",
    chosen: "Chosen:",
    against: "Instead of:",
    why: "Why:",
  },
  readCase: (name) => `Read the ${name} case study →`,
  readSource: (name) => `Read the ${name} source ↗`,
  decisions: [
    {
      project: "RegMais",
      title: "Separate preview from commitment",
      chosen:
        "The allocation preview fetches the queue, filters waiting patients by specialty and limits the proposal to available slots. Allocating is a separate action.",
      against: "Allocating in the same step that shows the proposal.",
      why: "The operator can inspect the proposal first, keeping a clear boundary between reviewing a proposal and changing patient records.",
    },
    {
      project: "RegMais",
      title: "Protect records with history",
      chosen: "Patient and queue deletion routes check linked operational history.",
      against: "Leaving deletion to a generic delete button.",
      why: "The consequences of deletion become part of the domain workflow.",
    },
    {
      project: "DispensaMais",
      title: "Check the version before moving stock",
      chosen:
        "The dispensing service compares the expected authorization version with the current record and rejects a stale request before any stock mutation. Row locks coordinate access to the authorization during the transaction.",
      against: "Applying a request made against an outdated authorization.",
      why: "Repeated requests and concurrent edits must not silently create additional stock movements.",
    },
    {
      project: "DispensaMais",
      title: "Give retries a stable identity",
      chosen:
        "Each dispensation has an idempotency key unique within a tenant, and a payload hash.",
      against: "Treating every retry as a new dispensing event.",
      why: "The aim is to recognize a repeated request as the same request.",
    },
    {
      project: "Study Brain",
      title: "Move ingestion outside the request lifecycle",
      chosen:
        "The API accepts a job and exposes its status; a separate worker owns PDF extraction and index writes.",
      against: "Processing PDFs inside the HTTP request that started them.",
      why: "PDF processing can continue independently of the initiating request. The trade-off: Neo4j and Qdrant are separate stores, not one atomic transaction.",
    },
    {
      project: "Study Brain",
      title: "Keep provenance attached to the evidence",
      chosen:
        "Retrieved items keep source text, path, page range, retrieval method and score, and both the REST response and the saved history preserve that metadata.",
      against: "The fluent answers of general-purpose chatbots, which I couldn’t check.",
      why: "Every answer points back to the exact source text and page, which is what makes an AI answer usable for serious study. The score ranks retrieval results; it is not an answer-confidence probability.",
    },
    {
      project: "nordic-balancing",
      title: "One 15-minute UTC model for five sources",
      chosen:
        "Typed Python clients that put balancing and imbalance data from Energinet, Fingrid, Svenska kraftnät, eSett and ENTSO-E on 15-minute UTC intervals.",
      against:
        "Working with the five sources separately, each with its own formats, gaps and revisions.",
      why: "One model makes Nordic energy data easier to inspect and use, and two sources can be reconciled where they disagree.",
    },
    {
      project: "nordic-balancing",
      title: "A missing value stays missing",
      chosen: "A value the source has not published stays empty.",
      against: "Filling it in, or storing it as zero.",
      why: "Data integrity: a gap in the source stays visible as a gap instead of looking like published data.",
    },
  ],
};

const ptBr: DecisionsLocale = {
  page: {
    title: "Decisões de engenharia | João Paulo Navarro",
    description:
      "Oito decisões de engenharia do RegMais, do DispensaMais, do Study Brain e da nordic-balancing: o que escolhi, em vez de quê, e por quê.",
    eyebrow: "Decisões de engenharia",
    heading: "O que escolhi, em vez de quê, e por quê.",
    intro:
      "Oito decisões dos meus estudos de caso e do meu trabalho em código aberto. Cada uma tem um link para o estudo de caso ou o código de onde vem.",
    listTitle: "Decisões",
    chosen: "Escolha:",
    against: "Em vez de:",
    why: "Por quê:",
  },
  readCase: (name) => `Ler o estudo de caso do ${name} →`,
  readSource: (name) => `Ler o código-fonte da ${name} ↗`,
  decisions: [
    {
      project: "RegMais",
      title: "Separar a pré-visualização da confirmação",
      chosen:
        "A pré-visualização da alocação busca a fila, filtra os pacientes em espera por especialidade e limita a proposta às vagas disponíveis. Alocar é uma ação separada.",
      against: "Alocar na mesma etapa que mostra a proposta.",
      why: "O operador pode conferir a proposta antes, com um limite claro entre revisar uma proposta e alterar registros de pacientes.",
    },
    {
      project: "RegMais",
      title: "Proteger registros que têm histórico",
      chosen:
        "As rotas de exclusão de pacientes e filas verificam o histórico operacional vinculado.",
      against: "Deixar a exclusão a cargo de um botão genérico de excluir.",
      why: "As consequências da exclusão passam a fazer parte do fluxo de domínio.",
    },
    {
      project: "DispensaMais",
      title: "Verificar a versão antes de movimentar o estoque",
      chosen:
        "O serviço de dispensação compara a versão esperada da autorização com o registro atual e rejeita uma requisição desatualizada antes de qualquer alteração no estoque. Locks de linha coordenam o acesso à autorização durante a transação.",
      against: "Aplicar uma requisição feita sobre uma autorização desatualizada.",
      why: "Requisições repetidas e edições concorrentes não podem gerar silenciosamente movimentações de estoque adicionais.",
    },
    {
      project: "DispensaMais",
      title: "Dar uma identidade estável às novas tentativas",
      chosen:
        "Cada dispensação tem uma chave de idempotência única por tenant e um hash do payload.",
      against: "Tratar cada nova tentativa como um novo evento de dispensação.",
      why: "A intenção é reconhecer uma requisição repetida como a mesma requisição.",
    },
    {
      project: "Study Brain",
      title: "Tirar a ingestão do ciclo de vida da requisição",
      chosen:
        "A API aceita uma tarefa e expõe seu status; um worker separado é responsável pela extração dos PDFs e pela escrita nos índices.",
      against: "Processar os PDFs dentro da requisição HTTP que iniciou o processamento.",
      why: "O processamento do PDF pode continuar independentemente da requisição que o iniciou. A contrapartida: Neo4j e Qdrant são armazenamentos separados, não uma única transação atômica.",
    },
    {
      project: "Study Brain",
      title: "Manter a proveniência junto da evidência",
      chosen:
        "Os itens recuperados mantêm texto-fonte, caminho, intervalo de páginas, método de recuperação e pontuação, e tanto a resposta REST quanto o histórico salvo preservam esses metadados.",
      against: "As respostas fluentes de chatbots genéricos, que eu não conseguia conferir.",
      why: "Cada resposta aponta para o texto-fonte e a página exatos, que é o que torna uma resposta de IA útil para estudar a sério. A pontuação ordena os resultados da recuperação; não é uma probabilidade de confiança na resposta.",
    },
    {
      project: "nordic-balancing",
      title: "Um único modelo de 15 minutos em UTC para cinco fontes",
      chosen:
        "Clientes Python tipados que colocam os dados de balanceamento e desequilíbrio da Energinet, Fingrid, Svenska kraftnät, eSett e ENTSO-E em intervalos de 15 minutos em UTC.",
      against:
        "Trabalhar com as cinco fontes separadamente, cada uma com seus formatos, lacunas e revisões.",
      why: "Um único modelo torna os dados nórdicos de energia mais fáceis de inspecionar e usar, e duas fontes podem ser conciliadas quando divergem.",
    },
    {
      project: "nordic-balancing",
      title: "Um valor ausente continua ausente",
      chosen: "Um valor que a fonte não publicou fica vazio.",
      against: "Preenchê-lo ou gravá-lo como zero.",
      why: "Integridade dos dados: uma lacuna na fonte continua visível como lacuna, em vez de parecer um dado publicado.",
    },
  ],
};

const sv: DecisionsLocale = {
  page: {
    title: "Tekniska beslut | João Paulo Navarro",
    description:
      "Åtta tekniska beslut från RegMais, DispensaMais, Study Brain och nordic-balancing: vad jag valde, vad jag valde bort och varför.",
    eyebrow: "Tekniska beslut",
    heading: "Vad jag valde, vad jag valde bort och varför.",
    intro:
      "Åtta beslut från mina fallstudier och mitt arbete med öppen källkod. Varje beslut länkar till fallstudien eller källkoden det kommer från.",
    listTitle: "Beslut",
    chosen: "Valt:",
    against: "I stället för:",
    why: "Varför:",
  },
  readCase: (name) => `Läs fallstudien om ${name} →`,
  readSource: (name) => `Läs källkoden för ${name} ↗`,
  decisions: [
    {
      project: "RegMais",
      title: "Skilj förhandsgranskning från beslut",
      chosen:
        "Förhandsgranskningen av tilldelningen hämtar kön, filtrerar väntande patienter efter specialitet och begränsar förslaget till lediga tider. Själva tilldelningen är en separat åtgärd.",
      against: "Att tilldela i samma steg som visar förslaget.",
      why: "Handläggaren kan granska förslaget först, och det finns en tydlig gräns mellan att granska ett förslag och att ändra patientuppgifter.",
    },
    {
      project: "RegMais",
      title: "Skydda poster som har historik",
      chosen:
        "Rutterna för att radera patienter och köer kontrollerar kopplad verksamhetshistorik.",
      against: "Att lämna raderingen åt en generell raderingsknapp.",
      why: "Konsekvenserna av en radering blir en del av domänflödet.",
    },
    {
      project: "DispensaMais",
      title: "Kontrollera versionen innan lagret ändras",
      chosen:
        "Utlämningstjänsten jämför den förväntade versionen av behörigheten med den aktuella posten och avvisar en inaktuell förfrågan innan lagret ändras. Radlås samordnar åtkomsten till behörigheten under transaktionen.",
      against: "Att genomföra en förfrågan som gjorts mot en inaktuell behörighet.",
      why: "Upprepade förfrågningar och samtidiga ändringar får inte i det tysta skapa extra lagerrörelser.",
    },
    {
      project: "DispensaMais",
      title: "Ge nya försök en stabil identitet",
      chosen:
        "Varje utlämning har en idempotensnyckel som är unik inom en tenant och en hash av innehållet.",
      against: "Att behandla varje nytt försök som en ny utlämning.",
      why: "Syftet är att känna igen en upprepad förfrågan som samma förfrågan.",
    },
    {
      project: "Study Brain",
      title: "Flytta inläsningen utanför förfrågans livscykel",
      chosen:
        "API:et tar emot ett jobb och visar dess status; en separat worker ansvarar för PDF-extrahering och skrivning till indexen.",
      against: "Att bearbeta PDF:er i samma HTTP-förfrågan som startade dem.",
      why: "PDF-bearbetningen kan fortsätta oberoende av förfrågan som startade den. Avvägningen: Neo4j och Qdrant är separata lagringar, inte en enda atomär transaktion.",
    },
    {
      project: "Study Brain",
      title: "Håll källhänvisningen kopplad till evidensen",
      chosen:
        "Hämtade poster behåller källtext, sökväg, sidintervall, sökmetod och poäng, och både REST-svaret och den sparade historiken bevarar dessa metadata.",
      against: "Flytande svar från allmänna chatbotar, som jag inte kunde kontrollera.",
      why: "Varje svar pekar tillbaka på exakt källtext och sida, och det är det som gör ett AI-svar användbart för seriösa studier. Poängen rangordnar sökresultaten; den är ingen sannolikhet för att svaret stämmer.",
    },
    {
      project: "nordic-balancing",
      title: "En gemensam 15-minutersmodell i UTC för fem källor",
      chosen:
        "Typade Python-klienter som lägger balans- och obalansdata från Energinet, Fingrid, Svenska kraftnät, eSett och ENTSO-E i 15-minutersintervall i UTC.",
      against:
        "Att arbeta med de fem källorna var för sig, var och en med egna format, luckor och revideringar.",
      why: "En gemensam modell gör nordiska energidata lättare att granska och använda, och två källor kan stämmas av mot varandra när de skiljer sig åt.",
    },
    {
      project: "nordic-balancing",
      title: "Ett saknat värde förblir saknat",
      chosen: "Ett värde som källan inte har publicerat förblir tomt.",
      against: "Att fylla i det eller lagra det som noll.",
      why: "Dataintegritet: en lucka i källan syns som en lucka i stället för att se ut som publicerade data.",
    },
  ],
};

const text: Record<Locale, DecisionsLocale> = { en, "pt-br": ptBr, sv };

export const getDecisionsPage = (locale: Locale) => {
  const t = text[locale];
  const source = (project: Project): Source =>
    project === "nordic-balancing"
      ? { label: t.readSource(project), href: nordicBalancingHref }
      : { label: t.readCase(project), href: localePath(locale, `/work/${caseSlugs[project]}/`) };
  const decisions: readonly EngineeringDecision[] = t.decisions.map((decision) => ({
    ...decision,
    source: source(decision.project),
  }));
  return { page: t.page, decisions };
};
