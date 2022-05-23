import React, { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const send = event => {
    const data = new FormData(); // Para enviar 
    data.append("name", name);
    data.append("fotos", file);

    axios.post("http://localhost:5000/upload", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form action="#">
          <div className="flex">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              onChange={event => {
                const { value } = event.target;
                setName(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">Arquivo</label>
            <input
              type="file"
              id="file"
              onChange={event => {
                const file = event.target.files[0]; // IMPORTANTE
                setFile(file);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default App;
