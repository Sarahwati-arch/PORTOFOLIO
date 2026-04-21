import { projects } from "../data/projects";
import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="fade-in">Featured Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ScrollReveal key={index}>
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
