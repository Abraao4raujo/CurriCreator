import React, { useContext } from "react";
import "./curriculo.css";
import CardExperience from "../Cards/CardExperience";
import CardEducacao from "../Cards/CardEducacao";
import { UserContext } from "../../GlobalContext";
import LinkRede from "../LinkRede";
import { jsPDF } from "jspdf";

const Curriculo = (props) => {
  const dados = useContext(UserContext);

  function generatePDF() {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pdfElement = document.querySelector(".container-sheet");

    doc.html(pdfElement, {
      callback: (pdf) => {
        pdf.save("MeuCurriCreator.pdf");
      },
    });
  }

  return (
    <>
      <div className="container-sheet">
        <h2 className="tituloNome">{dados.nome || "Seu nome aqui"}</h2>
        <div className="sheet">
          <div className="grid-column1">
            <div className="container-sobre">
              <h3 className="titulos">{dados.area || "Sua area aqui"}</h3>
              <div className="inf-sobre">
                <p className="paragrafo">
                  {dados.about ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"}
                </p>
              </div>
            </div>
            <div className="container-experiencia">
              <h3 className="titulos">Experiencia</h3>
              <div className="inf-experiencia">
                <CardExperience
                  nomeProjeto={
                    dados.primeiraExperienciaTitulo || "Sua experiencia aqui"
                  }
                  desc={
                    dados.primeiraExperienciaDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                  tecnologiasUsadas="tecUsadas"
                />
                <CardExperience
                  nomeProjeto={
                    dados.segundaExperienciaTitulo || "Sua experiencia aqui"
                  }
                  desc={
                    dados.segundaExperienciaDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                  tecnologiasUsadas="tecUsadas"
                />
                <CardExperience
                  nomeProjeto={
                    dados.terceiraExperienciaTitulo || "Sua experiencia aqui"
                  }
                  desc={
                    dados.terceiraExperienciaDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                  tecnologiasUsadas="tecUsadas"
                />
                <CardExperience
                  nomeProjeto={
                    dados.terceiraExperienciaTitulo || "Sua experiencia aqui"
                  }
                  desc={
                    dados.terceiraExperienciaDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                  tecnologiasUsadas="tecUsadas"
                />
              </div>
            </div>
          </div>
          <div className="grid-column2">
            <div className="container-contato">
              <h3 className="titulos">Contato</h3>
              <div className="inf-contato">
                <LinkRede
                  redeSocial="Portfolio"
                  link={dados.contato1 || "seu Portfolio"}
                />
                <LinkRede
                  redeSocial="Github"
                  link={dados.contato2 || "seu Github"}
                />
                <LinkRede
                  redeSocial="Contato"
                  link={dados.contato3 || "seu Contato"}
                />
                <LinkRede
                  redeSocial="Email"
                  link={dados.contato4 || "seu Email"}
                />
              </div>
            </div>
            <div className="container-tecnologias">
              <h3 className="titulos">Tecnologias</h3>
              <div className="inf-tecnologia">
                {dados.tecnologia ? (
                  <p>{dados.tecnologia}</p>
                ) : (
                  <p className="paragrafo">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    loremamet consectetur adipisicing elit. lorem
                  </p>
                )}
              </div>
            </div>
            <div className="container-educacao">
              <h3 className="titulos">Educação</h3>
              <div className="inf-educacao">
                <CardEducacao
                  nomeCurso={
                    dados.primeiraEducacaoTitulo || "primeira educacao"
                  }
                  desc={
                    dados.primeiraEducacaoDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                />
                <CardEducacao
                  nomeCurso={dados.segundaEducacaoTitulo || "segunda educacao"}
                  desc={
                    dados.segundaEducacaoDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                />
                <CardEducacao
                  nomeCurso={
                    dados.terceiraEducacaoTitulo || "terceira educacao"
                  }
                  desc={
                    dados.terceiraEducacaoDesc ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={generatePDF}>gerar PDF</button>
    </>
  );
};

export default Curriculo;
