import React, { useEffect, useRef } from "react";
import "./AreasAtuacao.scss";
import cerebroImg from "../assets/cerebro.jpg";
import fonoauImg from "../assets/fonoau.jpg";
import psicopedagogiaImg from "../assets/Psicopedagogia.png";
import quebraCabecaImg from "../assets/quebra_cabeca.avif";

const areas = [
  {
    titulo: "Psicologia",
    descricao:
      "Cuidado com a saúde emocional e mental, auxiliando no tratamento de ansiedade, depressão, estresse, traumas e no fortalecimento do autoconhecimento.",
    img: cerebroImg
  },
  {
    titulo: "Fonoaudiologia",
    descricao:
      "Atuação na comunicação humana, auxiliando em dificuldades de fala, linguagem, voz, audição, leitura, escrita e deglutição.",
    img: fonoauImg
  },
  {
    titulo: "Psicopedagogia",
    descricao:
      "Foco nos processos de aprendizagem, identificando e intervindo em dificuldades escolares, cognitivas e emocionais.",
    img: psicopedagogiaImg
  },
  {
    titulo: "Neuropsicopedagogia",
    descricao:
      "Integra neurociência, psicologia e pedagogia para compreender o funcionamento cerebral no processo de aprendizagem.",
    img: quebraCabecaImg
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
              {area.img && (
                <div className="area-card-img">
                  <img src={area.img} alt={area.titulo} />
                </div>
              )}
              <div className="area-card-content">
                <h3>{area.titulo}</h3>
                <p>{area.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
