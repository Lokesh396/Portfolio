import * as Lucide from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();

  const activeLink = location.pathname.split("/").pop();

  return (
    <>
      <div>
        <div className="d-flex gap-3 card-effect justify-content-end mt-3 ">
          <NavLink
            to="/about"
            className={`icon  ${activeLink === "home" ? "active" : null}`}
          >
            <Lucide.HomeIcon></Lucide.HomeIcon>
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/resume"
            className={`icon  ${activeLink === "resume" ? "active" : null}`}
          >
            <Lucide.FileTextIcon></Lucide.FileTextIcon>
            <p>Resume</p>
          </NavLink>
          <NavLink
            to="/work"
            className={`icon  ${activeLink === "work" ? "active" : null}`}
          >
            <Lucide.BriefcaseIcon></Lucide.BriefcaseIcon>
            <p>Work</p>
          </NavLink>
          <NavLink
            to="/contact"
            className={`icon  ${activeLink === "contact" ? "active" : null}`}
          >
            <Lucide.ContactIcon></Lucide.ContactIcon>
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
