import React from "react";
import CardTemplate from "../Cards/CardTemplate";
import styled from "styled-components";

const ContainerTemplates = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-top: 20px;
`;
const GridTemplates = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: repeat(auto-fill, 304px);
`;

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1.4rem;
  color: #fff;
`;

const Templates = () => {
  return (
    <div>
      <ContainerTemplates>
        <Title>Templates</Title>
        <GridTemplates>
          <CardTemplate
            path_curriculo={"/templates/curriculo"}
            url_img_curriculo="src\components\Templates\img\primeiroTemplate.png"
          />
        </GridTemplates>
      </ContainerTemplates>
    </div>
  );
};

export default Templates;
