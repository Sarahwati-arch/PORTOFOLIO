import { useEffect } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const phrases = [
  " AI Developer ",
  " IOT Enggineering ",
  " Fullstack Web Developer ",
  " Backend Developer ",
  " Mobile App Developer ",
  " Data Analys ",
];

export default function Hero() {
  const typewriterText = useTypewriter(phrases);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#2563eb" },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#2563eb",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: { opacity: 1 },
            },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  function handleScrollClick(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  }

  return (
    <section id="hero">
      <div id="particles-js"></div>
      <div className="container">
        <div className="hero-content slide-in-left">
          <h1>Sarahwati</h1>
          <div className="typewriter">
            I'm a&nbsp;
            <span className="typewriter-text">{typewriterText}</span>
          </div>
          <p>
            "Software is a great combination between artistry and engineering."
            &ndash; Bill Gates
          </p>
          <p>
            I believe this quote perfectly describes what I enjoy most about
            coding. It's not just about solving problems with logic, it's also
            about designing something useful, beautiful, and easy to use.
          </p>
          <div className="btn-group">
            <a href="files/CV ATS SARAHWATI.pdf" className="btn" download>
              Curriculum Vitae
            </a>
            <a
              href="#projects"
              className="btn"
              onClick={(e) => handleScrollClick(e, "#projects")}
              style={{
                marginLeft: "15px",
                background: "transparent",
                border: "2px solid var(--primary)",
              }}
            >
              View Projects
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Sarahwati-arch" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/sarah-wati-5a8989243" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/vvtysr/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/6282175726492" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
}
