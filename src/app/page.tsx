import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

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

      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Como participar</h2>
          <div className="grid-4">
            {[
              { title: "Oração", text: "Interceda pelos nossos missionários e campos." },
              { title: "Doação", text: "Contribua financeiramente com as missões." },
              { title: "Divulgação", text: "Compartilhe o trabalho missionário." },
              { title: "Ir ao campo", text: "Participe de viagens missionárias." },
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


      <section className="section-gray" id="onde-encontrar">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Onde nos Encontrar</h2>

          <div className="grid-2">
            <div className="section-body-text">
              <p><strong>Endereço:</strong><br />
              Rua Couto de Manhente, nº 1155<br />
              Manhente- 4750-734 — Barcelos</p>

              <p><strong>Nossos Cultos:</strong><br />
              Domingos às 10:30h e 18:30<br />
              Quartas-feiras às 20h</p>

              <p>Venha fazer-nos uma visita! Ficaremos muito felizes em receber você e a sua família.</p>
            </div>

           <div className="map-container">

             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.104423841667!2d-8.616658976802809!3d41.541618651071474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24530024fb2d75%3A0x654f8150f2dea916!2sIgreja%20%7C%20Comunidade%20Batista%20em%20Barcelos%20%7C%20CBB!5e0!3m2!1spt-PT!2spt!4v1779209156984!5m2!1spt-PT!2spt"
               style={{ border: 0 }}
               allowFullScreen={true}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             >
             </iframe>
           </div>
          </div>
        </div>
      </section>

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
        <div className="footer-bottom">© 2026 CBB — Todos os direitos reservados</div>
      </footer>

    </main>
  );
}