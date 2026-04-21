import {
  organizationExperiences,
  volunteerExperiences,
  additionalRoles,
  documentationImages,
} from "../data/experiences";
import ScrollReveal from "./ScrollReveal";
import Slideshow from "./Slideshow";

export default function Experiences() {
  return (
    <section id="experiences">
      <div className="container">
        <h2 className="fade-in">Organization Experiences</h2>
        <div className="experience-timeline">
          {organizationExperiences.map((exp, index) => (
            <ScrollReveal key={index}>
              <div className="timeline-item">
                <div className="timeline-content">
                  <span className="timeline-date">{exp.date}</span>
                  <div className="timeline-img">
                    <img src={exp.image} alt={exp.title} />
                  </div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.role}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <h2 className="fade-in" style={{ marginTop: "100px" }}>
          Volunteer Experiences
        </h2>
        <ScrollReveal>
          <div className="card-experience-grid">
            {volunteerExperiences.map((exp, index) => (
              <div key={index} className="card-experience">
                <Slideshow images={exp.images} />
                <h3>{exp.title}</h3>
                <h4>{exp.role}</h4>
                <p className="card-org">
                  {exp.org}
                  <br />
                  <span>{exp.date}</span>
                </p>
                <ul>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="card-experience" style={{ gridColumn: "1 / -1" }}>
              <h3>Additional Roles</h3>
              <ul style={{ columns: 2, columnGap: 30 }}>
                {additionalRoles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>

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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
