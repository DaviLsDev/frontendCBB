import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { missoes } from "../../data/missoes";

export function generateStaticParams() {
  return missoes.map((m) => ({ slug: m.slug }));
}

const tel = (v: string) => "tel:" + v.replace(/[^\d+]/g, "");

export default async function MissaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const missao = missoes.find((m) => m.slug === slug);
  if (!missao) notFound();

  return (
    <main>
      <Navbar />


      <section className="page-hero">
        <div className="container">
          <a href="/missoes" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontFamily: "sans-serif" }}>
            ← Todas as missões
          </a>
          <div style={{ display: "flex", gap: "10px", margin: "28px 0 16px" }}>
            {missao.paises.map((p) => (
              <img
                key={p.codigo}
                src={`https://flagcdn.com/w80/${p.codigo}.png`}
                alt={p.nome}
                width={52}
                style={{ borderRadius: "4px" }}
              />
            ))}
          </div>
          <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", fontFamily: "sans-serif", marginBottom: "6px" }}>
            {missao.continente}{missao.local ? ` · ${missao.local}` : ""}
          </div>
          <h1 style={{ fontSize: "48px", color: "#fff", fontFamily: "Georgia, serif", marginBottom: "20px" }}>
            {missao.titulo}
          </h1>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {missao.tags.map((tag) => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)", fontSize: "11px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px", fontFamily: "sans-serif" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A MISSÃO */}
      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Sobre a missão</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#0d1f3c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700, fontFamily: "Georgia, serif", flexShrink: 0 }}>
              {missao.missionario.iniciais}
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#0d1f3c", fontFamily: "Georgia, serif" }}>
                {missao.missionario.nome}
              </div>
              <div style={{ fontSize: "12px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "sans-serif" }}>
                {missao.missionario.funcao}
              </div>
            </div>
          </div>

          {missao.descricao.map((p, i) => (
            <p key={i} style={{ fontSize: "16px", color: "#777", lineHeight: 1.85, fontFamily: "sans-serif", maxWidth: "720px", marginBottom: "14px" }}>
              {p}
            </p>
          ))}

          <h3 style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#0d1f3c", fontFamily: "sans-serif", margin: "32px 0 14px" }}>
            O que fazemos
          </h3>
          <ul style={{ paddingLeft: "20px", maxWidth: "720px" }}>
            {missao.acoes.map((a) => (
              <li key={a} style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, marginBottom: "6px", fontFamily: "sans-serif" }}>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOTOS */}
      {missao.fotos && missao.fotos.length > 0 && (
        <section className="section-gray">
          <div className="container">
            <div className="section-line" />
            <h2 className="section-title">Galeria</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {missao.fotos.map((f) => (
                <img
                  key={f.src}
                  src={f.src}
                  alt={f.alt}
                  style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "12px" }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PEDIDOS DE ORAÇÃO */}
      {missao.pedidosOracao && missao.pedidosOracao.length > 0 && (
        <section className="section-white">
          <div className="container">
            <div className="section-line" />
            <h2 className="section-title">Pedidos de oração</h2>
            <ul style={{ maxWidth: "720px", paddingLeft: "20px" }}>
              {missao.pedidosOracao.map((p, i) => (
                <li key={i} style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, marginBottom: "12px", fontFamily: "sans-serif" }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CONTACTO */}
      <section className="section-gray">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Contacto</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "480px" }}>
            {missao.contactos.map((c) => (
              <a key={c.valor} href={tel(c.valor)} style={{ background: "#fff", borderRadius: "10px", padding: "16px 20px", textDecoration: "none" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif" }}>
                  {c.label}
                </div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#0d1f3c", fontFamily: "sans-serif" }}>
                  {c.valor}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COMO CONTRIBUIR */}
      <section className="section-white">
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="section-line" />
          <h2 className="section-title">Como contribuir</h2>
          <p style={{ fontSize: "16px", color: "#777", lineHeight: 1.85, fontFamily: "sans-serif", marginBottom: "24px" }}>
            Os três pilares do evangelismo são orar, enviar recursos e ir. Para contribuir com esta missão, fale com a liderança da CBB ou contacte diretamente o responsável pelo campo.
          </p>

          {missao.banco && (
            <div style={{ background: "#f7f7f7", borderRadius: "12px", padding: "28px", marginBottom: "16px" }}>
              {missao.banco.map((d) => (
                <div key={d.k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #eee" }}>
                  <span style={{ fontSize: "13px", color: "#999", fontFamily: "sans-serif" }}>{d.k}</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#0d1f3c", fontFamily: "sans-serif" }}>{d.v}</span>
                </div>
              ))}
            </div>
          )}

          {missao.pix && (
            <div style={{ background: "#0d1f3c", borderRadius: "12px", padding: "24px", textAlign: "center", marginBottom: "16px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}>
                Chave PIX
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", fontFamily: "sans-serif" }}>
                {missao.pix}
              </div>
            </div>
          )}

          <a href="/contato" className="btn-dark-outline">Fale com a CBB →</a>
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