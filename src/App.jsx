/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/JsxTheorie";
import Navbar from "./components/Navbar";
import HookUseState from "./view/HookUseState";
import Formulaire from "./view/Formulaire";
import Flux from "./view/Flux";
import { Exercice } from "./view/Exercice";
import { HookUseEffect } from "./view/HookUseEffect";
import { RequeteApi } from "./view/RequeteApi";
import { ExerciceApi } from "./view/ExerciceApi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/use-state" element={<HookUseState />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/flux" element={<Flux />} />
          <Route path="/hook-use-effect" element={<HookUseEffect />} />
          <Route path="/requete" element={<RequeteApi />} />
          <Route path="/exercice" element={<Exercice />} />
          <Route path="/exercice-api" element={<ExerciceApi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
