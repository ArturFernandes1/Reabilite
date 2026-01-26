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
          <h2>Cuidado integral para o seu desenvolvimento!</h2>

          <p>
            Na REABILITE, oferecemos atendimento multidisciplinar personalizado
            para cada paciente. Nossa equipe especializada em Psicologia,
            Fonoaudiologia, Psicopedagogia e Neuropsicopedagogia trabalha com
            técnicas modernas para promover o bem-estar e o desenvolvimento
            integral.
          </p>

          <div className="buttons-container">
            <button className="btn-primary">
              Quero atendimento presencial
            </button>

            <button className="btn-secondary">
              Quero atendimento online
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
