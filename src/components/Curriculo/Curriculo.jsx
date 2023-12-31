import React, { useContext } from "react";
import "./curriculo.css";
import CardExperience from "../Cards/CardExperience";
import CardEducacao from "../Cards/CardEducacao";
import { UserContext } from "../../GlobalContext";
import LinkRede from "../LinkRede";
import generatePDF from "./gerarPdf";
import Draggable from "react-draggable";

const Curriculo = () => {
  const dados = useContext(UserContext);

  function percorrerElementos(nomeElemento) {
    const teste = document.querySelectorAll(".input_changes");

    for (let i = 0; i < teste.length; i++) {
      teste[i].style.display = "none";
      if (
        teste[i].firstChild.innerText.toLowerCase() == nomeElemento.target.id
      ) {
        teste[i].children[1].value = nomeElemento.target.innerText;
        teste[i].style.display = "block";
      }
    }
  }

  return (
    <>
      <div className="sheetAndButton">
        <div className="container-sheet">
          <Draggable
            axis="both"
            handle={`.tituloNome`}
            grid={[10, 10]}
            scale={1}
          >
            <h2 className="tituloNome" id="nome" onClick={percorrerElementos}>
              {dados.nome || "Seu nome aqui"}
            </h2>
          </Draggable>

          <div className="sheet">
            <div className="grid-column1">
              <div className="container-sobre">
                <Draggable
                  axis="both"
                  handle={`.titulos`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <h3
                    className="titulos"
                    id="area"
                    onClick={percorrerElementos}
                  >
                    {dados.area || "Sua área aqui"}
                  </h3>
                </Draggable>
                <Draggable
                  axis="both"
                  handle={`.inf-sobre`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <div className="inf-sobre">
                    <p
                      className="paragrafo"
                      id="about"
                      onClick={percorrerElementos}
                    >
                      {dados.about ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"}
                    </p>
                  </div>
                </Draggable>
              </div>

              <div className="container-experiencia">
                <Draggable
                  axis="both"
                  handle={`.titulos`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <h3
                    className="titulos"
                    id="experiencias"
                    onClick={percorrerElementos}
                  >
                    Experiencia
                  </h3>
                </Draggable>
                <Draggable
                  axis="both"
                  handle=".inf-experiencia"
                  grid={[10, 10]}
                  scale={1}
                >
                  <div className="inf-experiencia">
                    <CardExperience
                      nomeProjeto={
                        dados.primeiraExperienciaTitulo ||
                        "Sua experiência aqui"
                      }
                      desc={
                        dados.primeiraExperienciaDesc ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                      }
                      idDesc={"descricaoexperiencia1"}
                    />

                    <CardExperience
                      nomeProjeto={
                        dados.segundaExperienciaTitulo || "Sua experiência aqui"
                      }
                      desc={
                        dados.segundaExperienciaDesc ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                      }
                      idDesc={"descricaoexperiencia2"}
                    />

                    <CardExperience
                      nomeProjeto={
                        dados.terceiraExperienciaTitulo ||
                        "Sua experiência aqui"
                      }
                      desc={
                        dados.terceiraExperienciaDesc ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                      }
                      idDesc={"descricaoexperiencia3"}
                    />
                  </div>
                </Draggable>
              </div>
            </div>
            <div className="grid-column2">
              <div className="container-contato">
                <Draggable
                  axis="both"
                  handle={`.titulos`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <h3
                    className="titulos"
                    id="contatos"
                    onClick={percorrerElementos}
                  >
                    Contato
                  </h3>
                </Draggable>
                <Draggable
                  axis="both"
                  handle={`.inf-contato`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <div className="inf-contato">
                    <LinkRede
                      redeSocial="Portfolio"
                      link={dados.contato1 || "#"}
                    />

                    <LinkRede
                      redeSocial="Github"
                      link={dados.contato2 || "#"}
                    />

                    <LinkRede
                      redeSocial="Contato"
                      link={dados.contato3 || "#"}
                    />

                    <LinkRede redeSocial="Email" link={dados.contato4 || "#"} />
                  </div>
                </Draggable>
              </div>

              <div className="container-tecnologias">
                <Draggable
                  axis="both"
                  handle={`.titulos`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <h3
                    className="titulos"
                    id="tecnologias"
                    onClick={percorrerElementos}
                  >
                    Tecnologias
                  </h3>
                </Draggable>
                <Draggable
                  axis="both"
                  handle={`.inf-tecnologia`}
                  grid={[10, 10]}
                  scale={1}
                >
                  <div className="inf-tecnologia">
                    {dados.tecnologia ? (
                      <p className="paragrafo">{dados.tecnologia}</p>
                    ) : (
                      <p className="paragrafo">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. loremamet consectetur adipisicing elit. lorem
                      </p>
                    )}
                  </div>
                </Draggable>
              </div>

              <Draggable
                axis="both"
                handle={`.container-educacao`}
                grid={[10, 10]}
                scale={1}
              >
                <div className="container-educacao">
                  <h3
                    className="titulos"
                    id="educacao"
                    onClick={percorrerElementos}
                  >
                    Educação
                  </h3>
                  <div className="inf-educacao">
                    <CardEducacao
                      nomeCurso={
                        dados.primeiraEducacaoTitulo || "primeira educação"
                      }
                      desc={
                        dados.primeiraEducacaoDesc ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                      }
                    />

                    <CardEducacao
                      nomeCurso={
                        dados.segundaEducacaoTitulo || "segunda educação"
                      }
                      desc={
                        dados.segundaEducacaoDesc ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                      }
                    />

                    <CardEducacao
                      nomeCurso={
                        dados.terceiraEducacaoTitulo || "terceira educação"
                      }
                      desc={
                        dados.terceiraEducacaoDesc ||
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. loremamet consectetur adipisicing elit. lorem"
                      }
                    />
                  </div>
                </div>
              </Draggable>
            </div>
          </div>
        </div>
        <button
          className="btnGerarPdf"
          onClick={() => {
            generatePDF();
          }}
        >
          gerar PDF
        </button>
      </div>
    </>
  );
};

export default Curriculo;
