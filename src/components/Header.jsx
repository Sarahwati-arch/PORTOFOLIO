import { useState } from "react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ sticky }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(e, href) {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <header className={sticky ? "sticky" : ""}>
      <nav>
        <div className="logo">
          Sarah<span>wati</span>
        </div>
        <div className={`nav-links${menuOpen ? " active" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div
          className={`hamburger${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </header>
  );
}
