import React from "react";
import "./Headerbar.css";
import Logo from "../Headerbar/LogoMC.png"
import Perfil from "../Headerbar/profile.png"
import Favorito from "../Headerbar/favorites.png"
import Carrinho from "../Headerbar/cart.png"
import { Link } from 'react-router-dom';


function Headerbar() {
  return (
    <>
      {/* Top do Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }} href="#">
            Queridas Compras
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ color: "white" }} href="#">
                  Contato
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/*Headerbar médio*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={Logo} alt="QC" width={60} height={60} />
          </span>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button
                  class="btn btn-danger rounded-pill dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Todas Categorias
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <div className="input-group">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar o produtos, marcas e muito mais..."
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Pesquisar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="button" className="btn rounded-pill">
            <img src={Favorito} alt="Favoritos" width={20} height={20} />
          </button>
          <button type="button" className="btn rounded-pill">
            <img src={Perfil} alt="Perfil" width={20} height={20} />
          </button>
          <button type="button" className="btn rounded-pill">
            <Link to={'/Carrinho'}>
              <img src={Carrinho}  alt="Carrinho" width={20} height={20} />
            </Link>
          </button>
        </div>
      </nav>

      {/*Navbar bottom(a linha vermelha)*/}
      <nav className="navbar" style={{ marginTop: "1px" }}></nav>
    </>
  );
}

export default Headerbar;
