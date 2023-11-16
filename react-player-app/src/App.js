import React from "react";
import logo from "./logo.svg";
import "./App.css";

import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="App">
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
