import { useState } from "react";
import "./Navigation.scss";
import logo from "../assets/logo_copia1.png";

export default function CustomNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        <a className="navbar-brand" href="#inicio">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        <button
          className={`navbar-toggler ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            menuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#inicio" onClick={() => setMenuOpen(false)}>
                Início
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#sobre" onClick={() => setMenuOpen(false)}>
                Sobre nós
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#areas-atuacao" onClick={() => setMenuOpen(false)}>
                Áreas de Atuação
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contato" onClick={() => setMenuOpen(false)}>
                Contato
              </a>
            </li>

            <li className="nav-item">
              <a
                className="btn btn-primary"
                href="#fale-conosco"
                onClick={() => setMenuOpen(false)}
              >
                Fale conosco
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
