import React from 'react';
import './HeroSection.scss';
import personabg from '../assets/imgbackground2.png'; // Substitua pelo caminho da sua imagem
import personabg1 from '../assets/backgroundchatd2.png';

export default function HeroSection() {
  return (
    <section className="text-image-section">
        <div className="control-space-presentation">
            <div className="text-container">
                <h2>Cuidado Integral para o Seu Desenvolvimento</h2>
                <p>
              Na REABILITE, oferecemos atendimento multidisciplinar personalizado para cada paciente. Nossa equipe especializada em Psicologia, Fonoaudiologia, Psicopedagogia e Neuropsicopedagogia trabalha com técnicas modernas para promover o bem-estar e o desenvolvimento integral.
                </p>
                <button>Saiba Mais</button>
            </div>
            <div className="image-container">
                <img src={personabg1} alt="Descrição da imagem" />
            </div>
        </div>
    </section>
  );
}