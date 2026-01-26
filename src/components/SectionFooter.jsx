import React from 'react';
import './SectionFooter.scss';
import logo from '../assets/logo_copia1.png';
import seta from '../assets/icons/icon_seta.png';
import localiza from '../assets/icons/icon_localiza.png';
import telefone from '../assets/icons/icon_telefone.png';
import insta from '../assets/icons/icon_insta.png';
import whats from '../assets/icons/icon_whatsapp.png';
import relogio from '../assets/icons/icon_relogio.png';

export default function SectionFooter() {
  return (
    <footer className="section-footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-column logo-column">
          <img
            src={logo}
            alt="REABILITE - Espaço Multidisciplinar"
            className="footer-logo-img"
          />
        </div>

        {/* Links */}
        <div className="footer-column">
          <h4>Links Úteis</h4>
          <ul className="footer-links">
            <li>
              <img src={seta} alt="" />
              <span>Início</span>
            </li>
            <li>
              <img src={seta} alt="" />
              <span>Especialidades</span>
            </li>
            <li>
              <img src={seta} alt="" />
              <span>Sobre a Reabilite</span>
            </li>
            <li>
              <img src={seta} alt="" />
              <span>Equipe</span>
            </li>
            <li>
              <img src={seta} alt="" />
              <span>Contato</span>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-column">
          <h4>Contato</h4>
          <ul className="footer-contact">
            <li>
              <img src={localiza} alt="" />
              <span>
                Galeria Nova Vitória, ao lado do Bradesco, <br />
                Brejo do Cruz - PB
              </span>
            </li>

            <li>
              <img src={telefone} alt="" />
              <span>Telefone: (83) 9XXXX-XXXX</span>
            </li>

            <li>
              <img src={whats} alt="" />
              <span>WhatsApp: (83) 9XXXX-XXXX</span>
            </li>

            <li>
              <img src={relogio} alt="" />
              <span>Segunda a Sexta: 8h às 18h</span>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <ul className="footer-social">
            <li>
              <img src={insta} alt="" />
              <span>@reabilite.multidisciplinar</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <p>
          © 2025 REABILITE – Espaço Multidisciplinar. Todos os direitos reservados.
        </p>
        <a href="#">Política de Privacidade</a>
      </div>
    </footer>
  );
}
