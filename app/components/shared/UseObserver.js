'use client';
import { useEffect } from "react";

export default function useSectionObserver(setActiveSection ) {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            // Update state
            setActiveSection(sectionId);

            // Update URL param without reloading
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [setActiveSection]);
}
