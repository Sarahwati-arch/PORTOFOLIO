import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="fade-in">About Me</h2>
        <div className="about-content">
          <ScrollReveal className="about-img">
            <img src="foto sarah.jpg" alt="Sarahwati" />
          </ScrollReveal>
          <ScrollReveal className="about-text">
            <h3>I'm Sarahwati, or just call me Sarah</h3>
            <p>
              6th semester Informatics student at President University,
              concentrating in Internet of Things. My goal is to create
              technology that improves lives and makes a positive impact.
            </p>
            <p>
              I have a strong foundation in programming, web development, data
              analisys, database management, and IoT systems. Through various
              hands on projects in IoT, AI, mobile, and web development, I've
              developed practical technical skills and problem solving ability.
            </p>
            <p>
              I'm a fast learner who enjoys exploring new technologies beyond the
              classroom. Through various activities outside of class, I've had
              the chance to develop not only my technical skills, but also
              strengthen my leadership, teamwork, and communication abilities.
            </p>
            <div className="btn-group">
              <a href="#contact" className="btn">
                Let's Talk
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
