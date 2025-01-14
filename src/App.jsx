/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/JsxTheorie";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<JsxTheorie />}></Route>
          <Route path="/test" element={<>Ma page test</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
