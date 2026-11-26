import Navbar from "../components/Navbar";
import { missoes } from "../data/missoes";

export default function Missoes() {
  return (
    <main>
      <Navbar />

      <section className="page-hero">
        <div className="container">
          <div className="section-line-light" />
          <h1 style={{ fontSize: "52px", fontWeight: 700, color: "#fff", fontFamily: "Georgia, serif", lineHeight: 1.2 }}>
            Missões CBB
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", marginTop: "20px", maxWidth: "680px", lineHeight: 1.8, fontFamily: "sans-serif" }}>
            Temos no nosso DNA fome por missões, em obediência à ordem dada pelo nosso Senhor e Salvador Jesus Cristo: “E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura” (Marcos 16.15).
          </p>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", marginTop: "12px", maxWidth: "680px", lineHeight: 1.8, fontFamily: "sans-serif" }}>
            Entendemos que a igreja tem o papel de anunciar o evangelho da reconciliação através de Jesus Cristo. E não só anuncia, como também cuida daqueles que vêm até nós.
          </p>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Campos missionários</h2>
          <div className="grid-2">
            {missoes.map((m) => (
              <a key={m.slug} href={`/missoes/${m.slug}`} className="card-missao-pais">
                <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                  {m.paises.map((p) => (
                    <img
                      key={p.codigo}
                      src={`https://flagcdn.com/w80/${p.codigo}.png`}
                      alt={p.nome}
                      width={44}
                      style={{ borderRadius: "4px", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#999", marginBottom: "8px", fontFamily: "sans-serif" }}>
                  {m.continente}{m.local ? ` · ${m.local}` : ""}
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#0d1f3c", fontFamily: "Georgia, serif", marginBottom: "10px" }}>
                  {m.titulo}
                </h3>
                <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.7, fontFamily: "sans-serif", marginBottom: "24px" }}>
                  {m.resumo}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "20px", height: "2px", background: "#0d1f3c" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0d1f3c", fontFamily: "sans-serif" }}>
                    Ver missão
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Os três pilares do evangelismo</h2>
          <div className="grid-3">
            {[
              { title: "Orar", text: "Interceder por cada missionário e por cada campo." },
              { title: "Enviar recursos", text: "Contribuir para que o trabalho possa continuar." },
              { title: "Ir", text: "Levar o evangelho, vivido por inteiro, a todos os lugares." },
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