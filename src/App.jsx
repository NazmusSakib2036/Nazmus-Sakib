import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./assets/css/index.css";

import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";
// import S_link from "./pages/social_link/s_link";

export default function App() {
  const location = useLocation();

  // Auto-scroll to section on route change
  useEffect(() => {
    const path = location.pathname;
    const sectionId = path === "/" ? "hero" : path.slice(1); // remove leading "/"

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />

      <div id="hero">
        <Hero />
      </div>

      {/* <div className="s-links">
        <S_link />
        </div> */}

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <div className="footer">  
        <Footer />
        </div>
    </>
  );
}
