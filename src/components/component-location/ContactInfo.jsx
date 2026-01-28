import React from "react";
import './ContactInfo.scss';
import localiza from "../../assets/icons/icon_localizacolor.png";
import telefone from "../../assets/icons/icon_telefonecolor (1).png";
import whats from "../../assets/icons/icon_whatsappcolor.png";
import emailIcon from "../../assets/icons/icon_emailcolor.png";
import sparkler from "../../assets/icons/icon_sparkler.png";
import insta from "../../assets/icons/icon_insta.png";
import facebook from "../../assets/icons/icon_facebook.png";
import tiktok from "../../assets/icons/icon_tiktok.png";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <h2 className="contact-info__title">
        <span className="contact-info__title-desktop">Contatos</span>
        <span className="contact-info__title-mobile">Contato</span>
      </h2>
      <p className="contact-info__intro">
        <img src={sparkler} alt="" className="contact-info__sparkle-icon" aria-hidden />
        Vamos conversar? Estou aqui para te ouvir.
      </p>

      <ul className="contact-info__list">
        <li className="contact-info__item">
          <img src={localiza} alt="" aria-hidden />
          <div>
            <strong>Atendimento presencial</strong>
            <span>Galeria Nova Vitória, ao lado do Bradesco, Brejo do Cruz - PB</span>
          </div>
        </li>
        <li className="contact-info__item">
          <img src={telefone} alt="" aria-hidden />
          <div>
            <strong>Telefone</strong>
            <span>(83) 9XXXX-XXXX</span>
          </div>
        </li>
        <li className="contact-info__item">
          <img src={whats} alt="" aria-hidden />
          <div>
            <strong>WhatsApp</strong>
            <span>(83) 9XXXX-XXXX</span>
          </div>
        </li>
        <li className="contact-info__item">
          <img src={emailIcon} alt="" aria-hidden />
          <div>
            <strong>E-mail</strong>
            <span>contato@reabilite.com.br</span>
          </div>
        </li>
      </ul>

      <div className="contact-info__social">
        <a href="#" className="contact-info__social-link" aria-label="Instagram">
          <img src={insta} alt="" />
        </a>
        <a href="#" className="contact-info__social-link" aria-label="Facebook">
          <img src={facebook} alt="" />
        </a>
        <a href="#" className="contact-info__social-link" aria-label="TikTok">
          <img src={tiktok} alt="" />
        </a>
      </div>
    </section>
  );
}
