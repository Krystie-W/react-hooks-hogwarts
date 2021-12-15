import React from "react";
import Nav from "./Nav";
import Cards from "./Cards";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Cards hogs ={hogs}/>
    </div>
  );
}

export default App;
