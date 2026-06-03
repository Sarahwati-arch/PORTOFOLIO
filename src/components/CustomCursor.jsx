import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;

    function updatePosition() {
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(updatePosition);
    }
    rafId = requestAnimationFrame(updatePosition);

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onMouseDown() {
      cursor.classList.add("active");
    }

    function onMouseUp() {
      cursor.classList.remove("active");
    }

    function onLinkEnter() {
      cursor.classList.add("active");
    }

    function onLinkLeave() {
      cursor.classList.remove("active");
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    const addLinkListeners = () => {
      const links = document.querySelectorAll("a, button, .hamburger");
      links.forEach((link) => {
        link.addEventListener("mouseenter", onLinkEnter);
        link.addEventListener("mouseleave", onLinkLeave);
      });
      return links;
    };

    const links = addLinkListeners();

    const observer = new MutationObserver(() => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onLinkEnter);
        link.removeEventListener("mouseleave", onLinkLeave);
      });
      addLinkListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onLinkEnter);
        link.removeEventListener("mouseleave", onLinkLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="glow" ref={glowRef}></div>
    </>
  );
}
