import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-line" />
          <h1>Uma comunidade com propósito missionário</h1>
          <p>Conheça nossa missão, nossos missionários e como fazer parte desse chamado ao redor do mundo.</p>
          <div className="hero-btns">
            <a href="/missoes" className="btn-white">Ver nossas missões</a>
            <a href="/sobre" className="btn-outline">Quem somos</a>
          </div>
        </div>
      </section>

      {/* BEM-VINDO */}
      <section className="section-white">
        <div className="container">
          <div className="grid-2">
            <div className="section-body-text">
              <div className="section-line" />
              <h2 className="section-title" style={{marginBottom: "24px"}}>Bem-vindo à Comunidade Batista em Barcelos</h2>
              <p>Somos uma comunidade de fé comprometida com o evangelho, com as missões e com as pessoas. Acreditamos que a fé se vive em comunidade.</p>
              <p>Enviamos missionários ao mundo, crendo que cada vida transformada é parte do plano de Deus para as nações.</p>
              <a href="/sobre" className="btn-dark-outline">Nossa história →</a>
            </div>
            <div className="photo-placeholder">
              <span style={{fontSize: "40px", color: "#ddd"}}>✝</span>
              <span>Foto da equipe / pastor</span>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIDADE */}
      <section className="section-gray">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Identidade</h2>
          <div className="grid-3">
            {[
              { title: "Missão", text: "Proclamar o evangelho de Cristo a todas as nações, discipulando e servindo com amor." },
              { title: "Visão", text: "Ser uma comunidade que influencia Barcelos e envia missionários ao mundo." },
              { title: "Valores", text: "Palavra, oração, comunidade, missões e generosidade como estilo de vida." },
            ].map((item) => (
              <div key={item.title} className="card-identity">
                <div className="card-identity-line" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÕES */}
      <section className="section-dark">
        <div className="container">
          <div className="missions-header">
            <div>
              <div className="section-line-light" />
              <h2 className="section-title-light">Nossas missões</h2>
            </div>
            <a href="/missoes">Ver todas →</a>
          </div>
          <div className="grid-3">
            {[
              { flag: "🇿🇼", pais: "Zimbábue", desc: "África · Evangelismo e plantio de igrejas", href: "/missoes/zimbabue" },
              { flag: "🇲🇿", pais: "Moçambique", desc: "África · Discipulado em comunidades rurais", href: "/missoes/mocambique" },
              { flag: "🇵🇾", pais: "Paraguai", desc: "América do Sul · Missão urbana", href: "/missoes/paraguai" },
            ].map((m) => (
              <a key={m.pais} href={m.href} className="card-mission">
                <div className="card-mission-flag">{m.flag}</div>
                <h3>{m.pais}</h3>
                <p>{m.desc}</p>
                <div className="card-mission-bar" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMO PARTICIPAR */}
      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Como participar</h2>
          <div className="grid-4">
            {[
              { icon: "🙏", title: "Oração", text: "Interceda pelos nossos missionários e campos." },
              { icon: "💛", title: "Doação", text: "Contribua financeiramente com as missões." },
              { icon: "📢", title: "Divulgação", text: "Compartilhe o trabalho missionário." },
              { icon: "✈️", title: "Ir ao campo", text: "Participe de viagens missionárias." },
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