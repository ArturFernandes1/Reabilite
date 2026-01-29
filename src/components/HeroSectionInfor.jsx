import React from "react";
import "./HeroSectionInfor.scss";
import whatsapp from "../assets/icons/icon_whatsapp.png";
import seta from "../assets/icons/icon_setablack.png";

const HeroSectionInfor = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5599999999999", "_blank");
  };

  return (
    <section className="hero-container">
      <div className="hero-content">

        <div className="hero-left">
          <h1 className="hero-title">
            Seu filho está enfrentando dificuldades no desenvolvimento?
          </h1>

          <ul className="hero-services">
            <li>
              <img src={seta} alt="" className="service-icon" />
              Avaliação para TEA e TDAH
            </li>
            <li>
              <img src={seta} alt="" className="service-icon" />
              Intervenção precoce
            </li>
            <li>
              <img src={seta} alt="" className="service-icon" />
              Dificuldades de aprendizagem
            </li>
            <li>
              <img src={seta} alt="" className="service-icon" />
              Terapia comportamental infantil
            </li>
            <li>
              <img src={seta} alt="" className="service-icon" />
              Apoio e orientação à família
            </li>
          </ul>
        </div>

        <div className="hero-right">
          <p className="hero-description">
            Atendimento realizado por uma equipe multidisciplinar composta por
            psicóloga, psicopedagoga, neuropsicopedagoga e fonoaudióloga,
            trabalhando de forma integrada para cuidar de cada criança.
          </p>

          <button className="hero-button" onClick={handleWhatsApp}>
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="whatsapp-icon"
            />
            Agendar avaliação pelo WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionInfor;
