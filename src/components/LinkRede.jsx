import React from "react";

const LinkRede = ({ redeSocial, link }) => {
  return (
    <p className="paragrafo">
      {redeSocial}:<a href={link || "#"}> Meu {redeSocial}</a>
    </p>
  );
};

export default LinkRede;
