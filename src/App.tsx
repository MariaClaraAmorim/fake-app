import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import { LayoutHome } from "./components/Layout/LayoutHome";
import { LayoutCat } from "./components/Layout/LayoutCat";
import { LayoutRota } from "./components/Layout/LayoutRota";
import { LayoutPerfil } from "./components/Layout/LayoutPerfil";

import React from "react";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHome />} />

          <Route path="/perfilusuario/:userId" element={<LayoutPerfil />} />
          <Route path="/catgenerator" element={<LayoutCat />} />
          <Route
            path="/user/:userId/postrota/:postId"
            element={<LayoutRota />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };
