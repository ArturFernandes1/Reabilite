import React, { useState } from "react";
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
];

export default function TeamSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Nossa equipe</h2>

        <p className="team-subtitle">
          Profissionais qualificados, com olhar humano e atendimento individualizado
        </p>

        <div className="team-grid">
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
      </div>
    </section>
  );
}
