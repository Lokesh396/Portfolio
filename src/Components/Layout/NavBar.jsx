import React from "react";
import { useActiveSection } from "../context/ActiveSectionContext";

const RoutesObj = [
  { id: 1, name: "ABOUT", target: "#about" },
  { id: 2, name: "EXPERIENCE", target: "#experience" },
  { id: 3, name: "PROJECTS", target: "#projects" },
  // { id: 4, name: "CERTIFICATIONS", target: "#certifications" },
];

const NavBar = () => {
  const { activeSection } = useActiveSection();

  return (
    <nav className="hidden lg:block">
      <ul className="list-none flex flex-col gap-3">
        {RoutesObj.map(({ id, name, target }) => {
          const isActive = activeSection === target;
          return (
            <li key={id}>
              <a
               onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(target);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
                href={target}
                className={`group flex items-center gap-4 cursor-pointer text-sm transition-all duration-300 hover:text-white ${
                  isActive ? "text-white" : "text-slate-400"
                }`}
              >
                <span
                  className={`inline-block rounded bg-white transition-all duration-300 h-[1px] ${
                    isActive ? "w-16" : "w-8"
                  } group-hover:w-16`}
                />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
