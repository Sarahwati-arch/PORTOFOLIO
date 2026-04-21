import { useEffect, useRef } from "react";
import * as THREE from "three";
import { skills } from "../data/skills";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const iconGeometry = new THREE.TetrahedronGeometry(1, 0);
    const iconMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
    });

    const icons = [];
    for (let i = 0; i < 20; i++) {
      const icon = new THREE.Mesh(iconGeometry, iconMaterial);
      icon.position.x = (Math.random() - 0.5) * 20;
      icon.position.y = (Math.random() - 0.5) * 20;
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

    function handleResize() {
      if (canvas.clientWidth > 0 && canvas.clientHeight > 0) {
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="skills">
      <canvas id="skills-canvas" ref={canvasRef}></canvas>
      <div className="container">
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
    </section>
  );
}
