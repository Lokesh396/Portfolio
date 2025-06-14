import React, { useRef, useEffect } from 'react';
import About from '../Sections/About';
import Experience from '../Sections/Experience';
import Projects from '../Sections/Projects';
import Certifications from '../Sections/Certifications';
import Footer from '../Sections/Footer';
import { useActiveSection } from "../context/ActiveSectionContext";

const RoutesObj = [
  { id: 1, name: "ABOUT", target: "#about" },
  { id: 2, name: "EXPERIENCE", target: "#experience" },
  { id: 3, name: "PROJECTS", target: "#projects" },
  { id: 4, name: "CERTIFICATIONS", target: "#certifications" },
];
const Body = () => {
  const ref = useRef(null);
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150; // adjust offset if needed
      for (const { target } of RoutesObj) {
        const section = document.querySelector(target);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(target);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);
  return (
    <div ref={ref} className="lg:w-[52%] w-full scroll-smooth pt-24 lg:py-24">
    <About />
    <Experience />
    <Projects />
    <Certifications />
    <Footer />
  </div>
  
  );
};

export default Body;
