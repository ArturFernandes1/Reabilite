import React from "react";
import "./CareProcessSection.scss";

export default function CareProcessSection() {
  return (
    <section className="care-section">
      <div className="care-wrapper">

        <h2 className="care-title">
          Como funciona o acompanhamento psiquiátrico?
        </h2>

        <p className="care-text">
          Cada atendimento na Reabilite é um momento de escuta e cuidado, pensado para compreender a criança, sua história, suas necessidades e o contexto familiar. A partir dessa avaliação criteriosa, nossa equipe traça um plano de intervenção individualizado, que pode incluir orientações à família, estratégias terapêuticas e acompanhamentos específicos para promover o desenvolvimento e o bem-estar da criança.
        </p>

        <h3 className="care-highlight">Atendimentos disponíveis</h3>

        <div className="care-cards">

          <div className="care-card presencial">
            <h4>Presencial - Brejo do Cruz, PB</h4>
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
