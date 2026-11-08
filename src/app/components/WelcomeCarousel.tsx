"use client";

import { useState, useEffect } from "react";

interface Slide {
  title: string;
  paragraphs: string[];
  link: { href: string; label: string };
  image: { src: string; alt: string } | null;
}

const slides: Slide[] = [
  {
    title: "Bem-vindo à Comunidade Batista em Barcelos",
    paragraphs: [
      "Somos uma comunidade de fé comprometida com o evangelho, com as missões e com as pessoas. Acreditamos que a fé se vive em comunidade.",
      "Enviamos missionários ao mundo, crendo que cada vida transformada é parte do plano de Deus para as nações.",
    ],
    link: { href: "/sobre", label: "Nossa história →" },
    image: null,
  },
  {
    title: "Cultos e Comunhão",
    paragraphs: [
      "Reunimo-nos para adorar, aprender e crescer juntos na fé, em um ambiente acolhedor para todas as idades.",
      "Cada culto é uma oportunidade de renovação espiritual e conexão com a comunidade.",
    ],
    link: { href: "/sobre#cultos", label: "Nossos horários →" },
    image: null,
  },
  {
    title: "Missões ao Redor do Mundo",
    paragraphs: [
      "Apoiamos e enviamos missionários para levar a mensagem do evangelho a diferentes nações.",
      "Acreditamos no poder transformador da fé compartilhada além-fronteiras.",
    ],
    link: { href: "/missoes", label: "Conheça nossas missões →" },
    image: null,
  },
];

export default function WelcomeCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="inicio" className="section-white welcome-carousel">
      <div className="container">
        <div className="welcome-carousel-wrapper">
          <div className="welcome-carousel-viewport">
            <div
              className="welcome-carousel-track"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${(current * 100) / slides.length}%)`,
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="grid-2 welcome-carousel-slide"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <div className="section-body-text">
                    <div className="section-line" />
                    <h2 className="section-title" style={{ marginBottom: "24px" }}>
                      {slide.title}
                    </h2>
                    {slide.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    <a href={slide.link.href} className="btn-dark-outline">
                      {slide.link.label}
                    </a>
                  </div>

                  <div className="photo-placeholder">
                    {slide.image ? (
                      <img
                        src={slide.image.src}
                        alt={slide.image.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <>
                        <span style={{ fontSize: "40px", color: "#ddd" }}>✝</span>
                        <span>Foto da equipe / pastor</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Slide anterior"
            className="welcome-carousel-arrow welcome-carousel-arrow-left"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo slide"
            className="welcome-carousel-arrow welcome-carousel-arrow-right"
          >
            ›
          </button>
        </div>

        <div className="welcome-carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`welcome-carousel-dot ${i === current ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}