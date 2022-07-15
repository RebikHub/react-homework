import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import TimeAttackPage from "./components/TimeAttackPage";

export default function App() {
  return (
    <HashRouter>
        <div>
          <Menu />
          <div className="page">
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/drift" element={<DriftPage/>} />
              <Route path="/timeattack" element={<TimeAttackPage/>} />
              <Route path="/forza" element={<ForzaPage/>} />
            </Routes>
          </div>
        </div>
    </HashRouter>
  );
}