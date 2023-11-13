import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-menu">
      <nav className="nav-menu">
        <ul className="ul-menu-list">
          <li className="list-menu">
            <h1 className="logo-menu">CurriCreator</h1>
          </li>
          {/* <li className="list-menu">
            <a href="#">Templates</a>
          </li>
          <li className="list-menu">
            <a href="#">Sobre</a>
          </li>
          <li className="list-menu">
            <a href="#">Contato</a>
          </li>
          <li className="list-menu">
            <a href="">Criar Conta</a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
