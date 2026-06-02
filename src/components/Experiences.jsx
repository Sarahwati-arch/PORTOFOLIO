import { useState } from "react";
import {
  experiences,
  additionalRoles,
  documentationImages,
} from "../data/experiences";
import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";

export default function Experiences() {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(0);
  const [filter, setFilter] = useState("Organization");

  const workExperiences = experiences.filter(exp => exp.category === "Work");
  const filteredExperiences = experiences.filter(exp => exp.category === filter);

  return (
    <section id="experiences">
      <div className="container">
        <ScrollReveal>
          <h2>Work Experience</h2>
        </ScrollReveal>

        <div className="work-tabs-container">
          <ScrollReveal>
            <div className="work-tabs">
              {workExperiences.map((exp, idx) => (
                <button
                  key={idx}
                  className={`work-tab ${selectedWorkIndex === idx ? "active" : ""}`}
                  onClick={() => setSelectedWorkIndex(idx)}
                >
                  {exp.org || exp.title}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {workExperiences.length > 0 && (
            <ScrollReveal>
              <div className="work-tab-content">
                <div
                  className="work-content-bg"
                  style={{
                    backgroundImage: `url(${workExperiences[selectedWorkIndex].images?.[0] || workExperiences[selectedWorkIndex].image})`
                  }}
                ></div>
                <div className="work-content-overlay"></div>

                <div className="work-content-inner">
                  <div className="work-visual">
                    {workExperiences[selectedWorkIndex].images ? (
                      <img src={workExperiences[selectedWorkIndex].images[0]} alt={workExperiences[selectedWorkIndex].org || workExperiences[selectedWorkIndex].title} />
                    ) : workExperiences[selectedWorkIndex].image ? (
                      <img src={workExperiences[selectedWorkIndex].image} alt={workExperiences[selectedWorkIndex].org || workExperiences[selectedWorkIndex].title} />
                    ) : null}
                  </div>
                  <div className="work-details">
                    <h3>{workExperiences[selectedWorkIndex].title}</h3>
                    <div className="work-desc">
                      {workExperiences[selectedWorkIndex].details ? (
                        workExperiences[selectedWorkIndex].details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))
                      ) : (
                        <p>{workExperiences[selectedWorkIndex].description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      <div className="container" style={{ paddingTop: '180px' }}>
        <ScrollReveal>
          <h2>Leadership Experience</h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="filters">
            <button
              className={`filter-btn ${filter === "Organization" ? "active" : ""}`}
              onClick={() => setFilter("Organization")}
            >
              Organization
            </button>
            <button
              className={`filter-btn ${filter === "Volunteer" ? "active" : ""}`}
              onClick={() => setFilter("Volunteer")}
            >
              Volunteer
            </button>
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
        </div>
      </div>
    </section>
  );
}