import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="container-fluid padding top-header">
        Telefone: (83) 3232-8224 - Email: associacaoesct@gmail.com
      </div>
      <nav className="navbar navbar-expand-lg bg-navbar shadow-sm">
        <div className="container padding">
          <a className="navbar-brand" href="#">
            <img src="/imagens/navbar/logo-esct.png" alt="" height="100"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-cor"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-cor"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Instituição
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Quem Somos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-cor">
                <a className="nav-link text-cor" href="#">
                  Galeria de Fotos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-cor"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contato
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Fale Conosco
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item text-cor">
                <a className="nav-link text-cor" href="#">
                  Doar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
