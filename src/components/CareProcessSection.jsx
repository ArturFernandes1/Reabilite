import React from "react";
import "./CareProcessSection.scss";

export default function CareProcessSection() {
  return (
    <section className="care-section">
      <div className="care-wrapper">

        <h2 className="care-title">
          Como funciona o acompanhamento psiquiátrico?
        </h2>

        <p className="care-subtitle">
          ✨ Avaliação médica, diagnóstico preciso e tratamento individualizado
        </p>

        <p className="care-text">
          Cada consulta é um momento reservado para entender sua história,
          sintomas e contexto de vida. A partir disso, realizamos uma avaliação
          clínica cuidadosa para traçar um plano terapêutico que pode incluir
          orientações, mudanças de hábitos e, se necessário, o uso responsável
          de medicação.
        </p>

        <h3 className="care-highlight">Atendimentos disponíveis</h3>

        <div className="care-cards">

          <div className="care-card presencial">
            <h4>Presencial em Brejo do Cruz (PB)</h4>
            <p>
              As consultas são realizadas em um ambiente discreto e acolhedor,
              ideal para quem busca uma escuta atenta aliada ao acompanhamento
              médico próximo.
            </p>
          </div>

          <div className="care-card online">
            <h4>Online para todo o Brasil</h4>
            <p>
              A consulta é feita por videochamada segura, com sigilo garantido.
              Você recebe a mesma atenção e pode contar com prescrição digital
              válida em todo o país, com conforto e praticidade.
            </p>
          </div>

        </div>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="care-button"
        >
          Agendar minha consulta agora
        </a>

      </div>
    </section>
  );
}
