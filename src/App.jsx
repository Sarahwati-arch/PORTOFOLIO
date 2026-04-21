import { useState, useEffect } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [sticky, setSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setSticky(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 500);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Preloader />
      <CustomCursor />
      <BackToTop visible={showBackToTop} onClick={scrollToTop} />
      <Header sticky={sticky} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </>
  );
}
