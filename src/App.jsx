import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { GlobalStorage } from "./GlobalContext";

import "./index.css";
import Header from "../src/components/Header/Header";
import Curriculo from "./components/Curriculo/Curriculo";
import Tools from "./components/Tools/Tools";
import MainPage from "./components/MainIndex/MainPage";
import Templates from "./components/Templates/Templates";

function Template() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const App = () => {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route element={<Template />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/templates" element={<Templates />} />
              <Route
                path="/templates/curriculo"
                element={
                  <div className="pagina-curriculo">
                    <GlobalStorage>
                      <Tools />
                      <Curriculo />
                    </GlobalStorage>
                  </div>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <RouterProvider router={router} /> */}
      </React.StrictMode>
    </div>
  );
};

export default App;
