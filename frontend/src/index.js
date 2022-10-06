import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Fruit } from "./Fruit";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <strong>Pihi Group ©️ Fruit Market</strong>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Fruit />} />
    </Routes>
  </BrowserRouter>
);
