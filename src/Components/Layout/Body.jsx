import React, { forwardRef } from 'react';
import About from '../Sections/About';
import Experience from '../Sections/Experience';
import Projects from '../Sections/Projects';
import Certifications from '../Sections/Certifications';
import Footer from '../Sections/Footer';

const Body = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="md:w-[52%] scroll-smooth">
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
});

export default Body;
