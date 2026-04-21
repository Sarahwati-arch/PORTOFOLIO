import { useState, useEffect } from "react";

export default function Slideshow({ images, style }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-img slideshow" style={style}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`slide${i === current ? " active" : ""}`}
        />
      ))}
    </div>
  );
}
