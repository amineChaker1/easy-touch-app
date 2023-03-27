import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Complete from "./components/Complete";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/app" element={<Home />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
