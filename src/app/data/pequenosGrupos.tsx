export type PequenoGrupo = {
  slug: string;
  nome: string;
  publico?: string;
  frequencia: "Semanal" | "Quinzenal" | "Mensal";
  dia: string;
  hora: string;
  lider: { nome: string; telefone: string };
};

export const pequenosGrupos: PequenoGrupo[] = [
  {
    slug: "arcozelo",
    nome: "Arcozelo",
    frequencia: "Semanal",
    dia: "Quinta",
    hora: "20:30",
    lider: { nome: "Nome do líder", telefone: "+351 000 000 000" },
  },
  {
    slug: "uni",
    nome: "UNI",
    publico: "Adolescentes",
    frequencia: "Semanal",
    dia: "Sábado",
    hora: "18:00",
    lider: { nome: "Nome do líder", telefone: "+351 000 000 000" },
  },
  {
    slug: "varzea",
    nome: "Várzea",
    frequencia: "Quinzenal",
    dia: "Sábado",
    hora: "18:30",
    lider: { nome: "Nome do líder", telefone: "+351 000 000 000" },
  },
  {
    slug: "galegos-santa-maria",
    nome: "Galegos Santa Maria",
    frequencia: "Quinzenal",
    dia: "Sábado",
    hora: "18:30",
    lider: { nome: "Nome do líder", telefone: "+351 000 000 000" },
  },
  {
    slug: "relevantes",
    nome: "Relevantes",
    publico: "Jovens",
    frequencia: "Quinzenal",
    dia: "Sábado",
    hora: "19:00",
    lider: { nome: "Nome do líder", telefone: "+351 000 000 000" },
  },
  {
    slug: "aliancados",
    nome: "Aliançados",
    publico: "Casais",
    frequencia: "Mensal",
    dia: "Sábado",
    hora: "19:00",
    lider: { nome: "Nome do líder", telefone: "+351 000 000 000" },
  },
];