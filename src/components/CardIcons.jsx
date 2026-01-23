import React from 'react';
import './CardIcons.scss';
import reliability from '../assets/reliability.png'; // ícones atualizados
/* import trustIcon from '/assets/icons/handshake.png';
import credibilityIcon from '/assets/icons/seal.png'; */
/* import safetyIcon from '/assets/icons/lock.png';
import excellenceIcon from '/assets/icons/trophy.png';
import commitmentIcon from '/assets/icons/check.png'; */

const cards = [
  {
    
    title: 'Sofisticação',
    text: 'Design premium e atenção aos detalhes que elevam sua experiência.',
    image: reliability
  },
  {
    title: 'Confiança',
    text: 'Processos claros, honestidade e transparência em cada etapa.',
    image: reliability
  },
  {
    title: 'Credibilidade',
    text: 'Reconhecida por resultados consistentes e satisfação genuína.',
    image: reliability
  },
  {
    title: 'Segurança',
    text: 'Proteção de dados e integridade garantidas em todos os pontos.',
    image: reliability
  },
  {
    title: 'Excelência',
    text: 'Padrões elevados entregues com consistência e profissionalismo.',
    image: reliability
  },
  {
    title: 'Compromisso',
    text: 'Comprometimento real com seus objetivos e sucesso.',
    image: reliability
  }
];

export default function CardIcons() {
  return (
    <section className="section-card">
      <div className="control-space-cards">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="container-card">
              <img
                src={card.image}
                alt={card.title}
                className="card-icon"
              />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
