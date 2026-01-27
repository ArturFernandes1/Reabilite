import React from 'react';
import './HeroSection.scss';

import persona1 from '../assets/backgroundchat1.png';

export default function HeroSection() {
  return (
    <section className="text-image-section">
      <div className="control-space-presentation">
        <div className="image-container">
          <img src={persona1} alt="Descrição da imagem" />
        </div>

        <div className="text-container">
          <h2>Seu filho está enfrentando dificuldades no desenvolvimento, comportamento ou aprendizagem?</h2>

          <p>
            No Espaço Multidisciplinar Reabilite, ajudamos crianças a desenvolverem todo o seu potencial por meio de um acompanhamento especializado, acolhedor e humanizado, com atendimento multidisciplinar pensado para cada necessidade.
          </p>

          <div className="buttons-container">
            <button className="btn-primary">
              Agendar avaliação
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
