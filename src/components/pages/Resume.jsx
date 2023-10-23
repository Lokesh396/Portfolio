import { LucideBriefcase, LucideGraduationCap } from "lucide-react";
import Skills from "./Skills";

function Resume() {
  return (
    <>
      <div className="resume-card">
        <h3 className="mb-2">Resume</h3>
        <div className="d-flex">
          <div className="d-flex flex-column w-100">
            <h3><LucideGraduationCap color="#FF9C1A"></LucideGraduationCap>{" "}Education</h3>
            <div className="resume-card1 ">
              <p className="text-color">2019-2023</p>
              <p>Computer Science and Engineering</p>

              <p>IIIT RGUKT Rk Valley</p>
            </div>
            <div className="resume-card2 mt-3">
              <p className="text-color">2017-2019</p>
              <p>Pre University Course</p>

              <p>IIIT RGUKT Rk Valley</p>
            </div>
          </div>
          <div className="d-flex flex-column w-100">
            <h3><LucideBriefcase color="#FF9C1A"></LucideBriefcase>{" "}Experience</h3>
            <div className="resume-card2">
              <p className="text-color">2023-present</p>
              <p>Junior Software Engineer</p>

              <p>Way2News</p>
            </div>
            <div className="resume-card1 mt-3">
              <p className="text-color">2022-2023</p>
              <p>Software Engineer Trainee</p>

              <p>Way2News</p>
            </div>
          </div>
        </div>
      </div>
      <Skills></Skills>
    </>
  );
}

export default Resume;
