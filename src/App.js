import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {

  return (
    <BrowserRouter>
      <section>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route path="/about" element={ <AboutMe /> } />
          <Route path="/projects" element={ <Projects /> }/>
          <Route path="/resume" element={ <Resume /> }/>
        </Routes>
      </section>
    </BrowserRouter>
  );
}
