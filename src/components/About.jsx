import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { skills } from "../data/skills";
import ScrollReveal from "./ScrollReveal";
// Import Spline untuk React
import Spline from '@splinetool/react-spline';

const educationData = [
  {
    date: "2023 - Present",
    school: "President University",
    degree: "Bachelor's Degree in Informatics",
    details: [
      "75% Jababeka Scholarship Awardee",
      "Cumulative GPA of 3.71, with a perfect 4.00 GPA in the current semester.",
      "Relevant Coursework: Software Engineering, Object Oriented and Visual Programming, Server-Side Internet-Programming, Database Systems, Computer Network, dan Programming Concepts, Artificial Intelligence, Robotics, dan Automatic Navigation System, IoT Programming, Microcontroller, Embedded System, Wireless and Mobile Programming.",
    ],
  },
  {
    date: "2021 - 2023",
    school: "SMAN 12 Pekanbaru",
    degree: "Mathematics and Sciences",
    details: [
      "Average diploma score of 90.92.",
      "School representative for the National Science Olympiad in Astronomy",
    ],
  },
];

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Three.js Skills Canvas logic
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 15;

    const iconGeometry = new THREE.TetrahedronGeometry(0.4, 0);
    const iconMaterial = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    const icons = [];
    for (let i = 0; i < 200; i++) {
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.x = (Math.random() - 0.5) * 60;
      icon.position.y = (Math.random() - 0.5) * 120;
      icon.position.z = (Math.random() - 0.5) * 20;
      icon.rotation.x = Math.random() * Math.PI;
      icon.rotation.y = Math.random() * Math.PI;
      scene.add(icon);
      icons.push({
        mesh: icon,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        floatSpeed: (Math.random() - 0.5) * 0.01,
      });
    }

    const updateSize = () => {
      const width = section.offsetWidth;
      const height = section.offsetHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(section);

    let animationId;
    function animate() {
      animationId = requestAnimationFrame(animate);
      icons.forEach((icon) => {
        icon.mesh.rotation.x += icon.rotSpeed;
        icon.mesh.rotation.y += icon.rotSpeed;
        icon.mesh.position.y += Math.sin(Date.now() * 0.001) * icon.floatSpeed;
      });
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <canvas id="about-canvas" ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 1, zIndex: 99 }}></canvas>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="fade-in">About Me</h2>

        {/* Profile Info */}
        <div className="about-content">
          <div className="about-img">
            {/* Mengganti foto dengan Spline 3D */}
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/igiYDiSgOJsvuZJB/scene.splinecode" />
            </div>
          </div>
          <ScrollReveal className="about-text">
            <h3>Hi! I am Sarah</h3>
            <p>
              6th semester Informatics student at President University,
              concentrating in Internet of Things. My goal is to create
              technology that improves lives and makes a positive impact.
            </p>
            <p>
              I have a strong foundation in programming, web development, data
              analisys, database management, and IoT systems. Through various
              hands on projects in IoT, AI, mobile, and web development, I've
              developed practical technical skills and problem solving ability.
            </p>
            <div className="btn-group">
              <a href="#contact" className="btn">
                Let's Talk
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Section */}
        <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="fade-in">Education Journey</h2>
          <div style={{ width: '100%', maxWidth: '800px', padding: '0 20px' }}>
            <ScrollReveal>
              <div className="education-single-card">
                <div
                  className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className="flip-card-inner">

                    {/* Sisi Depan (President University) */}
                    <div className="flip-card-front">
                      <span className="timeline-date">{educationData[0].date}</span>
                      <h3>{educationData[0].school}</h3>
                      <h4>{educationData[0].degree}</h4>
                      {educationData[0].details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                      <div className="flip-hint">
                        <span>Click to flip <i className="fa-solid fa-rotate"></i></span>
                      </div>
                    </div>

                    {/* Sisi Belakang (SMAN 12) */}
                    <div className="flip-card-back">
                      <span className="timeline-date">{educationData[1].date}</span>
                      <h3>{educationData[1].school}</h3>
                      <h4>{educationData[1].degree}</h4>
                      {educationData[1].details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                      <div className="flip-hint">
                        <span>Click to flip <i className="fa-solid fa-rotate"></i></span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Skills Section */}
        <div style={{ marginTop: '100px' }}>
          <h2 className="fade-in">My Skills</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <ScrollReveal key={index}>
                <div className="skill-card">
                  <div className="skill-icon">
                    <i className={skill.iconClass}></i>
                    {skill.hasCpp && (
                      <i style={{ fontSize: "1.5rem", marginLeft: "-10px" }}>
                        ++
                      </i>
                    )}
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.width}%` }}
                    ></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}