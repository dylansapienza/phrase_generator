import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [phrase, setPhrase] = useState("");

  function getPhrase() {
    var data = { number_of_words: 5 };

    axios
      .post("http://localhost:8888/api/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setPhrase(response.data.phrase);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{phrase}</h1>
        <button onClick={getPhrase}>Generate!</button>
      </header>
      <p>Dylan</p>
    </div>
  );
}

export default App;
