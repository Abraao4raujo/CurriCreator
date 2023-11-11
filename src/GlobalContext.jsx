import React, { useState } from "react";

export const UserContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [nome, setNome] = useState();
  const [area, setArea] = useState();
  const [about, setAbout] = useState();

  const [primeiraExperienciaTitulo, setPrimeiraExperienciaTitulo] = useState();
  const [primeiraExperienciaDesc, setPrimeiraExperienciaDesc] = useState();

  const [segundaExperienciaTitulo, setSegundaExperienciaTitulo] = useState();
  const [segundaExperienciaDesc, setSegundaExperienciaDesc] = useState();

  const [terceiraExperienciaTitulo, setTerceiraExperienciaTitulo] = useState();
  const [terceiraExperienciaDesc, setTerceiraExperienciaDesc] = useState();

  const [contato1, setContato1] = useState();
  const [contato2, setContato2] = useState();
  const [contato3, setContato3] = useState();
  const [contato4, setContato4] = useState();

  const [tecnologia, setTecnologia] = useState();

  const [primeiraEducacaoTitulo, setPrimeiraEducacaoTitulo] = useState();
  const [primeiraEducacaoDesc, setPrimeiraEducacaoDesc] = useState();

  const [segundaEducacaoTitulo, setSegundaEducacaoTitulo] = useState();
  const [segundaEducacaoDesc, setSegundaEducacaoDesc] = useState();

  const [terceiraEducacaoTitulo, setTerceiraEducacaoTitulo] = useState();
  const [terceiraEducacaoDesc, setTerceiraEducacaoDesc] = useState();

  return (
    <UserContext.Provider
      value={{
        nome,
        setNome,
        area,
        setArea,
        about,
        setAbout,
        primeiraExperienciaTitulo,
        setPrimeiraExperienciaTitulo,
        segundaExperienciaTitulo,
        setSegundaExperienciaTitulo,
        terceiraExperienciaTitulo,
        setTerceiraExperienciaTitulo,
        primeiraExperienciaDesc,
        setPrimeiraExperienciaDesc,
        segundaExperienciaDesc,
        setSegundaExperienciaDesc,
        terceiraExperienciaDesc,
        setTerceiraExperienciaDesc,
        contato1,
        contato2,
        contato3,
        contato4,
        setContato1,
        setContato2,
        setContato3,
        setContato4,
        tecnologia,
        setTecnologia,
        primeiraEducacaoTitulo,
        setPrimeiraEducacaoTitulo,
        segundaEducacaoTitulo,
        setSegundaEducacaoTitulo,
        terceiraEducacaoTitulo,
        setTerceiraEducacaoTitulo,
        primeiraEducacaoDesc,
        setPrimeiraEducacaoDesc,
        segundaEducacaoDesc,
        setSegundaEducacaoDesc,
        terceiraEducacaoDesc,
        setTerceiraEducacaoDesc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
