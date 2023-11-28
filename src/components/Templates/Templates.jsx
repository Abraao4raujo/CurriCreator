import React from "react";
import "./templates.css";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div>
      <div className="container-templates">
        <h2>Templates</h2>
        <div className="grid-templates">
          <div className="card-template">
            <Link to="/template/curriculo">
              <img src="../../../img/primeiroTemplate.png" alt="templates" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
