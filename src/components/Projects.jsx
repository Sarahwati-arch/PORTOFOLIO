import { useState } from "react";
import { projects } from "../data/projects";
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
      </div>
    </section>
  );
}