import { NavBar } from "./componentes/NavBar/NavBar";
import "./estilo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./componentes/NavBar/NavBar.css";
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { useState } from "react";

import { ClickTracker } from "./componentes/ClickTracker/ClickTracker.js";

function App() {


  const [montar, setMontar] = useState(true)

  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ClickTracker />

      {/* 
      <button onClick={()=> {setMontar(!montar)} }> Montar/Desmontar </button>
      { montar && <ClickTracker/> } */}
    </>

  );
}

export default App;