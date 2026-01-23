import React from "react";
import "./TeamSection.scss";
import menberOne from "../assets/menber_chat1.png";
import memberTwo from "../assets/menber_two.png";
import memberTree from "../assets/menber_tree.png";
import memberFour from "../assets/menber_four.png";

export default function EquipeReabilite() {
  return (
    <section className="team-section">
      <div className="team-container">

        <h2 className="team-title">Equipe Especializada</h2>
        <p className="team-subtitle">
          Uma equipe preparada para oferecer cuidado, acolhimento e resultados.
        </p>

        <div className="team-cards">

          <div className="team-card-single">
            <img
              src={menberOne}
              alt="Membro da equipe"
              className="team-photo"
            />
          </div>

          <div className="team-card-single">
            <img
              src={menberOne}
              alt="Membro da equipe"
              className="team-photo"
            />
          </div>

          <div className="team-card-single">
            <img
              src={menberOne}
              alt="Membro da equipe"
              className="team-photo"
            />
          </div>

          <div className="team-card-single">
            <img
              src={menberOne}
              alt="Membro da equipe"
              className="team-photo"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
