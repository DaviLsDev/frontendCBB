import Navbar from "../components/Navbar";

const missoes = [
  { pais: "Quênia", continente: "África", foco: "Evangelismo urbano e plantio de igrejas", href: "/missoes/quenia" },
  { pais: "Moçambique", continente: "África", foco: "Discipulado em comunidades rurais", href: "/missoes/mocambique" },
  { pais: "Etiópia", continente: "África", foco: "Missão entre povos não alcançados", href: "/missoes/etiopia" },
  { pais: "Índia", continente: "Ásia", foco: "Plantio de igrejas e ensino bíblico", href: "/missoes/india" },
  { pais: "Zimbábue", continente: "África", foco: "Evangelismo e plantio de igrejas", href: "/missoes/zimbabue" },
  { pais: "Paraguai", continente: "América do Sul", foco: "Missão urbana e discipulado", href: "/missoes/paraguai" },
];

export default function Missoes() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{background: "#0d1f3c", padding: "120px 0 80px"}}>
        <div className="container">
          <div className="section-line-light" />
          <h1 style={{fontSize: "52px", fontWeight: 700, color: "#fff", fontFamily: "Georgia, serif", lineHeight: 1.2, maxWidth: "600px"}}>
            Nossas missões
          </h1>
          <p style={{fontSize: "17px", color: "rgba(255,255,255,0.5)", marginTop: "20px", maxWidth: "480px", lineHeight: 1.8, fontFamily: "sans-serif"}}>
            A CBB apoia missionários em 6 países ao redor do mundo. Conheça cada campo e saiba como participar.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Campos missionários</h2>
          <div className="grid-3">
            {missoes.map((m) => (
              <a key={m.pais} href={m.href} className="card-missao-pais">
                <div style={{fontSize: "40px", marginBottom: "20px"}}>{m.flag}</div>
                <div style={{fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#999", marginBottom: "8px", fontFamily: "sans-serif"}}>
                  {m.continente}
                </div>
                <h3 style={{fontSize: "22px", fontWeight: 700, color: "#0d1f3c", fontFamily: "Georgia, serif", marginBottom: "10px"}}>
                  {m.pais}
                </h3>
                <p style={{fontSize: "13px", color: "#888", lineHeight: 1.7, fontFamily: "sans-serif", marginBottom: "24px"}}>
                  {m.foco}
                </p>
                <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                  <div style={{width: "20px", height: "2px", background: "#0d1f3c"}} />
                  <span style={{fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0d1f3c", fontFamily: "sans-serif"}}>
                    Ver missão
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMO AJUDAR */}
      <section className="section-gray">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Como apoiar as missões</h2>
          <div className="grid-4">
            {[
              { icon: "🙏", title: "Oração", text: "Interceda por cada missionário e campo missionário." },
              { icon: "💛", title: "Doação", text: "Contribua financeiramente de forma regular ou pontual." },
              { icon: "📢", title: "Divulgação", text: "Compartilhe o trabalho missionário da CBB." },
              { icon: "✈️", title: "Ir ao campo", text: "Participe de viagens missionárias de curto prazo." },
            ].map((item) => (
              <div key={item.title} className="card-participate">
                <div className="card-participate-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <a href="/contato">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">© 2025 CBB — Todos os direitos reservados</div>
      </footer>

    </main>
  );
}