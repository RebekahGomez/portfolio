import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
