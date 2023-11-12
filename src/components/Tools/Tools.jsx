import React, { useContext } from "react";
import { UserContext } from "../../GlobalContext";
import BlocoDeFerramenta from "./BlocoDeFerramentas";
import "./Tools.css";

const Tools = () => {
  const dados = useContext(UserContext);

  return (
    <div>
      <BlocoDeFerramenta nameDiv="Nome" setDados={dados.setNome} />
      <BlocoDeFerramenta nameDiv="Area" setDados={dados.setArea} />
      <BlocoDeFerramenta nameDiv="About" setDados={dados.setAbout} />
      <BlocoDeFerramenta
        nameDiv="Experiencias"
        setDados={dados.setPrimeiraExperienciaTitulo}
      />{" "}
      <BlocoDeFerramenta
        nameDiv="Experiencias"
        setDados={dados.setPrimeiraExperienciaDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Experiencias"
        setDados={dados.setSegundaExperienciaTitulo}
      />{" "}
      <BlocoDeFerramenta
        nameDiv="Experiencias"
        setDados={dados.setSegundaExperienciaDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Experiencias"
        setDados={dados.setTerceiraExperienciaTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Experiencias"
        setDados={dados.setTerceiraExperienciaDesc}
      />
      <BlocoDeFerramenta nameDiv="Contatos" setDados={dados.setContato1} />
      <BlocoDeFerramenta nameDiv="Contatos" setDados={dados.setContato2} />
      <BlocoDeFerramenta nameDiv="Contatos" setDados={dados.setContato3} />
      <BlocoDeFerramenta nameDiv="Contatos" setDados={dados.setContato4} />
      <BlocoDeFerramenta nameDiv="Tecnologias" setDados={dados.setTecnologia} />
      <BlocoDeFerramenta
        nameDiv="Educacao"
        setDados={dados.setPrimeiraEducacaoTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao"
        setDados={dados.setPrimeiraEducacaoDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao"
        setDados={dados.setSegundaEducacaoTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao"
        setDados={dados.setSegundaEducacaoDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao"
        setDados={dados.setTerceiraEducacaoTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao"
        setDados={dados.setTerceiraEducacaoDesc}
      />
    </div>
  );
};

export default Tools;
