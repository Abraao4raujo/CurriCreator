import React from "react";
import "./card.css";
import { AiOutlineLink } from "react-icons/ai";

const CardExperience = ({ nomeProjeto, desc, link, id, idDesc }) => {
  return (
    <div className="card">
      <div className="conteudo-card" key={nomeProjeto}>
        <div className="header-card">
          <h4 className="subtitulos" id={id}>
            {nomeProjeto}
          </h4>
          {link && (
            <a href={link}>
              <AiOutlineLink className="link-card" />
            </a>
          )}
        </div>
        <p className="paragrafo" id={idDesc}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CardExperience;
