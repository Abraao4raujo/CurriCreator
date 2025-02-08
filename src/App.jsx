import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Curriculo from "./components/Curriculo/Curriculo";
import MainPage from "./components/MainIndex/MainPage";
import Templates from "./components/Templates/Templates";

function Template() {
  return (
    <div className="w-screen h-full bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      <Outlet />
    </div>
  );
}

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/templates/curriculo" element={<Curriculo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
