import Navbar from "../components/Navbar";
import { pequenosGrupos } from "../data/pequenosGrupos";
import type { PequenoGrupo } from "../data/pequenosGrupos";

const tel = (v: string) => "tel:" + v.replace(/[^\d+]/g, "");
const whatsapp = (v: string) => "https://wa.me/" + v.replace(/\D/g, "");

const secoes = [
  { titulo: "Semanais", frequencia: "Semanal" },
  { titulo: "Quinzenais", frequencia: "Quinzenal" },
  { titulo: "Mensal", frequencia: "Mensal" },
] as const;

function Cartao({ g }: { g: PequenoGrupo }) {
  return (
    <details className="pg-card" name="pg">
      <summary>
        <div className="pg-horario">
          <span>{g.dia}</span>
          <strong>{g.hora}</strong>
        </div>
        <div className="pg-nome">
          <h3>{g.nome}</h3>
          {g.publico && <em>{g.publico}</em>}
        </div>
      </summary>

      <div className="pg-detalhe">
        <span className="pg-label">Líder</span>
        <p className="pg-lider">{g.lider.nome}</p>
        <p className="pg-tel">{g.lider.telefone}</p>
        <div className="pg-acoes">

        </div>
      </div>
    </details>
  );
}

export default function PequenosGrupos() {
  return (
    <main>
      <Navbar />


      <section className="page-hero">
        <div className="container">
          <div className="section-line-light" />
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Georgia, serif",
              lineHeight: 1.2,
            }}
          >
            Pequenos Grupos
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.6)",
              marginTop: "20px",
              maxWidth: "600px",
              lineHeight: 1.8,
              fontFamily: "sans-serif",
            }}
          >
            Estudos bíblicos e comunhão em casas e locais espalhados pela região.
            Encontre o grupo mais perto de si, clique para ver o líder e entre em
            contacto.
          </p>
        </div>
      </section>


      {secoes.map((s) => {
        const grupos = pequenosGrupos.filter((g) => g.frequencia === s.frequencia);
        if (grupos.length === 0) return null;
        return (
          <section key={s.frequencia} className="section-white" style={{ paddingBottom: 24 }}>
            <div className="container">
              <div className="section-line" />
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                {s.titulo}
              </h2>
              <div className="pg-lista">
                {grupos.map((g) => (
                  <Cartao key={g.slug} g={g} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div style={{ background: "#f7f7f7", height: 48 }} />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Comunidade Batista em Barcelos</div>
            <div className="footer-sub">Proclamando o evangelho a todas as nações</div>
          </div>
          <div className="footer-links">
            <a href="/">Início</a>
            <a href="/sobre">Sobre</a>
            <a href="/missoes">Missões</a>
            <a href="/pequenos-grupos">Pequenos Grupos</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 CBB — Todos os direitos reservados</div>
      </footer>
    </main>
  );
}