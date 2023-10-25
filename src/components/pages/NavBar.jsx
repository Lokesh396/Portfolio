import * as Lucide from "lucide-react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="">
        <div className="d-flex gap-3 card-effect mt-3 ">
          <NavLink to="/about" className="icon">
            <Lucide.HomeIcon></Lucide.HomeIcon>
            <p>Home</p>
          </NavLink>
          <NavLink to="/resume" className="icon">
            <Lucide.FileTextIcon></Lucide.FileTextIcon>
            <p>Resume</p>
          </NavLink>
          <NavLink to="/work" className="icon">
            <Lucide.BriefcaseIcon></Lucide.BriefcaseIcon>
            <p>Work</p>
          </NavLink>
          <NavLink to="/contact" className="icon">
            <Lucide.ContactIcon></Lucide.ContactIcon>
            <p>Contact</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
