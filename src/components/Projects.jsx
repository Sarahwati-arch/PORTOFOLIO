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
  // Logika filter disederhanakan karena hanya perlu mencocokkan kategori spesifik

  return (
    <section id="projects">
      <div className="container">
        <ScrollReveal>
          <h2>My Projects</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="projects-accordion">
            {categories.map((cat) => {
              const isActive = filter === cat;
              const catProjects = projects.filter((project) => project.category === cat);

              return (
                <div
                  key={cat}
                  className={`projects-accordion-item ${isActive ? "active" : ""}`}
                  onClick={() => !isActive && setFilter(cat)}
                >
                  <div className="accordion-tab-vertical">
                    <h3>{cat}</h3>
                  </div>
                  <div className="accordion-content">
                    <div className="accordion-header">
                      <h3 className="active-category-title">{cat} Projects</h3>
                      <span className="project-count">{catProjects.length} Projects</span>
                    </div>
                    <div className="projects-container">
                      {catProjects.map((project, index) => (
                        <div key={`${cat}-${index}`} className="project-card">
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
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}