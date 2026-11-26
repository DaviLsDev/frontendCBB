export type Pais = { nome: string; codigo: string };

export type Missao = {
  slug: string;
  titulo: string;
  paises: Pais[];
  continente: string;
  local?: string;
  resumo: string;
  tags: string[];
  missionario: { nome: string; iniciais: string; funcao: string };
  descricao: string[];
  acoes: string[];
  contactos: { label: string; valor: string }[];
  pedidosOracao?: string[];
  fotos?: { src: string; alt: string }[];
  banco?: { k: string; v: string }[];
  pix?: string;
};

export const missoes: Missao[] = [
  {
    slug: "mocambique",
    titulo: "Moçambique",
    paises: [{ nome: "Moçambique", codigo: "mz" }],
    continente: "África",
    local: "Beira Alta",
    resumo: "Evangelismo e trabalho social com cerca de 300 crianças.",
    tags: ["Evangelismo", "Trabalho social", "Crianças"],
    missionario: {
      nome: "Pastor Luca Paulinozondo",
      iniciais: "LP",
      funcao: "Pastor, Beira Alta",
    },
    descricao: [
      "Através do pastor Luca Paulinozondo, estamos a anunciar o evangelho em toda a comunidade e a desenvolver um trabalho social com aproximadamente 300 crianças.",
    ],
    acoes: [
      "Evangelismo na comunidade",
      "Trabalho social com cerca de 300 crianças",
    ],
    contactos: [{ label: "Telefone", valor: "+258 84 246 2032" }],
    pedidosOracao: [
      "Proteção e provisão para o pastor Luca e para o trabalho com as crianças.",
    ],
    fotos: [
      { src: "/missoes/mocambique-1.jpg", alt: "Crianças em Moçambique" },
    ],
  },
  {
    slug: "quenia-etiopia",
    titulo: "Quênia e Etiópia",
    paises: [
      { nome: "Quênia", codigo: "ke" },
      { nome: "Etiópia", codigo: "et" },
    ],
    continente: "África",
    resumo: "Palavra de Deus e ação social em diversas comunidades.",
    tags: ["Evangelismo", "Ação social", "Escolas e igrejas"],
    missionario: {
      nome: "Missionária Marise",
      iniciais: "M",
      funcao: "Missionária",
    },
    descricao: [
      "Com a ajuda da missionária Marise, estamos a levar a Palavra de Deus ao maior número de pessoas possível.",
      "Temos ação social em diversas comunidades, levando alimento, roupas e calçados, e construindo escolas e igrejas.",
    ],
    acoes: [
      "Alimento",
      "Roupas e calçados",
      "Construção de escolas",
      "Construção de igrejas",
    ],
    contactos: [{ label: "Telefone", valor: "+254 700 326290" }],
    pedidosOracao: [
      "Sabedoria e provisão para a missionária Marise e para as comunidades alcançadas.",
    ],
    fotos: [
      { src: "/missoes/quenia-etiopia-1.jpg", alt: "Crianças no Quênia" },
      { src: "/missoes/quenia-etiopia-2.jpg", alt: "Distribuição de alimento" },
    ],
  },
  {
    slug: "zimbabue",
    titulo: "Zimbábue",
    paises: [{ nome: "Zimbábue", codigo: "zw" }],
    continente: "África",
    resumo: "Apoio ao pastor Kachipapa King e à sua família.",
    tags: ["Evangelismo", "Apoio financeiro"],
    missionario: {
      nome: "Pastor Kachipapa King",
      iniciais: "KK",
      funcao: "Pastor e família",
    },
    descricao: [
      "Ajuda financeira ao pastor Kachipapa King e à sua família, para o auxiliar na pregação do evangelho.",
    ],
    acoes: ["Apoio financeiro ao pastor e à família"],
    contactos: [{ label: "Telefone", valor: "+263 77 246 2042" }],
    pedidosOracao: [
      "Provisão e proteção para o pastor Kachipapa King e para a sua família.",
    ],
  },
  {
    slug: "india-nepal",
    titulo: "Índia e Nepal",
    paises: [
      { nome: "Índia", codigo: "in" },
      { nome: "Nepal", codigo: "np" },
    ],
    continente: "Ásia",
    resumo: "Uma família pastoral que anuncia Jesus em meio à perseguição.",
    tags: ["Evangelismo", "Escola para crianças", "Corte e costura"],
    missionario: {
      nome: "Família pastoral",
      iniciais: "FP",
      funcao: "Família pastoral",
    },
    descricao: [
      "Temos uma família pastoral que tem anunciado Jesus Cristo em meio à perseguição.",
      "Desenvolve um importante papel social junto da comunidade, através de uma escola para crianças e de aulas de corte e costura.",
    ],
    acoes: ["Escola para crianças", "Corte e costura"],
    contactos: [
      { label: "Telefone (Brasil)", valor: "+55 62 9662-0865" },
      { label: "Telefone (Índia)", valor: "+91 72949 80040" },
    ],
    pedidosOracao: [
      "Proteção da família pastoral em meio à perseguição.",
      "Crescimento da escola para crianças e do trabalho de corte e costura.",
    ],
    fotos: [
      { src: "/missoes/india-nepal-1.jpg", alt: "Crianças na escola" },
    ],
  },
];