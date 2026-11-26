import Navbar from "../components/Navbar";

const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.104423841667!2d-8.616658976802809!3d41.541618651071474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24530024fb2d75%3A0x654f8150f2dea916!2sIgreja%20%7C%20Comunidade%20Batista%20em%20Barcelos%20%7C%20CBB!5e0!3m2!1spt-PT!2spt!4v1779209156984!5m2!1spt-PT!2spt";

const contactos = [
  { label: "Telefone", valor: "+351 000 000 000", href: "tel:+351000000000" },
  { label: "E-mail", valor: "email@exemplo.com", href: "mailto:email@exemplo.com" },
  { label: "Instagram", valor: "@comunidadebatistaembarcelos", href: "https://www.instagram.com/comunidadebatistaembarcelos/" },
];

export default function Contato() {
  return (
    <main>
      <Navbar />


     <section className="page-hero">
        <div className="container">
          <div className="section-line-light" />
          <h1 style={{ fontSize: "52px", fontWeight: 700, color: "#fff", fontFamily: "Georgia, serif", lineHeight: 1.2 }}>
            Fale connosco
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", marginTop: "20px", maxWidth: "560px", lineHeight: 1.8, fontFamily: "sans-serif" }}>
            Ficaremos muito felizes em receber a si e à sua família. Visite-nos ou entre em contacto.
          </p>
        </div>
      </section>


      <section className="section-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="section-line" />
              <h2 className="section-title" style={{ marginBottom: "32px" }}>Como nos encontrar</h2>

              <div className="contato-bloco">
                <span>Endereço</span>
                <p>
                  Rua Couto de Manhente, nº 1155
                  <br />
                  Manhente, 4750-734 Barcelos
                </p>
              </div>

              <div className="contato-bloco">
                <span>Cultos</span>
                <p>
                  Domingos às 10:30 e às 18:30
                  <br />
                  Quartas-feiras às 20:00
                </p>
              </div>

              {contactos.map((c) => (
                <div key={c.label} className="contato-bloco">
                  <span>{c.label}</span>
                  <p>
                    <a href={c.href}>{c.valor}</a>
                  </p>
                </div>
              ))}
            </div>

            <div className="map-container">
              <iframe
                src={mapEmbed}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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