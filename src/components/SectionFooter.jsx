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
          alt="Paulo Freitas - Psiquiatra"
          className="footer-logo-img"
        />
      </div>

        {/* Links úteis */}
      <div className="footer-column">
        <h4>Links Úteis</h4>
        <ul className="footer-links">
          <li>
            <img src={seta} alt="" />
            <span>Home</span>
          </li>
          <li>
            <img src={seta} alt="" />
            <span>Áreas de Atuação</span>
          </li>
          <li>
            <img src={seta} alt="" />
            <span>Sobre nós</span>
          </li>
          <li>
            <img src={seta} alt="" />
            <span>Artigos</span>
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
            <span>Rua Exemplo, nº 123 – Bairro Central</span>
          </li>

          <li>
            <img src={telefone} alt="" />
            <span>(34) 9XXXX-XXXX</span>
          </li>

          <li>
            <img src={whats} alt="" />
            <span>WhatsApp: (34) 9XXXX-XXXX</span>
          </li>

          <li>
            <img src={relogio} alt="" />
            <span>Segunda a Sexta: 8h – 18h</span>
          </li>
        </ul>
      </div>


        {/* Redes sociais */}

      <div className="footer-column">
        <h4>Redes Sociais</h4>

        <ul className="footer-social">
          <li>
            <img src={insta} alt="" />
            <span>@paulofreitaspsi_</span>
          </li>

          <li>
            <img src={insta} alt="" />
            <span>@paulofreitaspsi_</span>
          </li>

          <li>
            <img src={insta} alt="" />
            <span>@paulofreitaspsi_</span>
          </li>
        </ul>
      </div>


      </div>

      {/* Linha inferior */}
      <div className="footer-bottom">
        <p>
          © 2025 Paulo Freitas | Psiquiatra | CRP 00/00000 — Todos os direitos reservados.
        </p>
        <a href="#">Políticas de Privacidade</a>
      </div>
    </footer>
  );
}
