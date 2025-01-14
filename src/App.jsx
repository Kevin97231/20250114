/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/JsxTheorie";

function App() {
  return (
    <>
      <BrowserRouter>
        <p>NavBar</p>

        <Routes>
          <Route path="/" element={<JsxTheorie />}></Route>
          <Route path="/test" element={<>Ma page test</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
