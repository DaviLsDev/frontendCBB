
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/missoes", label: "Missões" },
  { href: "/pequenos-grupos", label: "Pequenos Grupos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">

      <Link href="/" className="navbar-logo">
        {/* MANTENHA AQUI O SVG ORIGINAL DA SUA LOGO */}
      </Link>

      <button
        className="navbar-mobile-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-navigation"
      >
        <span>⋮</span>
      </button>

      <div
        id="navbar-navigation"
        className={`navbar-right ${menuOpen ? "menu-open" : ""}`}
      >
        <div className="navbar-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? "navbar-link active"
                  : "navbar-link"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/missoes"
          className="navbar-cta"
          onClick={() => setMenuOpen(false)}
        >
          Apoiar missões
        </Link>
      </div>
    </nav>
  );
}
