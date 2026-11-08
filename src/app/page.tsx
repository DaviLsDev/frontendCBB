"use client";
import Navbar from "./components/Navbar";
import WelcomeCarousel from "./components/WelcomeCarousel";
import { useState } from "react";


const sedes = [
  {
    id: "barcelos",
    nome: "CBB Barcelos (Sede)",
    endereco: "Rua Couto de Manhente, nº 1155, Manhente — 4750-734 Barcelos",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.104423841667!2d-8.616658976802809!3d41.541618651071474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24530024fb2d75%3A0x654f8150f2dea916!2sIgreja%20%7C%20Comunidade%20Batista%20em%20Barcelos%20%7C%20CBB!5e0!3m2!1spt-PT!2spt!4v1779209156984!5m2!1spt-PT!2spt",
  },
  {
    id: "esposende",
    nome: "CBB Esposende",
    endereco: "Rua Exemplo, nº 100, Esposende",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=...COLOCA_AQUI_O_EMBED_DE_ESPOSENDE...",
  },
  // adiciona mais sedes aqui, seguindo o mesmo formato
];
export default function Home() {

  const [sedesModalOpen, setSedesModalOpen] = useState(false);
const [sedeAtiva, setSedeAtiva] = useState(sedes[0].id);

const sedeSelecionada = sedes.find((s) => s.id === sedeAtiva) ?? sedes[0];
  return (
    <main>
      <Navbar />

      <section className="hero">
    <div className="hero-inner">
      <div className="hero-line" />
        <h1>Uma igreja com história, fé e propósito</h1>
        <p>Há gerações a viver o evangelho em comunidade, em Barcelos e para além dele. Conheça a nossa história e o que nos move.</p>
        <div className="hero-btns">
          <a href="/sobre" className="btn-white">Conheça a nossa história</a>
          <a href="#inicio" className="btn-outline">Explorar a página ↓</a>
      </div>
    </div>
</section>

      <WelcomeCarousel />

   <section className="identidade-section">
        <div className="identidade-band" />

        <div className="identidade-wrap">
          <div className="identidade-photo-wrap">
            <img src="/pastor-identidade.png" alt="Pastor" className="identidade-photo-img" />
          </div>

          <div className="identidade-card">
            <span className="identidade-eyebrow">Quem somos</span>
            <h2 className="identidade-title">Identidade</h2>

            {[
              { title: "Missão", text: "Proclamar o evangelho de Cristo a todas as nações, discipulando e servindo com amor." },
              { title: "Visão", text: "Ser uma comunidade que influencia Barcelos e envia missionários ao mundo." },
              { title: "Valores", text: "Palavra, oração, comunidade, missões e generosidade como estilo de vida." },
            ].map((item) => (
              <div key={item.title} className="identidade-item">
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

        {/* NOVO botão */}
        <button
          className="btn-dark-outline"
          onClick={() => setSedesModalOpen(true)}
        >
          Ver outras sedes
        </button>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11945.104423841667!2d-8.616658976802809!3d41.541618651071474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24530024fb2d75%3A0x654f8150f2dea916!2sIgreja%20%7C%20Comunidade%20Batista%20em%20Barcelos%20%7C%20CBB!5e0!3m2!1spt-PT!2spt!4v1779209156984!5m2!1spt-PT!2spt"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>

  {/* NOVO modal */}
  {sedesModalOpen && (
    <div
      className="sedes-modal-overlay"
      onClick={() => setSedesModalOpen(false)}
    >
      <div className="sedes-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="sedes-modal-close"
          onClick={() => setSedesModalOpen(false)}
          aria-label="Fechar"
        >
          ×
        </button>

        <h3 className="sedes-modal-title">As nossas sedes</h3>

        <div className="sedes-modal-grid">
          <div className="sedes-list">
            {sedes.map((sede) => (
              <div
                key={sede.id}
                className={`sedes-item ${sede.id === sedeAtiva ? "active" : ""}`}
                onMouseEnter={() => setSedeAtiva(sede.id)}
                onClick={() => setSedeAtiva(sede.id)}
              >
                <h4>{sede.nome}</h4>
                <p>{sede.endereco}</p>
              </div>
            ))}
          </div>

          <div className="sedes-map-preview">
            <iframe
              key={sedeSelecionada.id}
              src={sedeSelecionada.mapEmbed}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )}
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