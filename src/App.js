import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
