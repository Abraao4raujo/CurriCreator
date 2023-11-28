import React from "react";
import "./index.css";
import Header from "../src/components/Header/Header";
import Curriculo from "./components/Curriculo/Curriculo";
import Tools from "./components/Tools/Tools";
import { GlobalStorage } from "./GlobalContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainIndex/MainPage";
import Templates from "./components/Templates/Templates";

const router = createBrowserRouter([
  {
    path: "/template/curriculo",
    element: (
      <>
        <Header />
        <div className="pagina-curriculo">
          <GlobalStorage>
            <Tools />
            <Curriculo />
          </GlobalStorage>
        </div>
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <MainPage />
      </>
    ),
  },
  {
    path: "/templates",
    element: (
      <>
        <Header />
        <Templates />
      </>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
};

export default App;
