import PythonIcon from "../../assets/images/python-icon.svg";
import FullStackImg from "../../assets/images/full-stack-24.png";

function About() {
  return (
    <div className="about-page mt-3 rounded">
      <h3>ABOUT ME</h3>

      <p className="my-3 fw-medium">
        Hello there! I am thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h3>What I do!</h3>
      <div className="d-flex about-flex gap-3  mt-3">
        <div className="about-card">
          <h5>
            <img
              style={{ width: "24px", height: "24px" }}
              src={FullStackImg}
            ></img>{" "}
            Web Development
          </h5>
          <p>
            As a web developer, I&#39;m deeply passionate about harnessing the
            potential of React.js to build dynamic, high-performance
            applications. I enthusiastically explore opportunities to employ
            React.js, constantly seeking novel approaches to craft responsive,
            scalable, and user-centric software solutions. <br /> Additionally, my
            expertise extends to Node.js and Express.js, and I possess a wealth
            of experience working with diverse databases, including MongoDB,
            MySQL, and PostgreSQL. This well-rounded skill set allows me to
            design and develop robust backend systems, ensuring the seamless
            operation of web applications.
          </p>
        </div>
        <div className="about-card">
          <h5>
            <img
              style={{ width: "24px", height: "24px" }}
              src={PythonIcon}
            ></img>{" "}
            Python Programming
          </h5>
          <p>
          I have a strong foundation in Python and leverage this knowledge for contributions to open-source projects on GitHub, problem-solving on platforms like LeetCode, and tackling algorithmic challenges. <br /> Furthermore, I possess experience in utilizing Python for machine learning tasks, and during my time at university, I successfully completed two substantial projects, showcasing my proficiency with the language. These experiences have enriched my skills and broadened my expertise in Python development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
