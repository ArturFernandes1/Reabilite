import React from 'react';
import './HeroSection.scss';

import reabilite from '../assets/reabilitebg.png';
import reabiliteMobile from '../assets/reabilitemobile.png';

export default function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-image-container">
        <picture>
          <source media="(max-width: 768px)" srcSet={reabiliteMobile} />
          <img src={reabilite} alt="Reabilite - Espaço Multidisciplinar" />
        </picture>
        <div className="hero-mobile-text">
          <h2 className="hero-title">
            Percebe <span className="hero-title-highlight">dificuldades</span>
            <br />
            no desenvolvimento
            <br />
            ou na <span className="hero-title-highlight">aprendizagem</span>
            <br />
            do seu filho?
          </h2>
          <p className="hero-subtitle">
            No Espaço Multidisciplinar Reabilite, ajudamos crianças a desenvolverem todo o seu potencial por meio de um acompanhamento especializado.
          </p>
        </div>
      </div>
    </section>
  );
}
