import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
