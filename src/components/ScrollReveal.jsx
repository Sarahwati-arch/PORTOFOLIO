import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    return () => observer.unobserve(el);
  }, []);

  const child = children;

  if (typeof child === "object" && child !== null && child.type) {
    const existingClass = child.props.className || "";
    const wrapperClass = `fade-in ${existingClass}`.trim();
    return (
      <div ref={ref} className={wrapperClass} style={{ width: "100%" }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`fade-in ${className || ""}`.trim()}>
      {children}
    </div>
  );
}
