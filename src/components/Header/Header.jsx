import { React } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container_menu">
      <ul>
        <div className="items-menu-start">
          <li className="logo_curricreator">
            <Link to="/">CURRICREATOR</Link>
          </li>
          <li>
            <a href="#">Templates</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato </a>
          </li>
        </div>
        <li>
          <div className="btn_cadastro">
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
