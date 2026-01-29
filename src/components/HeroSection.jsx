import React from 'react';
import './HeroSection.scss';

import reabilite from '../assets/Reabilite2.png';
import reabiliteMobile from '../assets/reabilitemobile.png';

export default function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-image-container">
        <picture>
          <source media="(max-width: 768px)" srcSet={reabiliteMobile} />
          <img src={reabilite} alt="Reabilite - Espaço Multidisciplinar" />
        </picture>
      </div>
    </section>
  );
}
