import React from "react";
import "./index.css";
import Header from "../src/components/Header/Header";
import Curriculo from "./components/Curriculo/Curriculo";
import Tools from "./components/Tools/Tools";
import {GlobalStorage} from "./GlobalContext";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pagina-curriculo">
        <GlobalStorage>
          <Tools />
          <Curriculo />
        </GlobalStorage>
      </div>
    </div>
  );
};

export default App;
