import React from "react";
import "./Templates.css";
import CardTemplate from "../Cards/CardTemplate";

const Templates = () => {
  return (
    <div>
      <div className="container-templates">
        <h2>Templates</h2>
        <div className="grid-templates">
          <CardTemplate
            path_curriculo={"/templates/curriculo"}
            url_img_curriculo="src\components\Templates\img\primeiroTemplate.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Templates;
