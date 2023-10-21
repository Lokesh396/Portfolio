import PythonIcon from "../../assets/images/python-icon.svg";
import FullStackImg from "../../assets/images/full-stack-24.png";

function About() {
  return (
    <div className=" about-page mt-3 rounded">
      <h1>ABOUT ME</h1>

      <p className="my-3 fw-medium">
        Hello there! I am thrilled to welcome you to my portfolio. I am a
        passionate and versatile full-stack developer with a keen interest in
        exploring the latest cutting-edge technologies. My journey in the world
        of web development has been nothing short of exhilarating, and I
        constantly strive to enhance my skills and embrace emerging trends in
        the industry.
      </p>
      <h1>What I do!</h1>
      <div className="d-flex gap-3 justify-content-between mt-3">
        <div className="about-card">
          <h3>
            <img
              style={{ width: "24px", height: "24px" }}
              src={FullStackImg}
            ></img>{" "}
            Web Development
          </h3>
          <p>
            As a developer, I find myself most captivated by the power and
            flexibility of NEXT.js. I am always eager to dive into new projects
            that leverage NEXT.js and discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>
        <div className="about-card">
          <h3>
            <img
              style={{ width: "24px", height: "24px" }}
              src={PythonIcon}
            ></img>{" "}
            Python Programming
          </h3>
          <p>
            As a developer, I find myself most captivated by the power and
            flexibility of NEXT.js. I am always eager to dive into new projects
            that leverage NEXT.js and discover innovative ways to create fast,
            scalable, and user-friendly applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
