import React from "react";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Player</h1>
      </header>
      <main>
        <Player />
      </main>
    </div>
  );
}

export default App;
