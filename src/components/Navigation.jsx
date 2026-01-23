import "./Navigation.scss";
import logo from "../assets/logo_copia1.png";

export default function CustomNavigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Botão toggle (hamburger customizado) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span></span>
          </span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#sobre">
                Sobre Nós
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#areas">
                Áreas de Atuação
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>

            <li className="nav-item">
              <a className="btn btn-primary ms-3" href="#fale-conosco">
                Fale conosco
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
