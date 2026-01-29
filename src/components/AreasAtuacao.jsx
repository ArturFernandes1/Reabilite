import React, { useEffect, useRef } from "react";
import "./AreasAtuacao.scss";

const areas = [
  {
    titulo: "Psicologia",
    descricao:
      "Cuidado com a saúde emocional e mental, auxiliando no tratamento de ansiedade, depressão, estresse, traumas e no fortalecimento do autoconhecimento."
  },
  {
    titulo: "Fonoaudiologia",
    descricao:
      "Atuação na comunicação humana, auxiliando em dificuldades de fala, linguagem, voz, audição, leitura, escrita e deglutição."
  },
  {
    titulo: "Psicopedagogia",
    descricao:
      "Foco nos processos de aprendizagem, identificando e intervindo em dificuldades escolares, cognitivas e emocionais."
  },
  {
    titulo: "Neuropsicopedagogia",
    descricao:
      "Integra neurociência, psicologia e pedagogia para compreender o funcionamento cerebral no processo de aprendizagem."
  }
];

export default function AreasAtuacao() {
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
    <section className="areas-container" id="areas-atuacao">
      <div className="areas-container-controll">
        <h2>Áreas de Atuação</h2>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ "--i": index }}
              className={`area-card ${
                Math.floor(index / 2) % 2 === 0 ? "from-left" : "from-right"
              }`}
            >
              <h3>{area.titulo}</h3>
              <p>{area.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
