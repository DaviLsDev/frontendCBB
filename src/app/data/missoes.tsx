export type Missao = {
  slug: string;
  flag: string;
  pais: string;
  continente: string;
  tags: string[];
  missionario: {
    nome: string;
    iniciais: string;
    funcao: string;
    descricao: string;
  };
  contactos: { label: string; valor: string }[];
  pedidosOracao: string[];
  banco: { k: string; v: string }[];
  pix: string;
};

export const missoes: Missao[] = [
  {
    slug: "quenia",
    pais: "Quênia",
    continente: "África",
    tags: ["Evangelismo urbano", "Plantio de igrejas"],
    missionario: {
      nome: "Nome do Missionário",
      iniciais: "NM",
      funcao: "Missionário residente, Nairóbi",
      descricao: "Descrição do trabalho missionário no Quênia.",
    },
    contactos: [
      { label: "WhatsApp", valor: "+00 000 000 000" },
      { label: "E-mail", valor: "email@exemplo.com" },
    ],
    pedidosOracao: ["Pedido de oração 1", "Pedido de oração 2"],
    banco: [
      { k: "Banco", v: "Nome do banco" },
      { k: "IBAN", v: "PT50 0000 0000 0000 0000 0000 0" },
      { k: "Titular", v: "Nome do titular" },
    ],
    pix: "chave-pix@exemplo.com",
  },
  {
    slug: "mocambique",
    pais: "Moçambique",
    continente: "África",
    tags: ["Discipulado", "Comunidades rurais"],
    missionario: {
      nome: "Nome do Missionário",
      iniciais: "NM",
      funcao: "Missionário residente, Maputo",
      descricao: "Descrição do trabalho missionário em Moçambique.",
    },
    contactos: [
      { label: "WhatsApp", valor: "+00 000 000 000" },
      { label: "E-mail", valor: "email@exemplo.com" },
    ],
    pedidosOracao: ["Pedido de oração 1", "Pedido de oração 2"],
    banco: [
      { k: "Banco", v: "Nome do banco" },
      { k: "IBAN", v: "PT50 0000 0000 0000 0000 0000 0" },
      { k: "Titular", v: "Nome do titular" },
    ],
    pix: "chave-pix@exemplo.com",
  },
  {
    slug: "etiopia",
    pais: "Etiópia",
    continente: "África",
    tags: ["Povos não alcançados", "Evangelismo"],
    missionario: {
      nome: "Nome do Missionário",
      iniciais: "NM",
      funcao: "Missionário residente, Adis Abeba",
      descricao: "Descrição do trabalho missionário na Etiópia.",
    },
    contactos: [
      { label: "WhatsApp", valor: "+00 000 000 000" },
      { label: "E-mail", valor: "email@exemplo.com" },
    ],
    pedidosOracao: ["Pedido de oração 1", "Pedido de oração 2"],
    banco: [
      { k: "Banco", v: "Nome do banco" },
      { k: "IBAN", v: "PT50 0000 0000 0000 0000 0000 0" },
      { k: "Titular", v: "Nome do titular" },
    ],
    pix: "chave-pix@exemplo.com",
  },
  {
    slug: "india",
    pais: "Índia",
    continente: "Ásia",
    tags: ["Plantio de igrejas", "Ensino bíblico"],
    missionario: {
      nome: "Nome do Missionário",
      iniciais: "NM",
      funcao: "Missionário residente, Índia",
      descricao: "Descrição do trabalho missionário na Índia.",
    },
    contactos: [
      { label: "WhatsApp", valor: "+00 000 000 000" },
      { label: "E-mail", valor: "email@exemplo.com" },
    ],
    pedidosOracao: ["Pedido de oração 1", "Pedido de oração 2"],
    banco: [
      { k: "Banco", v: "Nome do banco" },
      { k: "IBAN", v: "PT50 0000 0000 0000 0000 0000 0" },
      { k: "Titular", v: "Nome do titular" },
    ],
    pix: "chave-pix@exemplo.com",
  },
  {
    slug: "zimbabue",
    pais: "Zimbábue",
    continente: "África",
    tags: ["Evangelismo", "Plantio de igrejas", "Discipulado"],
    missionario: {
      nome: "Nome do Missionário",
      iniciais: "NM",
      funcao: "Missionário residente, Harare",
      descricao: "Descrição do trabalho missionário no Zimbábue.",
    },
    contactos: [
      { label: "WhatsApp", valor: "+00 000 000 000" },
      { label: "E-mail", valor: "email@exemplo.com" },
    ],
    pedidosOracao: ["Pedido de oração 1", "Pedido de oração 2"],
    banco: [
      { k: "Banco", v: "Nome do banco" },
      { k: "IBAN", v: "PT50 0000 0000 0000 0000 0000 0" },
      { k: "Titular", v: "Nome do titular" },
    ],
    pix: "chave-pix@exemplo.com",
  },
  {
    slug: "paraguai",
    pais: "Paraguai",
    continente: "América do Sul",
    tags: ["Missão urbana", "Discipulado"],
    missionario: {
      nome: "Nome do Missionário",
      iniciais: "NM",
      funcao: "Missionário residente, Assunção",
      descricao: "Descrição do trabalho missionário no Paraguai.",
    },
    contactos: [
      { label: "WhatsApp", valor: "+00 000 000 000" },
      { label: "E-mail", valor: "email@exemplo.com" },
    ],
    pedidosOracao: ["Pedido de oração 1", "Pedido de oração 2"],
    banco: [
      { k: "Banco", v: "Nome do banco" },
      { k: "IBAN", v: "PT50 0000 0000 0000 0000 0000 0" },
      { k: "Titular", v: "Nome do titular" },
    ],
    pix: "chave-pix@exemplo.com",
  },
];