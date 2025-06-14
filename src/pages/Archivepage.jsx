import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Pill from "../Components/Common/Pill";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { heroName, projectsArchive } from "../Components/utils/data";

const Archivepage = () => {
  useEffect(() => {
    window.document.title = `Archive | ${heroName}`;
  }, []);
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-24">
      <NavLink to="/" className="text-teal-300 group flex items-center mb-5 sticky top-0 bg-slate-900 py-3">
        {" "}
        <span className="group-hover:translate-x-[-4px]">
          <LuArrowLeft />
        </span>
        <>C Lokesh Kumar Reddy</>
      </NavLink>

      <h3 className="text-white mb-7 text-3xl font-bold">All Projects</h3>

      <table className="table-auto w-full border-separate border-spacing-x-4 border-spacing-y-2">
        <thead>
          <tr className="text-white text-left">
            <th>Year</th>
            <th className="hidden md:table-cell">Project</th>
            <th className="md:hidden">Project</th>
            <th className="hidden lg:table-cell">Made at</th>
            <th className="hidden lg:table-cell">Built with</th>
            <th className="hidden md:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {projectsArchive.map((project) => (
            <tr
              key={project.id}
              className="border-b border-white  py-10 h-15 text-start"
            >
              <td className="text-slate-400 ">{project.year}</td>
              <td className="text-white hidden md:table-cell">
                {project.project_name}
              </td>
              <td className="md:hidden cursor-pointer group">
                <Link
                  to={project.homepage}
                  target="_parent"
                  className="text-white group-hover:text-teal-400 flex gap-1 items-center"
                >
                  {project.project_name}
                    <LuArrowUpRight />
                </Link>
              </td>
              <td className="text-slate-400 hidden lg:table-cell">
                {project.company}
              </td>
              <td className="hidden lg:table-cell">
                <ul className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, idx) => (
                    <Pill key={idx} content={tech} />
                  ))}
                </ul>
              </td>
              <td className="hover:text-teal-300 group text-slate-400 hidden md:table-cell">
                {
                  <Link
                    to={project.homepage}
                    className="flex items-center gap-1"
                    target="_blank"
                  >
                    {" "}
                    {project.isGithub ? (
                      <>
                        <FaGithub />
                        Github
                      </>
                    ) : (
                      <span className="flex gap-1">
                        {project.homepage}
                        <span className="group-hover:translate-y-[-4px] group-hover:translate-x-1">
                          <LuArrowUpRight />
                        </span>{" "}
                      </span>
                    )}
                  </Link>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Archivepage;
