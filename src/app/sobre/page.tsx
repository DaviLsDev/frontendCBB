import Navbar from "../components/Navbar";

const sobreIgreja = [
  {
    pergunta: "O que é a CBB?",
    resposta:
      "É uma comunidade que professa a fé em Jesus Cristo como único e suficiente Salvador.",
  },
  {
    pergunta: "Qual é a história da criação da igreja?",
    resposta:
      "Entendemos que foi um despertar de Deus no coração dos irmãos o desejo de voltar ao modelo bíblico: uma igreja missionária, que cumpre o Ide do Senhor, descrito em Marcos 16.15: “E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura”.",
  },
  {
    pergunta: "Por que motivo a CBB foi fundada?",
    resposta:
      "Entendemos que o evangelho afeta o ser humano por completo. Por isso, precisamos não só de ser conhecidos por Deus, mas também reconhecidos pelas autoridades aqui instituídas, tendo como fundamento a Palavra de Deus.",
  },
];

const identidade = [
  {
    titulo: "Missão",
    texto:
      "Somos uma igreja missionária e buscamos cumprir a ordem dada pelo nosso Senhor Jesus em Marcos 16.15: “E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura”.",
  },
  {
    titulo: "Visão",
    texto:
      "Demonstrar o poder transformador do evangelho, levando as pessoas a terem um relacionamento íntimo com Deus, e que essa mudança se reflita no próximo. Tiago 2.18: “Mas dirá alguém: Tu tens a fé, e eu tenho as obras; mostra-me a tua fé sem as tuas obras, e eu te mostrarei a minha fé pelas minhas obras”.",
  },
  {
    titulo: "Propósito",
    texto: "Ser uma igreja simples, cristocêntrica e renovada.",
  },
];

const perguntasMissoes = [
  {
    pergunta: "Como funcionam os campos missionários?",
    resposta:
      "Todo cristão genuíno deve ser um missionário e, por isso, devemos anunciar a Palavra de Deus em todos os lugares. O evangelho deve ser vivido por completo, por isso deve impactar também socialmente os locais onde é anunciado, ajudando a comunidade com projetos humanitários que se adaptam a cada região e necessidade local.",
  },
  {
    pergunta: "Como e com o que a CBB ajuda esses lugares?",
    resposta:
      "Os três pilares do evangelismo são orar, enviar recursos e ir. Por isso, praticamos esses três pilares.",
  },
  {
    pergunta: "Quando e onde surgiu o desejo de ajudar em missões?",
    resposta:
      "A partir do momento em que somos envolvidos pela graça de Deus e experimentamos a sua bondade transformadora, não há como guardar isso só para nós. Devemos mostrar ao mundo o amor de Deus em Cristo Jesus, através das obras e da pregação do evangelho.",
  },
];

export default function Sobre() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "#0d1f3c", padding: "120px 0 80px" }}>
        <div className="container">
          <div className="section-line-light" />
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Georgia, serif",
              lineHeight: 1.2,
              maxWidth: "640px",
            }}
          >
            Sobre a CBB
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.55)",
              marginTop: "20px",
              maxWidth: "520px",
              lineHeight: 1.8,
              fontFamily: "sans-serif",
            }}
          >
            Conheça a Comunidade Batista em Barcelos: quem somos, como
            nascemos e o que nos move.
          </p>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Quem somos</h2>
          <div className="faq-lista">
            {sobreIgreja.map((item, i) => (
              <details key={item.pergunta} className="faq-item" open={i === 0}>
                <summary>{item.pergunta}</summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E PROPÓSITO */}
      <section className="section-gray">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Missão, visão e propósito</h2>
          <div className="grid-3">
            {identidade.map((item) => (
              <div key={item.titulo} className="card-identity">
                <div className="card-identity-line" />
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERSÍCULO EM DESTAQUE */}
      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-line-light" style={{ margin: "0 auto 24px" }} />
          <p
            style={{
              fontSize: "28px",
              color: "#fff",
              fontFamily: "Georgia, serif",
              lineHeight: 1.5,
              maxWidth: "760px",
              margin: "0 auto 16px",
            }}
          >
            “E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda
            criatura.”
          </p>
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#c9a24a",
              fontFamily: "sans-serif",
              fontWeight: 700,
            }}
          >
            Marcos 16.15
          </span>
        </div>
      </section>

      {/* MISSÕES */}
      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Perguntas sobre missões</h2>
          <div className="faq-lista">
            {perguntasMissoes.map((item) => (
              <details key={item.pergunta} className="faq-item">
                <summary>{item.pergunta}</summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
          <a
            href="/missoes"
            className="btn-dark-outline"
            style={{ marginTop: "40px" }}
          >
            Conheça os nossos campos →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Comunidade Batista em Barcelos</div>
            <div className="footer-sub">
              Proclamando o evangelho a todas as nações
            </div>
          </div>
          <div className="footer-links">
            <a href="/">Início</a>
            <a href="/sobre">Sobre</a>
            <a href="/missoes">Missões</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 CBB — Todos os direitos reservados
        </div>
      </footer>
    </main>
  );
}