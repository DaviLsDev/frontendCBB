import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo">CBB Barcelos</Link>
      <div className="navbar-links">
        <Link href="/">Início</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/missoes">Missões</Link>
        <Link href="/contato">Contato</Link>
        <Link href="/localização">Localização</Link>
      </div>
      <Link href="/missoes" className="navbar-cta">Apoiar missões</Link>
    </nav>
  );
}