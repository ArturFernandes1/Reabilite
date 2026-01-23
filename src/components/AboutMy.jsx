import React from "react";
import "./AboutMy.scss";

import imgBackground from "../assets/imgbackground.png";

const AboutDanyella = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">

        {/* Texto */}
        <div className="about-text-area">
          <h2 className="about-title">Quem é Danyella Ribeiro?</h2>

          <p className="about-intro">
            Olá, sou Danyella Ribeiro. Dedico meu trabalho ao cuidado da saúde
            emocional e ao desenvolvimento humano, auxiliando pessoas que
            enfrentam desafios como ansiedade, sofrimento emocional, dificuldades
            de relacionamento e momentos de sobrecarga.
          </p>

          <p className="about-text">
            Minha abordagem é profundamente humanizada e centrada em cada pessoa.
            Acredito que o cuidado começa pela escuta, pelo acolhimento e pelo
            respeito à história e ao ritmo individual de cada paciente.
          </p>

          <p className="about-text">
            Busco compreender não apenas os sintomas, mas também os fatores
            emocionais, comportamentais e contextuais que impactam o bem-estar,
            construindo caminhos terapêuticos personalizados.
          </p>

          <p className="about-highlight">
            Meu propósito é oferecer um espaço seguro, ético e acolhedor, onde
            você possa se sentir compreendido(a) e apoiado(a).
          </p>
        </div>

        {/* Imagem */}
        <div className="about-image-area">
          <img src={imgBackground} alt="Danyella Ribeiro" />
        </div>

      </div>
    </section>
  );
};

export default AboutDanyella;
