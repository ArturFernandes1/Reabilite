import React, { useState, useRef, useCallback, useEffect } from "react";
import "./TeamSection.scss";

import perfil from "../assets/perfilteste1.jpeg";
import iconSetablack from "../assets/icons/icon_setablack.png";

const teamMembers = [
  {
    name: "Danyella Ribeiro",
    title: "Psicóloga Infantil e Adolescente",
    description: "Com especialização em ABA e intervenção precoce, Danyella é uma profissional dedicada a apoiar o desenvolvimento das crianças com carinho e expertise.",
  },
  {
    name: "Fernanda Alves",
    title: "Especialista em Terapia Cognitiva Comportamental (TCC)",
    description: (
      <>
        <p>É especialista em Terapia Cognitiva Comportamental (TCC) e traz uma abordagem acolhedora e profissional para atender tanto adultos quanto crianças e adolescentes.</p>
      </>
    ),
  },
  {
    name: "Socorro Lino",
    title: "Psicopedagoga",
    description: (
      <>
         <p>
          É Psicopedagoga e atua na avaliação e intervenção das dificuldades de
          aprendizagem, considerando os aspectos cognitivos, emocionais e
          comportamentais de cada criança ou adolescente.
        </p>
        <p>
          Com um olhar sensível e individualizado, trabalha para fortalecer o
          desenvolvimento educacional, a autonomia e o potencial de aprendizagem,
          sempre em parceria com a família e a escola.
        </p>
      </>
    ),
  },
  {
    name: "Williane Joice",
    title: "Especialista em Neuropsicopedagogia",
    description: (
      <>
        <p>
          É especialista em Neuropsicopedagogia e atua com foco no desenvolvimento
          cognitivo e emocional, auxiliando crianças e adolescentes a superarem
          desafios de aprendizagem.
        </p>
        <p>
          Com uma abordagem integrativa e baseada em evidências científicas,
          trabalha para potencializar o aprendizado e promover o bem-estar
          dos seus pacientes.
        </p>
      </>
    ),
  },
];

export default function TeamSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [centeredIndex, setCenteredIndex] = useState(0);
  const gridRef = useRef(null);

  const toggleCard = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const updateCenteredIndex = useCallback(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const scrollLeft = grid.scrollLeft;
    const center = scrollLeft + grid.clientWidth / 2;
    const cards = grid.children;
    let closest = 0;
    let closestDist = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    }
    setCenteredIndex(closest);
  }, []);

  const scrollToCard = (index) => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.children[index];
    if (card) {
      const scrollLeft = card.offsetLeft - grid.clientWidth / 2 + card.offsetWidth / 2;
      grid.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  };

  useEffect(() => {
    updateCenteredIndex();
    const grid = gridRef.current;
    if (!grid) return;
    const ro = new ResizeObserver(updateCenteredIndex);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [updateCenteredIndex]);

  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Nossa equipe</h2>

        <p className="team-subtitle">
          Profissionais qualificados, com olhar humano e atendimento individualizado
        </p>

        <div className="team-slider">
          <div
            className="team-grid"
            ref={gridRef}
            onScroll={updateCenteredIndex}
          >
            {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-member ${openIndex === index ? "open" : ""}`}
            >
              <div className="image-wrapper">
                <img src={perfil} alt={member.name} />
              </div>

              <div className="card-content">
                <button
                  className="arrow-btn"
                  onClick={() => toggleCard(index)}
                  aria-expanded={openIndex === index}
                  data-tooltip="Ver mais"
                  aria-label="Expandir informações do perfil"
                >
                  <img
                    src={iconSetablack}
                    alt=""
                    className="arrow-btn-icon"
                    aria-hidden="true"
                  />
                </button>

                <div className="text-content">
                  <h3>{member.name}</h3>
                  <span>{member.title}</span>
                </div>
              </div>

              <div className="card-extra">
                {typeof member.description === "string" ? (
                  <p>{member.description}</p>
                ) : (
                  <div className="card-extra-text">{member.description}</div>
                )}
              </div>
            </div>
            ))}
          </div>

          <div className="team-dots" aria-hidden="true">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`team-dot ${centeredIndex === index ? "active" : ""}`}
                onClick={() => scrollToCard(index)}
                aria-label={`Ir para card ${index + 1}`}
                aria-current={centeredIndex === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
