import type { SiteText } from "../types";

export const sv: SiteText = {
  profile: { role: "Fullstack-ingenjör / tillämpad AI", location: "São Paulo, Brasilien" },
  shell: {
    skip: "Hoppa till innehållet",
    identityRole: "Mjukvaruingenjör",
    mainNav: "Huvudnavigering",
    work: "Projekt",
    resume: "CV",
    contact: "Kontakta mig",
    languageNav: "Språk",
    darkTheme: "Mörkt tema",
    footer: "Byggd med omsorg. Hålls enkel.",
  },
  home: {
    title: "João Paulo Navarro — Fullstack-ingenjör / tillämpad AI",
    description:
      "Fullstack- och AI-ingenjör på väg in i nordisk energi: öppen källkod för data från den nordiska balansmarknaden, ett vårdstyrningssystem i produktion och AI-svar som går att kontrollera.",
    heroTitle: ["Pålitlig mjukvara.", "Från idé till drift."],
    intro:
      "Jag heter João Paulo. Jag bygger mjukvara som kritisk verksamhet är beroende av: patienter når rätt vård, register förblir tillförlitliga och AI-svar går att kontrollera mot sina källor. Nu tar jag med mig det arbetssättet till nordiska energidata.",
    introDetail:
      "Fem år av mjukvara i produktion, främst för offentlig sektor, med ansvar från datamodell till driftsättning. Byggt öppet för den nordiska energisektorn: nordic-balancing på PyPI och Nordic Balancing Watch.",
    proof: [
      "nordic-balancing: nordiska energidata, på PyPI",
      "5 år med mjukvara i produktion",
      "System för vårdstyrning i produktion",
      "3 system byggda från början till slut",
    ],
    explore: "Utforska utvalda projekt",
    viewResume: "Visa CV ↗",
    availability: "Tillgänglig för flytt med visumsponsring",
    indexLabel: "Utvalda system",
    indexEyebrow: "En ingenjörs fältanteckningar",
    indexIntro: ["Regeln bakom", "gränssnittet."],
    indexOpen: "Nordisk energi, öppet",
    indexNote: ["Domänmodeller. Medvetna gränser.", "Mjukvara som går att resonera om."],
    workEyebrow: "02 / Utvalda projekt",
    workTitle: "Byggt för att lösa verkliga problem.",
    workIntro: [
      "Vård, styrning och tillämpad AI.",
      "Varje system byggt så att rätt beslut blir det enkla.",
    ],
    technologies: (name) => `Tekniker i ${name}`,
    insideSystem: "Inuti systemet",
    readCase: (name) => `Läs fallstudien om ${name} →`,
    approachEyebrow: "03 / Ingenjörsmässigt arbetssätt",
    approachTitle: "Det värdefulla arbetet ligger i besluten.",
    approach: [
      {
        title: "Modellera reglerna.",
        body: "Behörighet, lager, kapacitet och historik förtjänar explicita modeller. Backend ska skydda de regler som gränssnittet utlovar.",
        link: "Se gränsen kring utlämningen →",
        slug: "dispensamais",
      },
      {
        title: "Gör handlingar begripliga.",
        body: "Förhandsgranska ändringar som får konsekvenser. Förklara tomma lägen och fellägen. Låt handläggaren förstå ett beslut innan det genomförs.",
        link: "Se tilldelningsflödet →",
        slug: "regmais",
      },
      {
        title: "Gör svar granskningsbara.",
        body: "Bär med källtext och sidhänvisningar genom inläsning, sökning och modellens svar. Kontrollera evidensen mot dokumentet den kommer från.",
        link: "Se vägen från dokument till evidens →",
        slug: "fiscal-brain",
      },
    ],
    openEyebrow: "01 / Nordisk energi, byggt öppet",
    openTitle: "Nordiska energidata, byggt öppet.",
    openIntro:
      "Öppet, live och granskningsbart arbete med den nordiska balansmarknaden: ett publicerat Pythonbibliotek som samlar data från Energinet, Fingrid, Svenska kraftnät, eSett och ENTSO-E i en gemensam modell med 15-minutersintervall i UTC; en webbplats som i realtid bevakar när datan dyker upp och vad som revideras i efterhand; och ett bidrag till entsoe-py, under granskning.",
    moreEyebrow: "04 / Fler utforskningar",
    moreTitle: "En bredare verktygslåda.",
    bulldog: {
      name: "Bulldog: Sverige",
      domain: "Interaktiv språkinlärning",
      description:
        "En 2D-livssimulator i Unity 6 för att lära sig svenska genom att leva ett vanligt liv i en liten svensk stad: utforska, studera, handla, arbeta och skaffa vänner. Utformad så att svenskan blir något spelaren behöver, inte bara studerar. Under utveckling.",
      linkLabel: "Fråga mig om projektet →",
    },
    aboutEyebrow: "05 / Yrkesmässigt sammanhang",
    aboutTitle: ["Nära domänen.", "Genom hela stacken."],
    aboutLead: "Jag bygger mjukvara som verkliga organisationer använder varje dag.",
    aboutBody: [
      "På DemandaNet har jag sedan 2021 arbetat med arbetsflöden för skoladministration, migreringar av relationsdata och produktmoduler. Mina egna projekt för samma arbetssätt vidare till offentliga vårdtjänster och evidensbaserad dokumentintelligens.",
      "Python, TypeScript och SQL binder ihop mycket av arbetet. Resten väljer jag utifrån problemet, människorna som använder mjukvaran och kostnaden för att underhålla den.",
    ],
    aboutLink: "Erfarenhet och CV →",
    contactEyebrow: "Låt oss prata om arbetet",
    contactTitle: "Har du ett problem som är värt att bygga för?",
    contactLead:
      "Jag söker roller inom fullstack, backend eller tillämpad AI, gärna inom energi, där tillförlitliga data och spårbara beslut spelar roll.",
    contactResume: "CV →",
    contactNote:
      "Bor i Brasilien. Flytande engelska, lär mig svenska. Tillgänglig för flytt med visumsponsring, eller för distansarbete.",
  },
  caseStudy: {
    titleSuffix: "Fallstudie",
    back: "← Alla utvalda projekt",
    eyebrow: "Fallstudie",
    contribution: "Min insats",
    stack: "Teknikstack",
    problem: "Problemet",
    question: "Ingenjörsfråga",
    structureEyebrow: "Systemets struktur",
    structureTitle: "En gräns som är värd att göra tydlig.",
    decisions: "Tekniska beslut",
    regmaisAlt:
      "Förhandsgranskning av tilldelning i RegMais som visar att ingen kompatibel patient väntar och att kön förblir oförändrad tills den bekräftas.",
    regmaisCaption:
      "Verkligt gränssnitt, fångat vid ett tidigare lokalt test. Tomt tilldelningsläge; inga patientuppgifter visas. Produkten används på portugisiska.",
    verification: "Verifiering och nuläge",
    sourceEyebrow: "Tillgång till källkod",
    sourcePublic: "Projektets källkod är öppen. Läs implementationen direkt.",
    sourceRead: "Läs källkoden ↗",
    sourcePrivate:
      "Projektets kodförråd är privat. Jag berättar gärna om arkitekturen och implementationen vid en intervju.",
    discuss: "Hör av dig →",
    otherCases: "Andra fallstudier",
    keepExploring: "Utforska vidare",
  },
  fiscalEvidence: {
    eyebrow: "Verifierat med ett syntetiskt dokument",
    title: "Ett svar med evidens som går att granska.",
    introBefore: "Demodokumentet är märkt",
    introAfter:
      "Alla skatteregler, belopp och tidsfrister i bilderna är påhittade. De testar inläsning och spårbarhet. Produktens gränssnitt är på portugisiska.",
    tutorLabel: "Öppna bilden av Fiscal Brains svar och evidens i full storlek",
    tutorAlt:
      "Inspelat svar från Tutor som visar den påhittade överklagandefristen på 17 dagar bredvid två PDF-källor, sidorna 1 och 2, med etiketter för vektorsökning och rankningspoäng.",
    tutorCaption:
      "Det sparade svaret, rullat till stycket om överklagande, bredvid båda evidensposterna. Beskuren från den verkliga webbläsarbilden i 1366 px; utdata är oförändrade. Poängen rangordnar hämtat material, de mäter inte hur säkert svaret är. Öppna bilden för att läsa den i full storlek.",
    ingestionLabel: "Öppna bilden av Fiscal Brains slutförda inläsning i full storlek",
    ingestionAlt:
      "Historiken på inläsningssidan visar fiscal-brain-golden-demo.pdf med status slutförd.",
    ingestionCaption:
      "Slutfört jobb i inläsningshistoriken. Det sparade jobbet anger två textavsnitt och noll fel; den inaktiva konsolen är ingen logg över pågående bearbetning.",
    mobileLabel: "Öppna mobilbilden av Fiscal Brains evidens i full storlek",
    mobileAlt:
      "Vid 390 px visar mobilens evidenspanel båda syntetiska PDF-källorna, deras sidnummer, vektormetod och sökpoäng.",
    mobileCaption:
      "Evidensen är fortfarande tillgänglig i panelen vid 390 px. ”Unknown” är den nuvarande ämnesetiketten för denna syntetiska källa från en platt sökväg; filnamn och sidmetadata finns kvar.",
    pdfLink: "Granska den syntetiska käll-PDF:en ↗",
    jsonLink: "Granska den inspelade evidens-JSON:en ↗",
  },
  resume: {
    title: "CV — João Paulo Navarro | Fullstack-ingenjör / tillämpad AI",
    description:
      "João Paulo Navarros erfarenhet inom fullstackutveckling och tillämpad AI: verksamhetssystem, dokumentintelligens och belägg från utvalda projekt.",
    back: "← Tillbaka till portfolion",
    download: "Ladda ner CV som PDF ↓",
    eyebrow: "CV",
    profileHeading: "Profil",
    experienceHeading: "Yrkeserfarenhet",
    independentHeading: "Egen produktutveckling",
    openHeading: "Nordisk energi · byggt öppet",
    capabilitiesHeading: "Teknisk kompetens",
    educationHeading: "Utbildning och språk",
    languagesLabel: "Språk:",
    summary:
      "Fullstack-ingenjör med fem år av mjukvara i produktion, främst för offentlig sektor, nu med fokus på nordiska energidata: nordic-balancing (PyPI) och Nordic Balancing Watch, byggda öppet.",
    experience: {
      title: "Fullstackutvecklare",
      company: "DemandaNet",
      period: "juni 2021–nu",
      points: [
        "Byggde och förvaltade moduler som låter skolnätverk importera, återställa, bearbeta och hantera sina data.",
        "Utformade modulen Dynamic Virtual Warehouse; byggde ut plattformen för skolbibliotek och kommunala nät.",
        "Migrerade äldre data från Oracle till MySQL med bevarad dataintegritet och obruten drift.",
        "Byggde en LangChain-chattbot som gör frågor på vanligt språk till SQL; levererade AWS-förbättringar.",
      ],
    },
    fiscalBrain: {
      title: "Fiscal Brain — personligt AI-studieverktyg, använt dagligen",
      points: [
        "Byggde en AI-handledare som hänvisar till sina källor: asynkron PDF-inläsning (FastAPI + worker) till Qdrant och Neo4j.",
        "Körde det dagligen på egen hårdvara och fördelade inferensen mellan lokala och molnbaserade leverantörer; evidensen kontrollerad ordagrant.",
      ],
    },
    capabilities: [
      {
        title: "Backend och data",
        detail:
          "Python, FastAPI, SQLAlchemy, SQL, REST-API:er, PostgreSQL, MySQL, Oracle, migrering och ETL.",
      },
      {
        title: "Frontend",
        detail: "React, TypeScript, JavaScript, HTML, CSS och gränssnitt för verksamhetssystem.",
      },
      {
        title: "Leverans och tillämpad AI",
        detail:
          "Git, AWS, testning, inläsning och sökning i dokument, Qdrant, Neo4j, Ollama, LangChain och chattbotar som översätter naturligt språk till SQL.",
      },
    ],
    education: {
      title: "Tecnólogo i tillämpad AI (IA aplicada) · PUCPR",
      status: "pågår, beräknas vara klar i slutet av 2027",
    },
    languages: "Portugisiska (modersmål), engelska (flytande), svenska (A1/A2), tyska (nybörjare).",
  },
  notFound: {
    title: "Sidan hittades inte — João Paulo Navarro",
    description: "Gå tillbaka till João Paulo Navarros portfolio.",
    eyebrow: "404 / Sidan hittades inte",
    heading: ["Vi tar dig tillbaka", "till projekten."],
    body: "Sidan kan ha flyttats eller så är adressen ofullständig.",
    back: "Tillbaka till portfolion →",
  },
  projects: {
    dispensamais: {
      domain: "Läkemedelsutlämning i offentlig vård",
      headline: "Rätt läkemedel, i rätt mängd, från rätt batch.",
      resumeLine:
        "Apotekssystem som ger varje patient exakt det läkemedel och den mängd som är beviljad, med korrekt lager per batch.",
      summary:
        "Säkerställer att varje patient får exakt det läkemedel och den mängd hen är behörig till, och håller apotekets lager korrekt ned till batchnivå, även vid nya försök och samtidiga ändringar.",
      status: "Byggt från början till slut · privat kodförråd",
      responsibility:
        "Utformat och byggt på egen hand, från början till slut: domänmodell, API, handläggargränssnitt och verifieringsflöden.",
      problem:
        "Ett apotek behöver veta mer än om ett läkemedel finns i lager. Personalen måste kontrollera vem som har behörighet att få det, hur mycket som återstår i den aktuella perioden och vilken batch som ska lämnas ut. Upprepade förfrågningar och samtidiga ändringar får inte i det tysta skapa extra lagerförflyttningar.",
      architecture:
        "Ett React-gränssnitt anropar en FastAPI-tjänst som bygger på relationsmodeller för patientbehörigheter, utlämningar, poster och lagerhändelser. Behörighet och utlämning är separata poster. Frågor avgränsade per tenant, transaktionslås och ett idempotensvillkor per tenant skyddar skrivvägen.",
      steps: [
        { title: "Behörighet", detail: "Patient · läkemedel · version" },
        { title: "Behörighetskontroller", detail: "Giltighetstid · saldo för perioden" },
        { title: "Utlämning", detail: "Batch · mängd · lagerhändelse" },
      ],
      flowCaption: "Förenklad skrivväg. Behörighetskontrollerna körs innan lagret ändras.",
      decisions: [
        {
          title: "Kontrollera versionen innan lagret ändras",
          body: "Utlämningstjänsten jämför den förväntade versionen av behörigheten med den aktuella posten. En inaktuell förfrågan avvisas innan lagret ändras. Radlås samordnar åtkomsten till behörigheten under transaktionen.",
        },
        {
          title: "Ge nya försök en stabil identitet",
          body: "Utlämningar har en idempotensnyckel som är unik inom en tenant och en hash av innehållet. Syftet är att känna igen en upprepad förfrågan i stället för att behandla varje nytt försök som en ny utlämning.",
        },
        {
          title: "Håll domänen synlig i datamodellen",
          body: "Utlämningsposterna behåller referenserna till behörighet, batch och lagerhändelse. Modellen registrerar också den rekommenderade batchen och ett skäl till avvikelse, så att valet av batch går att granska.",
        },
      ],
      verification:
        "Kodförrådet innehåller integrationsscenarier för delvis utlämning, ändrad behörighet inom en period, samtidiga förfrågningar, upprepade idempotensnycklar, skydd mot negativt lager och isolering mellan tenants.",
      limitation:
        "Arbetsflödena för verksamheten är implementerade. Integrationer med nationella hälsosystem kräver ytterligare konfiguration, och produktionsdrift har egna krav inför release.",
      discussion: "Var ska optimistiska versionskontroller sluta och transaktionslås ta vid?",
    },
    "fiscal-brain": {
      domain: "Tillämpad AI · personligt studieverktyg",
      headline: "AI-svar som går att kontrollera mot källan.",
      resumeLine:
        "Personligt AI-studieverktyg, använt dagligen: svaren hänvisar till exakt de stycken och sidor de bygger på.",
      summary:
        "AI-studieverktyget jag byggde åt mig själv och använde dagligen inför mina prov. Det gör stora PDF-samlingar till en handledare vars svar kommer med de exakta stycken och sidor de bygger på, så att jag kunde kontrollera i stället för att lita blint.",
      status: "Personligt verktyg · använt dagligen",
      responsibility:
        "Utformat, byggt och använt dagligen: dokumentinläsning, sökning, modellintegration och Tutor-gränssnittet, allt på min egen hårdvara.",
      problem:
        "Jag pluggade inför prov inom skatteområdet med ett stort och växande bibliotek av PDF:er. Allmänna chattbotar gav välformulerade svar som jag inte kunde kontrollera. Jag byggde Fiscal Brain så att varje svar pekar tillbaka på exakt källtext och sida, vilket är det som gör ett AI-svar användbart för seriösa studier.",
      architecture:
        "FastAPI köar inläsningsjobben. En separat worker extraherar och delar upp PDF:er, skriver deras struktur till Neo4j och lagrar embeddings av hela textavsnitt i Qdrant. Tutor hämtar evidens, skickar den till en modell och returnerar svaret med källmetadata. Den inspelade REST-demon kördes med lokal Ollama och qwen3:8b. Dess två evidensposter är märkta vector. Fulltextsökning och grafberikning i Neo4j finns i koden, men deras bidrag till just detta svar mättes inte separat.",
      steps: [
        { title: "PDF → worker", detail: "Köat jobb · extrahering · sidmedvetna textavsnitt" },
        { title: "Indexera → hämta", detail: "Vektorer i Qdrant · källtext och sidor" },
        { title: "Tutor → evidens", detail: "Modellens svar · granskningsbara källor" },
      ],
      flowCaption:
        "Demonstrerad svarsväg. Workern indexerar även Neo4j; diagrammet tillskriver inte svaret något grafbaserat resonemang.",
      decisions: [
        {
          title: "Flytta inläsningen utanför förfrågans livscykel",
          body: "API:et tar emot ett jobb och visar dess status; en separat worker ansvarar för extrahering och skrivning till indexen. PDF-bearbetningen kan fortsätta oberoende av HTTP-förfrågan som startade den. Workern skriver textavsnittens struktur till Neo4j och vektoriserad text till Qdrant; det är separata lagringar, inte en enda atomär transaktion.",
        },
        {
          title: "Håll källhänvisningen kopplad till evidensen",
          body: "Hämtade poster behåller källtext, sökväg, sidintervall, sökmetod och poäng. REST-svaret och den sparade assistenthistoriken bevarar metadata för evidenspanelen. Poängen rangordnar sökresultaten: vektorlikhet kan förstärkas av en fulltextträff, så värdet som visas är ingen sannolikhet för att svaret stämmer.",
        },
        {
          title: "Välj modeller efter roll, med uttrycklig reserv",
          body: "En abstraktion för leverantörer skiljer modellintegrationen från handledningen. Resonemang och extrahering kan använda olika konfigurerade modellroller, med deterministisk återgång till leverantörens standard. Lokal Ollama stöds. Demon kör en lokal konfiguration; den är inget jämförande test mellan leverantörer eller hårdvara.",
        },
      ],
      verification:
        "En inspelad körning av huvudflödet använde en syntetisk PDF på två sidor med avsiktligt unika, påhittade fakta. Det verkliga inläsningsjobbet slutfördes med två textavsnitt och noll registrerade fel. Ett REST-svar från Tutor gav ett svar och två evidensposter från vektorsökning. Under granskningen inför denna portfolio matchades båda returnerade texterna oberoende och ordagrant mot de angivna PDF-sidorna. Skärmbilderna visar det sparade svaret och dess evidens i det verkliga webbläsargränssnittet.",
      limitation:
        "Att köra allt lokalt var den verkliga tekniska utmaningen. Qdrant, Neo4j och modellerna konkurrerar om samma maskin, så jag fördelade inferensen mellan lokala modeller och molnleverantörer, och höll studiebiblioteket i Google Drive. Verifieringen ovan använder ett syntetiskt dokument eftersom det verkliga studiematerialet är privat.",
      discussion: "Vad kan en läsare verifiera i ett AI-svar, utöver själva svaret?",
    },
    regmais: {
      domain: "Styrning av offentliga tjänster",
      headline: "Patienter når rätt specialistvård, i rätt ordning.",
      resumeLine:
        "Styrningssystem som för patienter från väntelistan till rätt specialistmottagning efter specialitet, prioritet och väntetid.",
      summary:
        "För patienter från väntelistan till rätt specialistmottagning genom att matcha behov mot tillgänglig kapacitet efter specialitet, prioritet och väntetid, med varje tilldelning synlig innan den bekräftas.",
      status: "I produktion",
      responsibility:
        "Utformat, byggt och satt i produktion på egen hand enligt kundens specifikation: multi-tenant-arbetsflöden, webbgränssnittet och skydd vid driftsättning.",
      problem:
        "Personal inom offentlig sektor fördelar behov mot en begränsad mottagningskapacitet. Ett gränssnitt för tilldelning måste förklara vem som är behörig och varför de står i kön, och samtidigt hålla en tydlig gräns mellan att granska ett förslag och att ändra patientuppgifter.",
      architecture:
        "React-klienten visar patienter, vårdbehov, köer och scheman. FastAPI-rutter hanterar relationsdata. Entiteter avgränsade per tenant och kontroller i API:et håller varje tenants data åtskilda; skydd i produktionskonfigurationen avvisar osäkra standardvärden.",
      steps: [
        { title: "Väntelista", detail: "Specialitet · prioritet · väntetid" },
        { title: "Förhandsgranskning", detail: "Kompatibla patienter · lediga tider" },
        { title: "Handläggaren bekräftar", detail: "Uttrycklig åtgärd före tilldelning" },
      ],
      flowCaption:
        "Interaktionsflöde. Att förhandsgranska kompatibla patienter tilldelar dem inte i sig.",
      decisions: [
        {
          title: "Skilj förhandsgranskning från beslut",
          body: "Gränssnittet hämtar kön när förhandsgranskningen öppnas, filtrerar väntande patienter efter specialitet och begränsar förslaget till lediga tider. Själva tilldelningen är en separat åtgärd, så att handläggaren kan granska förslaget först.",
        },
        {
          title: "Behandla osäker konfiguration som ett fel",
          body: "Valideringen vid start i produktion avvisar standardhemligheten för sessioner, osäkra cookies, SQLite och en tom CORS-lista. Konfigurationsfel blir synliga innan tjänsten startar.",
        },
        {
          title: "Skydda poster som har historik",
          body: "Rutterna för att radera patienter och köer kontrollerar kopplad verksamhetshistorik. Konsekvenserna av en radering hanteras då i domänflödet i stället för att lämnas åt en generell raderingsknapp.",
        },
      ],
      verification:
        "Tester i kodförrådet prövar isolering mellan tenants med syntetiska tenants. Tilldelningskomponenten hanterar lägena laddning, kö ej tillgänglig, inget schema och ingen kompatibel patient. Driftsättningsflödet har uttryckliga kontrollpunkter inför release och hälsokontroller.",
      limitation:
        "Regleringsflödena inom offentlig sektor används i produktion. Varje ny driftsättning kräver miljökonfiguration, verifiering av releasen och behörighet att hantera verkliga patientuppgifter.",
      discussion: "Hur gör man en massåtgärd begriplig utan att dölja dess konsekvenser?",
    },
  },
  openWork: {
    "nordic-balancing": {
      name: "nordic-balancing",
      domain: "Pythonbibliotek med öppen källkod",
      description:
        "En Python-klient för nordiska data om balansering och obalans i elsystemet från Energinet, Fingrid, Svenska kraftnät, eSett och ENTSO-E, normaliserade till 15-minutersintervall i UTC. Öppet och installerbart från PyPI.",
      resumeLine:
        "Pythonbibliotek med öppen källkod för nordiska balans- och obalansdata i 15-minutersintervall (UTC); på PyPI (v0.4.0).",
      linkLabels: ["Källkod", "PyPI v0.4.0"],
    },
    "nordic-balancing-watch": {
      name: "Nordic Balancing Watch",
      domain: "Bevakning i realtid",
      description:
        "Bevakar när data från den nordiska balansmarknaden dyker upp hos varje källa och vad som revideras i efterhand.",
      resumeLine:
        "Webbplats som i realtid bevakar när nordiska balansdata dyker upp hos varje källa och vad som revideras i efterhand.",
      linkLabels: ["Besök webbplatsen"],
    },
    "entsoe-py": {
      name: "Bidrag till entsoe-py",
      domain: "Pull request till ett externt projekt",
      description:
        "Ett bidrag till entsoe-py, Python-klienten för ENTSO-E Transparency Platform. Inskickat, under granskning.",
      resumeLine:
        "Pull request till klienten för ENTSO-E Transparency Platform; inskickad, under granskning.",
      linkLabels: ["Visa pull requesten"],
    },
  },
};
