import React from "react";
import "./ServicesSection.scss";

import solidao from "../assets/icons/icon_solidao.png";
import ansiedade from "../assets/icons/icon_ansiedade1.png";
import confusao from "../assets/icons/icon_confusaomental.png";
import desvalorizacao from '../assets/icons/icon_desvalori.png';
import emocional from '../assets/icons/icon_emocional.png';
import crises from '../assets/icons/icon_crises.png';




export default function ServicesSection() {
  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        <h2 className="services-title">
          Talvez você esteja aqui porque está enfrentando…
        </h2>

        <p className="services-description">
          Com a mente e o coração sobrecarregados, o psiquiatra é o profissional
          capacitado a guiar você de volta ao bem-estar, através de um tratamento
          especializado e compassivo.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <img src={ansiedade} alt="Ansiedade" />
            </div>
            <h3>Ansiedade</h3>
            <p>
              Preocupações excessivas, insônia, taquicardia e sensação constante
              de alerta.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={emocional} alt="Esgotamento emocional" />
            </div>
            <h3>Esgotamento emocional</h3>
            <p>
              Cansaço extremo, falta de motivação e vontade de se isolar das
              pessoas.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={desvalorizacao} alt="Desvalorização" />
            </div>
            <h3>Desvalorização</h3>
            <p>
              Baixa autoestima, autocrítica intensa ou sensação de ser um peso
              para os outros.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={solidao} alt="Solidão" />
            </div>
            <h3>Solidão</h3>
            <p>
              Mesmo cercado de pessoas, sente que ninguém entende o que você está
              passando.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={confusao} alt="Confusão mental" />
            </div>
            <h3>Confusão mental</h3>
            <p>
              Dificuldade de concentração, pensamentos acelerados ou sensação de
              mente embaralhada.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={crises} alt="Crises emocionais" />
            </div>
            <h3>Crises emocionais</h3>
            <p>
              Explosões de choro, irritabilidade, perda de controle ou sensação
              de desespero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
