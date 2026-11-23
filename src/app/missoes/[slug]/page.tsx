import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import { missoes } from "../../data/missoes";

export function generateStaticParams() {
  return missoes.map((m) => ({ slug: m.slug }));
}

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

      <section style={{ background: "#0d1f3c", padding: "120px 0 60px" }}>
        <div className="container">
          <a href="/missoes" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: "sans-serif" }}>
            ← Todas as missões
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "24px 0 16px" }}>
            <span style={{ fontSize: "48px" }}>{missao.flag}</span>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}>
                {missao.continente}
              </div>
              <h1 style={{ fontSize: "48px", color: "#fff", fontFamily: "Georgia, serif" }}>{missao.pais}</h1>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {missao.tags.map((tag) => (
              <span key={tag} style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", fontSize: "11px", fontWeight: 700, padding: "4px 14px", borderRadius: "20px", fontFamily: "sans-serif" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Missionário</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#0d1f3c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 700, fontFamily: "Georgia, serif" }}>
              {missao.missionario.iniciais}
            </div>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 700, color: "#0d1f3c", fontFamily: "Georgia, serif" }}>{missao.missionario.nome}</div>
              <div style={{ fontSize: "12px", color: "#999", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "sans-serif" }}>{missao.missionario.funcao}</div>
            </div>
          </div>
          <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.8, fontFamily: "sans-serif", maxWidth: "680px" }}>
            {missao.missionario.descricao}
          </p>
        </div>
      </section>

      <section className="section-gray">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Pedidos de oração</h2>
          <ul style={{ maxWidth: "680px", paddingLeft: "20px" }}>
            {missao.pedidosOracao.map((p, i) => (
              <li key={i} style={{ fontSize: "15px", color: "#666", lineHeight: 1.7, marginBottom: "12px", fontFamily: "sans-serif" }}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="section-line" />
          <h2 className="section-title">Contacto</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "480px" }}>
            {missao.contactos.map((c) => (
              <div key={c.label} style={{ background: "#f7f7f7", borderRadius: "10px", padding: "16px 20px" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif" }}>{c.label}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#0d1f3c", fontFamily: "sans-serif" }}>{c.valor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gray">
        <div className="container" style={{ maxWidth: "680px" }}>
          <div className="section-line" />
          <h2 className="section-title">Como contribuir</h2>
          <div style={{ background: "#fff", borderRadius: "12px", padding: "28px", marginBottom: "16px" }}>
            {missao.banco.map((d) => (
              <div key={d.k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #eee" }}>
                <span style={{ fontSize: "13px", color: "#999", fontFamily: "sans-serif" }}>{d.k}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#0d1f3c", fontFamily: "sans-serif" }}>{d.v}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#0d1f3c", borderRadius: "12px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}>Chave PIX</div>
            <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff", fontFamily: "sans-serif" }}>{missao.pix}</div>
          </div>
        </div>
      </section>
    </main>
  );
}