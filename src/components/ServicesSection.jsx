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
    title: "Birras intensas",
    text: "Crises frequentes de choro, irritação e dificuldade em lidar com frustrações no dia a dia.",
    image: crises,
  },
  {
    title: "Dificuldade na escola",
    text: "Problemas para acompanhar as atividades, baixo rendimento ou resistência em ir à escola.",
    image: emocional,
  },
  {
    title: "Falta de atenção e agitação",
    text: "Dificuldade de concentração, inquietação constante e impulsividade em casa ou na escola.",
    image: confusao,
  },
  {
    title: "Atraso no desenvolvimento",
    text: "Demora para falar, aprender ou desenvolver habilidades esperadas para a idade.",
    image: desvalorizacao,
  },
  {
    title: "Ansiedade infantil",
    text: "Medos excessivos, preocupação constante, dificuldade para dormir ou se separar dos pais.",
    image: ansiedade,
  },
  {
    title: "Dificuldade de socialização",
    text: "Desafios para se comunicar, interagir com outras crianças ou fazer amizades.",
    image: solidao,
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
          Seu filho pode estar passando por alguma dessas situações
        </h2>

        <p className="services-description">
          Cada criança se desenvolve de forma única. Identificar os sinais
          precocemente é fundamental para oferecer o apoio certo no momento
          certo.
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
