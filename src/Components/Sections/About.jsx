import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-300"
    >
      <h5 className='text-left mb-2 py-4 sticky top-0 bg-slate-900 text-white text-base font-semibold lg:hidden'>ABOUT</h5>
      <p className="leading-relaxed mb-4 text-justify">
        I'm Lokesh, a software engineer focused on building scalable and impactful web platforms. I specialize in full-stack development and have hands-on experience with ad tech infrastructure, automation systems, and performance monitoring tools.
      </p>
      <p className="leading-relaxed mb-4 text-justify">
        Recently, I built a fully automated YouTube Shorts generation system that organically reached
        <span className="font-semibold text-indigo-400"> 60K+ views in just 10 days</span>
      </p>
      <p className="leading-relaxed mb-4 text-justify">
        I’m driven by solving real problems, shipping fast, and writing clean, maintainable code. Whether it’s designing backend architecture, optimizing frontend performance, or integrating third-party APIs — I aim for clarity, efficiency, and impact.
      </p>
    </section>
  )
}

export default About
