import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>home</Link>
      <br />
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/Cadastro"}>Cadastro</Link> {/* Correção: Tag Link correta */}
      <br />
      <Link to={"/Localizacao"}>Localizacao</Link>
      <br />
      <Link to={"/Login"}>Login</Link>
      <br />
      <Link to={'/PaginaInicial'}>Pagina inicial</Link>
    </nav>
  );
};

export default Navbar;
