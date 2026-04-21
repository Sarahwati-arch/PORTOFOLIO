import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const educationData = [
  {
    date: "2023 - Present",
    school: "President University",
    degree: "Bachelor's Degree in Informatics",
    details: [
      "75% Jababeka Scholarship Awardee",
      "Achieved a cumulative GPA of 3.80, with a perfect 4.00 GPA in the current semester.",
      "Relevant Coursework: Robotics, IoT Programming, Microcontroller, Embedded System, Automatic Navigation System, Artificial Intelligence, Software Enggineering, Computer Network, Object Oriented and Visual Programming, Server-Side Internet-Programming, Programming Concepts Database Systems, Wireless and Mobile Programming",
    ],
  },
  {
    date: "2021 - 2023",
    school: "SMAN 12 Pekanbaru",
    degree: "Mathematics and Sciences",
    details: [
      "Completed high school education with an average diploma score of 90.92.",
      "School representative for the National Science Olympiad in Astronomy",
    ],
  },
];

export default function Education() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const item = timeline.querySelector(".timeline-item");
    if (!item) return;

    const style = getComputedStyle(item);
    const gap = parseInt(style.marginRight) || 40;
    const itemWidth = item.offsetWidth;
    const scrollAmount = itemWidth + gap;

    let autoScroll = true;

    function scrollNextCard() {
      if (!autoScroll) return;
      const maxScrollLeft = timeline.scrollWidth - timeline.clientWidth;
      if (timeline.scrollLeft + scrollAmount >= maxScrollLeft - 5) {
        timeline.scrollLeft = 0;
      } else {
        timeline.scrollLeft += scrollAmount + 70;
      }
      setTimeout(scrollNextCard, 2500);
    }

    const timeout = setTimeout(scrollNextCard, 1000);

    ["wheel", "touchstart", "mousedown"].forEach((event) => {
      timeline.addEventListener(event, () => {
        autoScroll = false;
      });
    });

    return () => {
      clearTimeout(timeout);
      autoScroll = false;
    };
  }, []);

  return (
    <section id="education">
      <div className="container">
        <h2 className="fade-in">Education Journey</h2>
        <div className="education-timeline" id="education-timeline" ref={timelineRef}>
          {educationData.map((edu, index) => (
            <ScrollReveal key={index}>
              <div className="timeline-item">
                <div className="timeline-content">
                  <span className="timeline-date">{edu.date}</span>
                  <h3>{edu.school}</h3>
                  <h4>{edu.degree}</h4>
                  {edu.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
