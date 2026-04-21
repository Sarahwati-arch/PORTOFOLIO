import { useState, useEffect } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 500);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader${fading ? " fade" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}
