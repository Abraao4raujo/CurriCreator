import "./card.css";

import React from "react";

const CardEducacao = ({ nomeCurso, desc }) => {
  return (
    <div className="card">
      <div className="conteudo-card">
        <h4 className="subtitulos">{nomeCurso}</h4>
        <p className="paragrafo">{desc}</p>
      </div>
    </div>
  );
};

export default CardEducacao;
