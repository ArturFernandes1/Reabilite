import React from "react";
import "./AboutMy.scss";

import imgBackground from "../assets/imgbackground.png";

const AboutDanyella = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">

        <div className="about-text-area">
          <h2 className="about-title">Quem é Danyella Ribeiro?</h2>
          <p className="about-intro">
            Olá, sou Danyella Ribeiro, psicóloga e fundadora da Reabilite – Espaço
            Multidisciplinar. Dedico meu trabalho ao cuidado da saúde emocional e ao
            desenvolvimento infantil, com foco no acolhimento, na escuta qualificada e
            no respeito à singularidade de cada criança e família.
          </p>

          <p className="about-text">
            Com especialização em ABA (Análise do Comportamento Aplicada) e intervenção
            precoce, atuo no apoio ao desenvolvimento de crianças que enfrentam desafios
            emocionais, comportamentais e dificuldades no processo de aprendizagem,
            sempre por meio de uma abordagem humanizada e personalizada.
          </p>

          <p className="about-highlight">
            Como fundadora da Reabilite, meu propósito é oferecer um espaço seguro,
            ético e acolhedor, caminhando junto às famílias para promover autonomia,
            bem-estar emocional e desenvolvimento saudável.
          </p>
        </div>
        <div className="about-image-area">
          <img src={imgBackground} alt="Danyella Ribeiro" />
        </div>

      </div>
    </section>
  );
};

export default AboutDanyella;
