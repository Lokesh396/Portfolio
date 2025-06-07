import React, { forwardRef } from 'react';
import About from '../Sections/About';
import Experience from '../Sections/Experience';
import Projects from '../Sections/Projects';

const Body = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="md:w-[52%] scroll-smooth">
      <About />
      <Experience />
      <Projects />
    </div>
  );
});

export default Body;
