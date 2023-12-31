import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgCard = styled.img`
  max-width: 250px;
  max-height: 300px;
`;

const DivCardTemplate = styled.div`
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTemplate = ({ path_curriculo, url_img_curriculo }) => {
  return (
    <>
      <DivCardTemplate className="card-template">
        <Link to={path_curriculo}>
          <ImgCard src={url_img_curriculo} alt="templates" />
        </Link>
      </DivCardTemplate>
    </>
  );
};

export default CardTemplate;
