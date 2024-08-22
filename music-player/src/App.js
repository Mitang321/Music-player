import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from "./components/Player";
import Callback from "./components/Callback";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Music Player</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Player />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
