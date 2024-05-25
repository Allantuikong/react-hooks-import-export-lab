import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  console.log("App component");
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
