import type { SiteText } from "../types";

export const ptBr: SiteText = {
  profile: { role: "Engenheiro Full-Stack / IA Aplicada", location: "São Paulo, Brasil" },
  shell: {
    skip: "Pular para o conteúdo",
    identityRole: "Engenheiro de software",
    mainNav: "Navegação principal",
    work: "Projetos",
    resume: "Currículo",
    contact: "Entre em contato",
    languageNav: "Idioma",
    darkTheme: "Tema escuro",
    footer: "Feito com cuidado. Mantido simples.",
  },
  home: {
    title: "João Paulo Navarro — Engenheiro Full-Stack / IA Aplicada",
    description:
      "Engenheiro full-stack e de IA aplicada: sistemas de backend para processos de saúde do setor público, um tutor de IA cujas respostas citam as fontes e ferramentas open source para dados de energia nórdicos.",
    heroTitle: ["Sistemas confiáveis.", "Respostas rastreáveis."],
    intro:
      "Sou o João Paulo. Desenvolvo sistemas de backend para processos do setor público e um tutor de IA cujas respostas citam as páginas em que se apoiam. Hoje, levo esse mesmo cuidado com a integridade dos dados para software open source voltado à energia nórdica.",
    introDetail:
      "O que liga esses trabalhos: regras de negócio que precisam ser respeitadas, dados que precisam permanecer consistentes e respostas que podem ser conferidas.",
    proof: [
      "5 anos entregando software em produção",
      "Sistema de regulação em saúde em produção",
      "Biblioteca open source de energia nórdica no PyPI",
      "Respostas de IA ligadas às páginas de origem",
    ],
    explore: "Explorar as ferramentas de energia nórdica",
    seeCases: "Ver os casos de backend e IA",
    viewResume: "Ver currículo ↗",
    availability: "Disponível para mudança, com patrocínio de visto",
    indexLabel: "Sistemas selecionados",
    indexEyebrow: "Notas de campo de um engenheiro",
    indexIntro: ["A regra por trás", "da interface."],
    indexOpen: "Energia nórdica, em público",
    indexNote: ["Modelos de domínio. Limites deliberados.", "Software que se pode entender."],
    workEyebrow: "02 / Projetos selecionados",
    workTitle: "Construído para resolver problemas reais.",
    workIntro: [
      "Saúde, regulação e IA aplicada.",
      "Cada sistema feito para que a decisão certa seja a mais fácil.",
    ],
    technologies: (name) => `Tecnologias do ${name}`,
    insideSystem: "Dentro do sistema",
    readCase: (name) => `Ler o estudo de caso do ${name} →`,
    approachEyebrow: "03 / Abordagem de engenharia",
    approachTitle: "O trabalho que importa está nas decisões.",
    approach: [
      {
        title: "Modelar as regras.",
        body: "Autorização, estoque, capacidade e histórico merecem modelos explícitos. O backend deve proteger as regras que a interface promete.",
        link: "Ver o limite da dispensação →",
        slug: "dispensamais",
      },
      {
        title: "Tornar as ações compreensíveis.",
        body: "Pré-visualizar mudanças com consequências. Explicar estados vazios e de falha. Deixar o operador entender uma decisão antes de confirmá-la.",
        link: "Ver o fluxo de alocação →",
        slug: "regmais",
      },
      {
        title: "Tornar as respostas verificáveis.",
        body: "Levar o texto-fonte e as referências de página pela ingestão, pela recuperação e pela saída do modelo. Conferir a evidência contra o documento de origem.",
        link: "Ver o caminho do documento à evidência →",
        slug: "fiscal-brain",
      },
    ],
    openEyebrow: "01 / Energia nórdica, em código aberto",
    openTitle: "Dados de energia nórdicos mais fáceis de inspecionar e usar.",
    openIntro:
      "Os dados nórdicos de balanceamento vêm de cinco fontes, cada uma com seus formatos, lacunas e revisões, e as APIs públicas mostram só o valor mais recente. A nordic-balancing reúne tudo em um único modelo de 15 minutos em UTC e deixa um valor ausente como ausente, sem preenchê-lo. O Nordic Balancing Watch roda sobre essa biblioteca e guarda cada versão que encontra, para que se possa rastrear quando um preço apareceu pela primeira vez e o que mudou depois.",
    moreEyebrow: "04 / Outras explorações",
    moreTitle: "Um repertório de engenharia mais amplo.",
    bulldog: {
      name: "Bulldog: Sverige",
      domain: "Aprendizado interativo de idiomas",
      description:
        "Um simulador de vida 2D em Unity 6 para aprender sueco vivendo o dia a dia de uma pequena cidade sueca: explorar, estudar, fazer compras, trabalhar e fazer amigos. Projetado para que o sueco seja algo de que o jogador precisa, não só algo que estuda. Em desenvolvimento.",
      linkLabel: "Fale comigo sobre o projeto →",
    },
    aboutEyebrow: "05 / Contexto profissional",
    aboutTitle: ["Perto do domínio.", "Em toda a stack."],
    aboutLead: "Construo software que organizações reais usam todos os dias.",
    aboutBody: [
      "Na DemandaNet, trabalho desde 2021 com fluxos de gestão educacional, migrações de dados relacionais e módulos de produto. Meus projetos independentes levam essa prática para serviços públicos de saúde e inteligência documental baseada em evidências.",
      "Python e PHP fazem parte do meu trabalho desde o início da carreira: PHP é a base da plataforma da DemandaNet, e também trabalho com Laravel. TypeScript e SQL cobrem boa parte do resto, e escolho as demais ferramentas de acordo com o problema, as pessoas que usam o software e o custo de mantê-lo.",
    ],
    aboutLink: "Experiência e currículo →",
    contactEyebrow: "Vamos conversar sobre o trabalho",
    contactTitle:
      "Precisa de ajuda com um sistema de backend, uma integração de dados ou uma ferramenta de IA com respostas vinculadas às fontes?",
    contactLead:
      "Me conte o que você está construindo. Busco vagas de backend, full-stack e IA aplicada, em energia nórdica e além.",
    contactResume: "Currículo →",
    contactNote:
      "No Brasil. Inglês fluente, aprendendo sueco. Disponível para mudança com patrocínio de visto, ou para trabalho remoto.",
  },
  caseStudy: {
    titleSuffix: "Estudo de caso de engenharia",
    back: "← Todos os projetos selecionados",
    eyebrow: "Estudo de caso",
    contribution: "Minha contribuição",
    stack: "Stack principal",
    problem: "O problema",
    question: "Questão de engenharia",
    structureEyebrow: "Estrutura do sistema",
    structureTitle: "Um limite que vale a pena deixar explícito.",
    decisions: "Decisões de engenharia",
    regmaisAlt:
      "Pré-visualização de alocação do RegMais mostrando que nenhum paciente compatível está aguardando e que a fila permanece inalterada até a confirmação.",
    regmaisCaption:
      "Interface real capturada durante um teste local anterior. Estado de alocação vazio; nenhum registro de paciente é exibido. O produto opera em português.",
    verification: "Verificação e estado atual",
    sourceEyebrow: "Acesso ao código",
    sourcePublic: "O código deste projeto é público. Leia a implementação diretamente.",
    sourceRead: "Ler o código ↗",
    sourcePrivate:
      "O repositório deste projeto é privado. Posso discutir a arquitetura e a implementação em uma entrevista.",
    discuss: "Entre em contato →",
    otherCases: "Outros estudos de caso",
    keepExploring: "Continue explorando",
  },
  fiscalEvidence: {
    eyebrow: "Verificado com um documento sintético",
    title: "Uma resposta com evidências que você pode conferir.",
    introBefore: "O documento de demonstração traz o rótulo",
    introAfter:
      "Todas as regras tributárias, valores e prazos nestas capturas são fictícios. Elas testam a ingestão e a proveniência. A interface do produto está em português.",
    tutorLabel: "Abrir em tamanho real a captura da resposta e das evidências do Fiscal Brain",
    tutorAlt:
      "Resposta gravada do Tutor mostrando o prazo fictício de recurso de 17 dias ao lado de duas fontes em PDF, páginas 1 e 2, com rótulos de recuperação vetorial e pontuações de ranqueamento.",
    tutorCaption:
      "A resposta salva, rolada até o trecho sobre o recurso, ao lado dos dois itens de evidência. Recortada da captura real do navegador em 1366 px; a saída não foi alterada. As pontuações ordenam o material recuperado, não medem a confiança na resposta. Abra a imagem para ler em tamanho real.",
    ingestionLabel: "Abrir em tamanho real a captura da ingestão concluída do Fiscal Brain",
    ingestionAlt:
      "Histórico da página de ingestão mostrando fiscal-brain-golden-demo.pdf com status concluído.",
    ingestionCaption:
      "Tarefa concluída no histórico de ingestão. O registro mantido da tarefa informa dois trechos e zero erros; o console ocioso não é um registro de processamento ao vivo.",
    mobileLabel: "Abrir em tamanho real a captura das evidências no celular do Fiscal Brain",
    mobileAlt:
      "Em 390 px, a gaveta de evidências no celular mostra as duas fontes em PDF sintético, os números de página, o método vetorial e as pontuações de recuperação.",
    mobileCaption:
      "As evidências continuam acessíveis na gaveta de 390 px. “Unknown” é o rótulo de disciplina atual para esta fonte sintética de caminho plano; o nome do arquivo e os metadados de página são preservados.",
    pdfLink: "Conferir o PDF-fonte sintético ↗",
    jsonLink: "Conferir o JSON de evidências gravado ↗",
  },
  resume: {
    title: "Currículo — João Paulo Navarro | Engenheiro Full-Stack / IA Aplicada",
    description:
      "Experiência de João Paulo Navarro em engenharia full-stack e IA aplicada: software operacional, inteligência documental e evidências de projetos selecionados.",
    back: "← Voltar ao portfólio",
    download: "Baixar currículo em PDF ↓",
    eyebrow: "Currículo",
    profileHeading: "Perfil",
    experienceHeading: "Experiência profissional",
    independentHeading: "Desenvolvimento independente de produtos",
    openHeading: "Energia nórdica · em código aberto",
    capabilitiesHeading: "Competências técnicas",
    educationHeading: "Formação e idiomas",
    languagesLabel: "Idiomas:",
    summary:
      "Engenheiro full-stack com cinco anos entregando software em produção, principalmente para o setor público, agora focado em dados de energia nórdicos. Em código aberto: nordic-balancing no PyPI e Nordic Balancing Watch. Também: regulação de pacientes em produção e respostas de IA verificáveis.",
    experience: {
      title: "Desenvolvedor Full-Stack",
      company: "DemandaNet",
      period: "junho de 2021–presente",
      points: [
        "Construí e mantive módulos que permitem às redes de ensino importar, recuperar, processar e gerir seus dados.",
        "Projetei o módulo de almoxarifado virtual dinâmico e levei a plataforma a bibliotecas escolares e redes intramunicipais.",
        "Migrei dados legados de Oracle para MySQL, preservando a integridade e mantendo a operação no ar.",
        "Construí um chatbot com LangChain que transforma perguntas em linguagem comum em SQL; entreguei melhorias na AWS.",
      ],
    },
    fiscalBrain: {
      title: "Fiscal Brain — ferramenta pessoal de estudo com IA, uso diário",
      points: [
        "Construí um tutor de IA que cita suas fontes: ingestão assíncrona de PDFs (FastAPI + worker) no Qdrant e Neo4j.",
        "Usei diariamente no meu próprio hardware, dividindo a inferência entre provedores locais e na nuvem; evidências conferidas palavra por palavra.",
      ],
    },
    capabilities: [
      {
        title: "Backend e dados",
        detail:
          "Python, FastAPI, SQLAlchemy, SQL, APIs REST, PostgreSQL, MySQL, Oracle, migrações e ETL.",
      },
      {
        title: "Frontend",
        detail: "React, TypeScript, JavaScript, HTML, CSS e interfaces operacionais.",
      },
      {
        title: "Entrega e IA aplicada",
        detail:
          "Git, AWS, testes, ingestão e busca em documentos, Qdrant, Neo4j, Ollama, LangChain e chatbots de linguagem natural para SQL.",
      },
    ],
    education: {
      title: "Tecnólogo em IA Aplicada · PUCPR",
      status: "em andamento, conclusão prevista para o fim de 2027",
    },
    languages: "Português (nativo), inglês (fluente), sueco (A1/A2), alemão (iniciante).",
  },
  notFound: {
    title: "Página não encontrada — João Paulo Navarro",
    description: "Volte ao portfólio de engenharia de software de João Paulo Navarro.",
    eyebrow: "404 / Página não encontrada",
    heading: ["Vamos voltar", "aos projetos."],
    body: "A página pode ter mudado de endereço ou o endereço pode estar incompleto.",
    back: "Voltar ao portfólio →",
  },
  projects: {
    dispensamais: {
      domain: "Operações de farmácia pública",
      headline: "O medicamento certo, na quantidade certa, do lote certo.",
      resumeLine:
        "Sistema de farmácia que entrega a cada paciente exatamente o medicamento e a quantidade autorizados, com estoque preciso por lote.",
      summary:
        "Uma farmácia pública precisa entregar a cada paciente exatamente o que ele está autorizado a receber e manter o estoque correto até o lote. Construí o sistema de dispensação de ponta a ponta. Cada dispensação confere a versão da autorização antes de movimentar o estoque e leva uma chave de idempotência, para que uma nova tentativa seja reconhecida em vez de contada como nova dispensação.",
      status: "Construído de ponta a ponta · repositório privado",
      responsibility:
        "Projetado e construído de forma independente, de ponta a ponta: modelo de domínio, API, interface operacional e fluxos de verificação.",
      problem:
        "Uma farmácia precisa saber mais do que se um medicamento está em estoque. A equipe precisa verificar quem está autorizado a recebê-lo, quanto resta no ciclo de cobertura atual e qual lote deve ser dispensado. Requisições repetidas e edições concorrentes não podem criar silenciosamente movimentações de estoque adicionais.",
      architecture:
        "Uma interface em React chama um serviço FastAPI apoiado em modelos relacionais de autorizações de pacientes, dispensações, itens e eventos de estoque. Autorização e dispensação são registros separados. Consultas restritas ao tenant, locks de transação e uma restrição de idempotência por tenant protegem o caminho de escrita.",
      steps: [
        { title: "Autorização", detail: "Paciente · medicamento · versão" },
        { title: "Verificações de elegibilidade", detail: "Vigência · saldo do ciclo" },
        { title: "Dispensação", detail: "Lote · quantidade · evento de estoque" },
      ],
      flowCaption:
        "Caminho de escrita simplificado. As verificações de autorização acontecem antes da alteração do estoque.",
      decisions: [
        {
          title: "Verificar a versão antes de movimentar o estoque",
          body: "O serviço de dispensação compara a versão esperada da autorização com o registro atual. Uma requisição desatualizada é rejeitada antes de qualquer alteração no estoque. Locks de linha coordenam o acesso à autorização durante a transação.",
        },
        {
          title: "Dar uma identidade estável às novas tentativas",
          body: "As dispensações têm uma chave de idempotência única por tenant e um hash do payload. A intenção é reconhecer uma requisição repetida em vez de tratar cada nova tentativa como um novo evento de dispensação.",
        },
        {
          title: "Manter o domínio visível no modelo de dados",
          body: "Os itens de dispensação guardam as referências à autorização, ao lote e ao evento de estoque. O modelo também registra o lote recomendado e um motivo de substituição, tornando as decisões de escolha de lote verificáveis.",
        },
      ],
      verification:
        "O repositório inclui cenários de integração para dispensação parcial, mudanças de autorização dentro de um ciclo, requisições concorrentes, chaves de idempotência repetidas, prevenção de estoque negativo e isolamento entre tenants.",
      limitation:
        "Os fluxos operacionais estão implementados. Integrações com sistemas nacionais de saúde exigem configuração adicional, e a prontidão para produção tem requisitos de liberação próprios.",
      discussion:
        "Onde devem terminar as verificações otimistas de versão e começar os locks transacionais?",
    },
    "fiscal-brain": {
      domain: "IA aplicada · ferramenta pessoal de estudo",
      headline: "Respostas de IA que você pode conferir na fonte.",
      resumeLine:
        "Ferramenta pessoal de estudo com IA, usada diariamente: as respostas citam os trechos e as páginas em que se apoiam.",
      summary:
        "Respostas fluentes de chatbot não serviam para estudar para concursos se eu não pudesse conferi-las. Construí um tutor de IA pessoal sobre minha própria biblioteca de PDFs e o usei todos os dias. Cada trecho recuperado mantém o arquivo e a página até a resposta, para que toda resposta possa ser conferida no documento.",
      status: "Ferramenta pessoal · uso diário",
      responsibility:
        "Projetado, construído e usado diariamente: ingestão de documentos, recuperação, integração com modelos e a interface do Tutor, tudo rodando no meu próprio hardware.",
      problem:
        "Eu estudava para concursos da área fiscal com uma biblioteca de PDFs grande e crescente. Chatbots genéricos davam respostas fluentes que eu não conseguia conferir. Construí o Fiscal Brain para que cada resposta aponte para o texto-fonte e a página exatos, que é o que torna uma resposta de IA útil para estudar a sério.",
      architecture:
        "O FastAPI enfileira o trabalho de ingestão. Um worker separado extrai e divide os PDFs em trechos, grava sua estrutura no Neo4j e gera embeddings do texto completo dos trechos no Qdrant. O Tutor recupera evidências, envia-as a um modelo e devolve a resposta com os metadados da fonte. A demonstração REST gravada foi configurada com Ollama local e qwen3:8b. Seus dois itens de evidência têm o rótulo vector. A busca full-text e o enriquecimento por grafo no Neo4j existem no código, mas sua contribuição para esta resposta não foi medida separadamente.",
      steps: [
        { title: "PDF → worker", detail: "Tarefa enfileirada · extração · trechos por página" },
        { title: "Indexar → recuperar", detail: "Vetores no Qdrant · texto-fonte e páginas" },
        { title: "Tutor → evidência", detail: "Resposta do modelo · fontes verificáveis" },
      ],
      flowCaption:
        "Caminho de resposta demonstrado. O worker também indexa o Neo4j; este diagrama não atribui a resposta a raciocínio sobre grafos.",
      decisions: [
        {
          title: "Tirar a ingestão do ciclo de vida da requisição",
          body: "A API aceita uma tarefa e expõe seu status; um worker separado é responsável pela extração e pela escrita nos índices. O processamento do PDF pode continuar independentemente da requisição HTTP que o iniciou. O worker grava a estrutura dos trechos no Neo4j e o texto com embeddings no Qdrant; são armazenamentos separados, não uma única transação atômica.",
        },
        {
          title: "Manter a proveniência junto da evidência",
          body: "Os itens recuperados preservam texto-fonte, caminho, intervalo de páginas, método de recuperação e pontuação. A resposta REST e o histórico salvo do assistente mantêm esses metadados para o painel de evidências. As pontuações ordenam os resultados da recuperação: a similaridade vetorial pode ser reforçada por uma correspondência full-text, então o valor exibido não é uma probabilidade de confiança na resposta.",
        },
        {
          title: "Escolher modelos por papel, com fallback explícito",
          body: "Uma abstração de provedor separa a integração com modelos da tutoria. Raciocínio e extração podem usar papéis de modelo configurados diferentes, com fallback determinístico para o padrão do provedor. Ollama local é suportado. A demonstração principal exercita uma configuração local; não é um benchmark entre provedores ou hardwares.",
        },
      ],
      verification:
        "Uma execução gravada do caminho principal usou um PDF sintético de duas páginas com fatos fictícios deliberadamente únicos. A tarefa real de ingestão foi concluída com dois trechos e zero erros registrados. Uma resposta REST do Tutor retornou uma resposta e dois itens de evidência vetorial. Durante esta auditoria do portfólio, os dois textos retornados foram conferidos de forma independente, palavra por palavra, com as páginas indicadas do PDF. As capturas de tela mostram a resposta salva e suas evidências na interface real do navegador.",
      limitation:
        "Rodar tudo localmente foi o verdadeiro desafio de engenharia. Qdrant, Neo4j e os modelos disputam a mesma máquina, então dividi a inferência entre modelos locais e provedores na nuvem, e mantive a biblioteca de estudo no Google Drive. A verificação acima usa um documento sintético porque o material de estudo real é privado.",
      discussion:
        "O que um leitor pode verificar sobre uma resposta de IA, além da própria resposta?",
    },
    regmais: {
      domain: "Regulação de serviços públicos",
      headline: "Pacientes chegam ao atendimento especializado certo, na ordem certa.",
      resumeLine:
        "Sistema de regulação que leva pacientes da fila à consulta especializada certa, por especialidade, prioridade e tempo de espera.",
      summary:
        "Equipes do setor público precisam cruzar a fila de espera por especialistas com uma capacidade limitada de consultas. Construí o sistema que propõe alocações por especialidade, prioridade e tempo de espera. A proposta é só uma pré-visualização: nada muda nos registros dos pacientes até o operador confirmar.",
      status: "Em produção",
      responsibility:
        "Projetado, construído e levado à produção de forma independente, conforme a especificação do cliente: fluxos multi-tenant, a interface web e salvaguardas de implantação.",
      problem:
        "A equipe do setor público coordena a demanda frente a uma capacidade limitada de agendamentos. Uma interface de alocação precisa explicar quem é elegível e por que aparece na fila, mantendo um limite claro entre revisar uma proposta e alterar registros de pacientes.",
      architecture:
        "O cliente React apresenta pacientes, demandas de serviço, filas e agendas. Rotas FastAPI gerenciam os registros relacionais. Entidades restritas por tenant e verificações na API mantêm separados os dados de cada tenant; proteções na configuração de produção rejeitam padrões inseguros.",
      steps: [
        { title: "Fila de espera", detail: "Especialidade · prioridade · tempo de espera" },
        {
          title: "Pré-visualização da alocação",
          detail: "Pacientes compatíveis · vagas disponíveis",
        },
        { title: "O operador confirma", detail: "Ação explícita antes da alocação" },
      ],
      flowCaption:
        "Fluxo de interação. Pré-visualizar pacientes compatíveis não os aloca por si só.",
      decisions: [
        {
          title: "Separar a pré-visualização da confirmação",
          body: "A interface busca a fila quando a pré-visualização é aberta, filtra os pacientes em espera por especialidade e limita a proposta às vagas disponíveis. A ação de alocação é separada, para que o operador possa conferir a proposta antes.",
        },
        {
          title: "Tratar configuração insegura como erro",
          body: "A validação na inicialização em produção rejeita o segredo de sessão padrão, cookies inseguros, SQLite e uma lista de CORS vazia. Erros de configuração ficam visíveis antes de o serviço iniciar.",
        },
        {
          title: "Proteger registros que têm histórico",
          body: "As rotas de exclusão de pacientes e filas verificam o histórico operacional vinculado. Isso coloca as consequências da exclusão dentro do fluxo de domínio, em vez de deixá-las a cargo de um botão genérico de excluir.",
        },
      ],
      verification:
        "Os testes do repositório exercitam o isolamento entre tenants usando tenants sintéticos. O componente de alocação implementa os estados de carregamento, fila indisponível, sem agenda e sem paciente compatível. O fluxo de implantação inclui etapas explícitas de liberação e verificações de saúde.",
      limitation:
        "Os fluxos de regulação do setor público estão em produção. Cada nova implantação exige configuração do ambiente, verificação da liberação e autorização para tratar dados reais de pacientes.",
      discussion: "Como tornar uma operação em lote compreensível sem esconder suas consequências?",
    },
  },
  openWork: {
    "nordic-balancing": {
      name: "nordic-balancing",
      domain: "Biblioteca Python de código aberto",
      description:
        "A camada de dados: clientes Python tipados para dados de balanceamento e desequilíbrio da Energinet, Fingrid, Svenska kraftnät, eSett e ENTSO-E, em intervalos de 15 minutos em UTC. Um valor que a fonte não publicou fica vazio, nunca zero, e duas fontes podem ser conciliadas quando divergem. Instalável pelo PyPI.",
      resumeLine:
        "Biblioteca Python de código aberto para dados nórdicos de balanceamento e desequilíbrio (15\u00a0min, UTC); no PyPI (v0.4.0).",
      linkLabels: ["Código-fonte", "PyPI v0.4.0"],
    },
    "nordic-balancing-watch": {
      name: "Nordic Balancing Watch",
      domain: "Site de acompanhamento ao vivo",
      description:
        "Construído sobre a nordic-balancing: um coletor consulta as fontes e guarda cada versão de preço que encontra; o site mostra quando cada preço apareceu pela primeira vez, por zona e fonte, e o que foi revisado depois. A coleta começou em outubro de 2026, então o histórico ainda é curto.",
      resumeLine:
        "Site ao vivo que acompanha quando os dados nórdicos de balanceamento aparecem em cada fonte e o que é revisado depois.",
      linkLabels: ["Visitar o site"],
    },
    "entsoe-py": {
      name: "Contribuição ao entsoe-py",
      domain: "Pull request em projeto externo",
      description:
        "Uma contribuição ao entsoe-py, o cliente Python da ENTSO-E Transparency Platform. Enviada, em revisão.",
      resumeLine:
        "Pull request para o cliente da ENTSO-E Transparency Platform; enviado, em revisão.",
      linkLabels: ["Ver o pull request"],
    },
  },
};
