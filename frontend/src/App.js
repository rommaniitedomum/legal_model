import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Home/Main";
import Consultation from "./components/Consultation/Consultation";
import Precedent from "./components/Precedent/Precedent";
import Template from "./components/Template/Template";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/precedent" element={<Precedent />} />
          <Route path="/template" element={<Template />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
