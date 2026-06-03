import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Robot3D from "./Robot3D";

const contactItems = [
  // {
  //   icon: "fas fa-phone",
  //   title: "Phone",
  //   text: "+62 821 7572 6492",
  // },
  {
    icon: "fas fa-envelope",
    title: "Email",
    text: "sarahwati2004@gmail.com",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    text: "South Jakarta, DKI Jakarta, Indonesia",
  },
];

const socialLinks = [
  { href: "https://github.com/Sarahwati-arch", icon: "fab fa-github" },
  { href: "https://linkedin.com/in/sarah-wati-5a8989243", icon: "fab fa-linkedin-in" },
  { href: "https://www.instagram.com/vvtysr/", icon: "fab fa-instagram" },
  // { href: "mailto:sarahwati2004@gmail.com", icon: "fas fa-envelope" },
  // { href: "https://wa.me/6282175726492", icon: "fab fa-whatsapp" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqeozlgk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Thank you for your message! I will get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  return (
    <section id="contact">
      <div className="container">
        <ScrollReveal>
          <h2>Get In Touch</h2>
        </ScrollReveal>
        <div className="contact-container">
          <div className="contact-info">
            {contactItems.map((item, index) => (
              <ScrollReveal key={index}>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="contact-text">
                  <h3>Social Media</h3>
                  <div className="social-links" style={{ marginTop: 10 }}>
                    {socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* 3D Robot Character */}
            <ScrollReveal>
              <div className="robot-container" style={{ marginTop: '2rem', height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Robot3D />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn"
                  style={{ width: "100%" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
