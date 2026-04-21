import { useState, useEffect, useRef } from "react";

export function useTypewriter(phrases, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const phraseIndexRef = useRef(0);
  const letterIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function type() {
      const phraseIndex = phraseIndexRef.current;
      const letterIndex = letterIndexRef.current;
      const isDeleting = isDeletingRef.current;
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting && letterIndex <= currentPhrase.length) {
        setText(currentPhrase.slice(0, letterIndex));
        letterIndexRef.current = letterIndex + 1;

        if (letterIndex === currentPhrase.length) {
          isDeletingRef.current = true;
          timeoutRef.current = setTimeout(type, pauseTime);
          return;
        }
        timeoutRef.current = setTimeout(type, typingSpeed);
      } else if (isDeleting && letterIndex > 0) {
        const newIndex = letterIndex - 1;
        letterIndexRef.current = newIndex;
        setText(currentPhrase.slice(0, newIndex));
        timeoutRef.current = setTimeout(type, deletingSpeed);
      } else if (isDeleting && letterIndex === 0) {
        isDeletingRef.current = false;
        phraseIndexRef.current = (phraseIndex + 1) % phrases.length;
        timeoutRef.current = setTimeout(type, typingSpeed);
      }
    }

    const startTimeout = setTimeout(() => {
      type();
    }, 1000);

    return () => {
      clearTimeout(startTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phrases, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
