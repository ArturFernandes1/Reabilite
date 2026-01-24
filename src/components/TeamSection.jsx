import React from "react";
import "./TeamSection.scss";

import menberOne from "../assets/menber_chat1.png";

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-container">

        <h2 className="team-title">Nossa equipe</h2>

        <p className="team-subtitle">
          Profissionais qualificados, com olhar humano e atendimento individualizado
        </p>

        <div className="team-grid">

          <div className="team-member">
            <img
              src={menberOne}
              alt="Dra. Danyella Ribeiro"
            />
         {/*    <h3>Dra. Danyella Ribeiro</h3>
            <span>Psiquiatria</span>
            <p>
              Atendimento focado em saúde mental, com escuta ativa, ética e
              tratamento personalizado para cada paciente.
            </p> */}
          </div>

           <div className="team-member">
            <img
              src={menberOne}
              alt="Dra. Danyella Ribeiro"
            />
           {/*  <h3>Dra. Danyella Ribeiro</h3>
            <span>Psiquiatria</span>
            <p>
              Atendimento focado em saúde mental, com escuta ativa, ética e
              tratamento personalizado para cada paciente.
            </p> */}
          </div>

           <div className="team-member">
             <img
              src={menberOne}
              alt="Dra. Danyella Ribeiro"
            />
           {/*  <h3>Dra. Danyella Ribeiro</h3>
            <span>Psiquiatria</span>
            <p>
              Atendimento focado em saúde mental, com escuta ativa, ética e
              tratamento personalizado para cada paciente.
            </p> */}
          </div>

          <div className="team-member">
             <img
              src={menberOne}
              alt="Dra. Danyella Ribeiro"
            />
          {/*   <h3>Dr. Paulo Freitas</h3>
            <span>Psiquiatria</span>
            <p>
              Experiência no acompanhamento de transtornos emocionais e
              comportamentais, com abordagem baseada em evidências.
            </p> */}
          </div>

        </div>

      </div>
    </section>
  );
}
