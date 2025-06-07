import React, { useState, useEffect } from "react";

const RoutesObj = [
  { id: 1, name: "ABOUT", target: "#about" },
  { id: 2, name: "EXPERIENCE", target: "#experience" },
  { id: 3, name: "PROJECTS", target: "#projects" },
];

const NavBar = ({mainRef}) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = mainRef.current?.scrollTop || 0;

      RoutesObj.forEach(({ target }) => {
        const section = document.querySelector(target);
        console.log(section)
        if (
          section?.offsetTop <= scrollY + 100 &&
          section?.offsetTop + section.offsetHeight > scrollY + 100
        ) {
          setActive(target);
        }
      });
    };

    const current = mainRef.current;
    if (current) {
      current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (current) current.removeEventListener("scroll", handleScroll);
    };
  }, [mainRef]);

  return (
    <div className="hidden md:block">
      <nav>
        <ul className="list-none flex flex-col gap-2">
          {RoutesObj.map((route) => {
            const isActive = active === route.target;

            return (
              <li key={route.id}>
                <a
                  href={route.target}
                  className={`group flex items-center gap-4 cursor-pointer text-sm transition-all duration-300  hover:text-white ${
                    isActive ? "text-white" : "text-slate-400"
                  }`}
                >
                  <span
                    className={`inline-block rounded bg-white transition-all duration-300 h-[1px]  ${
                      isActive ? "w-16" : "w-8"
                    } group-hover:w-16`}
                  ></span>
                  {route.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
