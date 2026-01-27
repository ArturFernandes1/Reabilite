import React, { useEffect, useRef } from "react";
import "./ServicesSection.scss";

import solidao from "../assets/icons/icon_solidao.png";
import ansiedade from "../assets/icons/icon_ansiedade1.png";
import confusao from "../assets/icons/icon_confusaomental.png";
import desvalorizacao from "../assets/icons/icon_desvalori.png";
import emocional from "../assets/icons/icon_emocional.png";
import crises from "../assets/icons/icon_crises.png";

const services = [
  {
    title: "Ansiedade",
    text: "Preocupações excessivas, insônia, taquicardia e sensação constante de alerta.",
    image: ansiedade,
  },
  {
    title: "Esgotamento emocional",
    text: "Cansaço extremo, falta de motivação e vontade de se isolar das pessoas.",
    image: emocional,
  },
  {
    title: "Desvalorização",
    text: "Baixa autoestima, autocrítica intensa ou sensação de ser um peso para os outros.",
    image: desvalorizacao,
  },
  {
    title: "Solidão",
    text: "Mesmo cercado de pessoas, sente que ninguém entende o que você está passando.",
    image: solidao,
  },
  {
    title: "Confusão mental",
    text: "Dificuldade de concentração, pensamentos acelerados ou sensação de mente embaralhada.",
    image: confusao,
  },
  {
    title: "Crises emocionais",
    text: "Explosões de choro, irritabilidade, perda de controle ou sensação de desespero.",
    image: crises,
  },
];

export default function ServicesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        <h2 className="services-title">
          Talvez você esteja aqui porque está enfrentando…
        </h2>

        <p className="services-description">
          Com a mente e o coração sobrecarregados, o psiquiatra é o profissional
          capacitado a guiar você de volta ao bem-estar.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ "--i": index }}
              className={`service-card ${
                Math.floor(index / 3) % 2 === 0
                  ? "from-left"
                  : "from-right"
              }`}
            >
              <div className="service-icon">
                <img src={service.image} alt={service.title} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
