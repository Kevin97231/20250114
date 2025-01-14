/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/JsxTheorie";
import Navbar from "./components/Navbar";
import HookUseState from "./view/HookUseState";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<JsxTheorie />}></Route>
          <Route path="/use-state" element={<HookUseState />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
