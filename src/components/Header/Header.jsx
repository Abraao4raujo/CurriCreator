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
            <a href="/templates">Templates</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
