import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="text-slate-300 text-center md:text-left lg:mb-16"
    >
      <p className="leading-relaxed mb-4 text-justify">
        I'm , a
        software development engineer who loves building impactful products that
        scale. I specialize in full-stack web development and have hands-on
        experience with scalable systems, ad tech infrastructure, and automation
        tools.
      </p>
      <p className="leading-relaxed mb-4 text-justify">
        Recently, I built a YouTube automation system that organically hit
        <span className="font-semibold text-indigo-400"> 60k+ views in 10 days</span>.
        I'm also building a smart ad delivery alert system that monitors anomalies across ad networks
        using ClickHouse, PostgreSQL, and Node.js.
      </p>
      <p className="leading-relaxed mb-4 text-justify">
        I'm not just about code — I'm about solving the right problems, shipping
        fast, and learning relentlessly. I take pride in writing clean, maintainable
        code and designing systems with clarity and purpose.
      </p>
      <p className="leading-relaxed text-justify">
        I'm currently preparing for SDE roles at top product companies. If you're
        building something exciting or looking for someone who gets things done
        — let's talk.
      </p>
    </section>
  )
}

export default About