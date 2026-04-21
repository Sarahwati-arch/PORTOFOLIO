const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/Sarahwati-arch", icon: "fab fa-github" },
  { href: "https://linkedin.com/in/sarah-wati-5a8989243", icon: "fab fa-linkedin-in" },
  { href: "https://www.instagram.com/vvtysr/", icon: "fab fa-instagram" },
  { href: "https://wa.me/6282175726492", icon: "fab fa-whatsapp" },
];

export default function Footer() {
  function handleClick(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          Sarah<span>wati</span>
        </div>
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-social">
          {socialLinks.map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noreferrer">
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Sarahwati. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
