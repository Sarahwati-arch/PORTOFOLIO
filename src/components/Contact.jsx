import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const contactItems = [
  {
    icon: "fas fa-phone",
    title: "Phone",
    text: "+62 821 7572 6492",
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    text: "sarahwati2004@gmail.com",
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    text: "Bekasi, Indonesia",
  },
];

const socialLinks = [
  { href: "https://github.com/Sarahwati-arch", icon: "fab fa-github" },
  { href: "https://linkedin.com/in/sarah-wati-5a8989243", icon: "fab fa-linkedin-in" },
  { href: "https://www.instagram.com/vvtysr/", icon: "fab fa-instagram" },
  { href: "https://wa.me/6282175726492", icon: "fab fa-whatsapp" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="fade-in">Get In Touch</h2>
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
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
