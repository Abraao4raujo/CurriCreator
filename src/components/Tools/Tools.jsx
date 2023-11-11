import React, { useContext } from "react";
import { UserContext } from "../../GlobalContext";
import BlocoDeFerramenta from "./BlocoDeFerramentas";

const Tools = () => {
  const dados = useContext(UserContext);

  return (
    <div>
      <BlocoDeFerramenta nameDiv="Nome" setDados={dados.setNome} />
      <BlocoDeFerramenta nameDiv="Area" setDados={dados.setArea} />
      <BlocoDeFerramenta nameDiv="About" setDados={dados.setAbout} />
      <BlocoDeFerramenta
        nameDiv="Experiencia 1"
        setDados={dados.setPrimeiraExperienciaTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Experiencia 2"
        setDados={dados.setSegundaExperienciaTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Experiencia 3"
        setDados={dados.setTerceiraExperienciaTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Descricao Experiencia 1"
        setDados={dados.setPrimeiraExperienciaDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Descricao Experiencia 2"
        setDados={dados.setSegundaExperienciaDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Descricao Experiencia 3"
        setDados={dados.setTerceiraExperienciaDesc}
      />

      <BlocoDeFerramenta nameDiv="Contato 1" setDados={dados.setContato1} />
      <BlocoDeFerramenta nameDiv="Contato 2" setDados={dados.setContato2} />
      <BlocoDeFerramenta nameDiv="Contato 3" setDados={dados.setContato3} />
      <BlocoDeFerramenta nameDiv="Contato 4" setDados={dados.setContato4} />
      <BlocoDeFerramenta nameDiv="Tecnologia" setDados={dados.setTecnologia} />

      <BlocoDeFerramenta
        nameDiv="Educacao 1"
        setDados={dados.setPrimeiraEducacaoTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao 2"
        setDados={dados.setSegundaEducacaoTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Educacao 3"
        setDados={dados.setTerceiraEducacaoTitulo}
      />
      <BlocoDeFerramenta
        nameDiv="Descricao Educacao 1"
        setDados={dados.setPrimeiraEducacaoDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Descricao Educacao 2"
        setDados={dados.setSegundaEducacaoDesc}
      />
      <BlocoDeFerramenta
        nameDiv="Descricao Educacao 3"
        setDados={dados.setTerceiraEducacaoDesc}
      />
    </div>
  );
};

export default Tools;
