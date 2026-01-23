import React from "react";
import "./HeroSectionInfor.scss";
import whatsapp from "../assets/whatsapp.png";

const HeroSectionInfor = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5599999999999", "_blank");
  };

  return (
    <section className="hero-container">
      <div className="hero-content">

        {/* Lado esquerdo */}
        <div className="hero-left">
          <h1 className="hero-title">
            Você merece ter qualidade de vida.
            E isso começa cuidando da sua saúde mental.
          </h1>
        </div>

        {/* Lado direito */}
        <div className="hero-right">
          <p className="hero-description">
            Com o tratamento certo, você pode recuperar o equilíbrio e
            retomar sua rotina com mais leveza e bem-estar.
          </p>

          <button className="hero-button" onClick={handleWhatsApp}>
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="whatsapp-icon"
            />
            Agendar minha consulta agora
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionInfor;
