import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ScrollReveal from "./ScrollReveal";
import ImageMarquee from "./ImageMarquee";
const educationData = [
  {
    date: "2023 - Present",
    school: "President University",
    degree: "Bachelor's Degree in Informatics",
    details: [
      "75% Jababeka Scholarship Awardee.",
      "Cumulative GPA: 3.71 (Achieved a perfect 4.00 GPA in the current semester).",
      "Relevant Coursework: Software Engineering, Database Systems, Artificial Intelligence, IoT Programming, Robotics, and Embedded Systems.",
      "Non-Academic: Orchestra Cellist, Southeast Band."
    ],
  },
  {
    date: "2021 - 2023",
    school: "SMAN 12 Pekanbaru",
    degree: "Mathematics and Sciences",
    details: [
      "Average diploma score of 90.92.",
      "School representative for the National Science Olympiad in Astronomy.",
      "Non-Academic: Basketball Club, Marching Band, Four+Two Band."
    ],
  }
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
    for (let i = 0; i < 80; i++) {
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
        <ScrollReveal>
          <h2>About Me</h2>
        </ScrollReveal>

        {/* Profile Info */}
        <div className="about-content">
          <ImageMarquee />
          <ScrollReveal className="about-text">
            <h3>Hi! I am Sarah</h3>
            <p>
              An Informatics undergraduate at President University.
              With a solid foundation in software engineering, web development, and databases,
              I love pushing boundaries by exploring AI, IoT, and full-stack development.
              I believe great tech is built through collaboration and a drive to solve real-world problems.
            </p>
            <p>
              But enough talking about what I can do, scroll down to see what I've actually built.
            </p>
            <br />
            <div className="btn-group">
              <a href="#contact" className="btn">
                Let's Talk
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Education Section */}
        <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ScrollReveal>
            <h2>Education Journey</h2>
          </ScrollReveal>
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
      </div>
    </section>
  );
}