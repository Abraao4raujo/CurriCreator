import React from "react";
import { Link } from "react-router-dom";

const CardTemplate = ( {path_curriculo, url_img_curriculo} ) => {
  return (
    <>
      <div className="card-template">
        <Link to={path_curriculo}>
          <img src={url_img_curriculo} alt="templates" />
        </Link>
      </div>
    </>
  );
};

export default CardTemplate;
