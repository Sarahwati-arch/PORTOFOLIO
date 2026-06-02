import { useState } from "react";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";

export default function Projects() {
  // Set default filter ke "App" (atau kategori pertama) agar tidak kosong saat awal dimuat
  const [filter, setFilter] = useState("App");

  // "All" dihapus dari daftar kategori
  const categories = ["App", "AI", "IoT"];

  // Logika filter disederhanakan karena hanya perlu mencocokkan kategori spesifik
  const filteredProjects = projects.filter(project => project.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <ScrollReveal>
          <h2>My Projects</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="filter-container">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={`${filter}-${index}`}>
              <div className="project-card">
                <Slideshow images={project.images} />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        className="project-link"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications Section */}
        <div style={{ marginTop: '100px' }}>
          <ScrollReveal>
            <h2>My Certifications</h2>
          </ScrollReveal>
          <div className="skills-container">
            {certifications.map((cert, index) => (
              <ScrollReveal key={`cert-${index}`}>
                <div className="skill-card" style={{ padding: '20px' }}>
                  <div className="cert-image" style={{ marginBottom: '15px' }}>
                    <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '10px', height: '280px', objectFit: 'contain', background: '#fff' }} />
                  </div>
                  <h3 className="skill-title" style={{ fontSize: '1.2rem' }}>{cert.title}</h3>
                  <p className="skill-description" style={{ marginBottom: '5px' }}>{cert.issuer}</p>
                  {cert.date && <p className="skill-description" style={{ fontSize: '0.85rem' }}>Issued: {cert.date}</p>}
                  {cert.credentialId && <p className="skill-description" style={{ fontSize: '0.85rem' }}>Credential ID: {cert.credentialId}</p>}
                  {cert.link && (
                    <div style={{ marginTop: '15px' }}>
                      <a href={cert.link} target="_blank" rel="noreferrer" className="project-link" style={{ fontSize: '0.85rem', padding: '5px 10px' }}>
                        View Credential
                      </a>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}