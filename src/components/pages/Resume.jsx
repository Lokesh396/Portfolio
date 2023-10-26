import { LucideBriefcase, LucideGraduationCap } from "lucide-react";
import Skills from "./Skills";
import { Link } from "react-router-dom";

function Resume() {
  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="resume-card">
        <h3 className="mb-2">Resume</h3>
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            <h3>
              <LucideGraduationCap color="#FF9C1A"></LucideGraduationCap>{" "}
              Education
            </h3>
            <div className="resume-card1 ">
              <p className="text-color">2019-2023</p>
              <p>Computer Science and Engineering</p>

              <Link
                className="link-navigate"
                onClick={() => {
                  handleNavigation("https://www.rguktrkv.ac.in/indexrkv.php");
                }}
              >
                IIIT RGUKT Rk Valley
              </Link>
            </div>
            <div className="resume-card2 mt-3">
              <p className="text-color">2017-2019</p>
              <p>Pre University Course</p>

              <Link
                className="link-navigate"
                onClick={() => {
                  handleNavigation("https://www.rguktrkv.ac.in/indexrkv.php");
                }}
              >
                IIIT RGUKT Rk Valley
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column w-100">
            <h3>
              <LucideBriefcase color="#FF9C1A"></LucideBriefcase> Experience
            </h3>
            <div className="resume-card2">
              <p className="text-color">2023-present</p>
              <p>Junior Software Engineer</p>

              <Link
                className="link-navigate"
                onClick={() => {
                  handleNavigation("https://www.way2news.com/");
                }}
              >
                Way2News
              </Link>
            </div>
            <div className="resume-card1 mt-3">
              <p className="text-color">2022-2023</p>
              <p>Software Engineer Trainee</p>

              <Link
                className="link-navigate"
                onClick={() => {
                  handleNavigation("https://www.way2news.com/");
                }}
              >
                Way2News
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
    </>
  );
}

export default Resume;
