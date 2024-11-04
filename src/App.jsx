import { About } from "./About.jsx";
import { Work } from "./Work.jsx";
import Home from "./Home.jsx";
import Navbar from "./components/navbar.jsx";
import React from "react";

const App  = () => {
  return(
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Work />
    </div>
  );
};

export default App