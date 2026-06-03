import { useState } from "react";
import {
  experiences,
  additionalRoles,
  documentationImages,
} from "../data/experiences";
import { certifications } from "../data/certifications";
import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";
import "./ExperiencesBoard.css";

export default function Experiences() {
  const [activeView, setActiveView] = useState("board"); // "board", "Work", "Organization", "Volunteer"
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(0);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const workExperiences = experiences.filter(exp => exp.category === "Work");
  const orgExperiences = experiences.filter(exp => exp.category === "Organization");
  const volExperiences = experiences.filter(exp => exp.category === "Volunteer");

  const renderBoard = () => (
    <div className="experiences-board-container">
      <ScrollReveal>
        <h2 style={{ marginBottom: "50px" }}>My Experiences</h2>
      </ScrollReveal>

      <ScrollReveal>
        <div className="corkboard">

          <div className="sticky-note" style={{ top: "40px", left: "40px" }}>
            <div className="sticky-note-pin"></div>
            Click any poster to see details!
          </div>

          <div
            className="poster-wrapper poster-org"
            style={{ transform: "rotate(2deg)" }}
            onClick={() => { setActiveView("Organization"); setSelectedSubcategory(""); }}
          >
            <div className="pin"></div>
            <div className="poster-card">
              <h3>Organization</h3>
              <p>Leadership & Communities</p>
            </div>
          </div>


          <div
            className="poster-wrapper poster-work"
            style={{ transform: "rotate(-3deg)" }}
            onClick={() => setActiveView("Work")}
          >
            <div className="pin"></div>
            <div className="poster-card">
              <h3>Work</h3>
              <p>Professional Experience & Internships</p>
            </div>
          </div>

          <div
            className="poster-wrapper poster-vol"
            style={{ transform: "rotate(-1deg)" }}
            onClick={() => { setActiveView("Volunteer"); setSelectedSubcategory(""); }}
          >
            <div className="pin"></div>
            <div className="poster-card">
              <h3>Volunteer</h3>
              <p>Events, Committees & Social Projects</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Certifications Section */}
      <div className="container" style={{ marginTop: '100px' }}>
        <ScrollReveal>
          <h2>My Certifications</h2>
        </ScrollReveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
          gap: '30px'
        }}>
          {certifications.map((cert, index) => (
            <ScrollReveal key={`cert-${index}`}>
              <div className="skill-card" style={{ padding: '20px' }}>
                <div className="cert-image" style={{ marginBottom: '15px' }}>
                  <img src={cert.image} alt={cert.title} style={{ width: '100%', borderRadius: '10px', height: 'auto', aspectRatio: '1.414 / 1', objectFit: 'contain', background: '#fff' }} />
                </div>
                <h3 className="skill-title" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{cert.title}</h3>
                <p className="skill-description" style={{ margin: '0 0 4px 0' }}>{cert.issuer}</p>
                {cert.date && <p className="skill-description" style={{ fontSize: '0.85rem', margin: '0 0 2px 0' }}>Issued: {cert.date}</p>}
                {cert.credentialId && <p className="skill-description" style={{ fontSize: '0.85rem', margin: '0' }}>Credential ID: {cert.credentialId}</p>}
                {cert.link && (
                  <div style={{ marginTop: '12px' }}>
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
  );

  const renderBackButton = (title) => (
    <div>
      <div className="detail-view-header">
        <div>
          <button className="btn-back" onClick={() => setActiveView("board")}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Board
          </button>
        </div>
        <h2 style={{ margin: 0, padding: 0, textAlign: "center" }}>{title} Experience</h2>
        <div></div>
      </div>
    </div>
  );

  const renderWorkExperience = () => (
    <div className="container" style={{ paddingTop: '50px' }}>
      <ScrollReveal>
        {renderBackButton("Work")}
      </ScrollReveal>

      <div className="work-tabs-container" style={{ marginTop: '40px' }}>
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
  );

  const renderGroupedExperience = (type) => {
    const filteredExperiences = type === "Organization" ? orgExperiences : volExperiences;
    const tabs = Array.from(new Set(filteredExperiences.map(exp => exp.subcategory)));
    const activeTab = tabs.includes(selectedSubcategory) ? selectedSubcategory : tabs[0];
    const currentExperiences = filteredExperiences.filter(exp => exp.subcategory === activeTab);

    return (
      <div className="container" style={{ paddingTop: '50px' }}>
        <ScrollReveal>
          {renderBackButton(type)}
        </ScrollReveal>

        <div className="work-tabs-container" style={{ marginTop: '40px' }}>
          <ScrollReveal>
            <div className="work-tabs">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  className={`work-tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setSelectedSubcategory(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '30px' }}>
            {currentExperiences.map((exp, idx) => (
              <ScrollReveal key={idx}>
                <div className="work-tab-content" style={{ minHeight: 'auto', borderRadius: '20px', overflow: 'hidden' }}>
                  <div
                    className="work-content-bg"
                    style={{
                      backgroundImage: `url(${exp.images?.[0] || exp.image})`,
                      borderRadius: '20px'
                    }}
                  ></div>
                  <div className="work-content-overlay" style={{ borderRadius: '20px' }}></div>

                  <div className="work-content-inner" style={{ position: 'relative', zIndex: 2, padding: '40px' }}>
                    <div className="work-visual">
                      {exp.images ? (
                        <img src={exp.images[0]} alt={exp.title} />
                      ) : exp.image ? (
                        <img src={exp.image} alt={exp.title} />
                      ) : null}
                    </div>
                    <div className="work-details">
                      <h3>{exp.title}</h3>
                      {exp.role && <h4 style={{ color: 'var(--primary)', marginBottom: '10px' }}>{exp.role}</h4>}
                      <p className="card-org" style={{ marginBottom: '15px' }}>
                        {exp.org || exp.description}
                        {(exp.org || exp.description) && <br />}
                        <span>{exp.date}</span>
                      </p>
                      
                      {exp.details && (
                        <div className="work-desc">
                          <ul>
                            {exp.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {type === "Volunteer" && activeTab === "Committee" && (
              <ScrollReveal>
                <div className="work-tab-content" style={{ background: 'rgba(0, 0, 0, 0.03)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Additional Roles</h3>
                  <ul style={{ columns: 2, columnGap: '30px', margin: 0, padding: '0 0 0 20px', color: 'var(--dark)' }}>
                    {additionalRoles.map((role, i) => (
                      <li key={i} style={{ marginBottom: '10px' }}>{role}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experiences">
      {activeView === "board" && renderBoard()}
      {activeView === "Work" && renderWorkExperience()}
      {(activeView === "Organization" || activeView === "Volunteer") && renderGroupedExperience(activeView)}
    </section>
  );
}