import { useState } from "react";
import {
  experiences,
  additionalRoles,
  documentationImages,
} from "../data/experiences";
import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";

export default function Experiences() {
  const [filter, setFilter] = useState("Work");

  const categories = ["Work", "Organization", "Volunteer"];

  const filteredExperiences = experiences.filter(exp => exp.category === filter);

  return (
    <section id="experiences">
      <div className="container">
        <ScrollReveal>
          <h2 className="fade-in">Experiences</h2>
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

        <div className="card-experience-grid">
          {filteredExperiences.map((exp, index) => (
            <ScrollReveal key={`${filter}-${index}`}>
              <div className="card-experience">
                {exp.images ? (
                  <Slideshow images={exp.images} />
                ) : exp.image ? (
                  <div className="timeline-img" style={{ marginBottom: '20px' }}>
                    <img src={exp.image} alt={exp.title} style={{ width: '100%', borderRadius: '10px' }} />
                  </div>
                ) : null}
                <h3>{exp.title}</h3>
                <h4>{exp.role}</h4>
                <p className="card-org">
                  {exp.org || exp.description}
                  <br />
                  <span>{exp.date}</span>
                </p>
                {exp.details && (
                  <ul>
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* Menampilkan Additional Roles HANYA ketika filter "Volunteer" aktif */}
          {filter === "Volunteer" && (
            <ScrollReveal>
              <div className="card-experience" style={{ gridColumn: "1 / -1" }}>
                <h3>Additional Roles</h3>
                <ul style={{ columns: 2, columnGap: 30 }}>
                  {additionalRoles.map((role, i) => (
                    <li key={i}>{role}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}

          {/* <ScrollReveal>
            <div className="card-experience" style={{ gridColumn: "1 / -1" }}>
              <h3>Documentation Gallery</h3>
              <Slideshow
                images={documentationImages}
                style={{ height: 250, borderRadius: 12, overflow: "hidden" }}
              />
              <p className="card-org" style={{ marginTop: 15 }}>
                Photos from various volunteering, leadership, and event
                organizing activities in 2024&ndash;2025.
              </p>
            </div>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
}