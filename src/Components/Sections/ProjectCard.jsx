import React from "react";
import Pill from "../Common/Pill";
import { LuArrowUpRight } from "react-icons/lu";
const ProjectCard = ({ project }) => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-4 gap-4 py-6 px-2 border-gray-700 hover:bg-teal-200/10 rounded-md cursor-pointer">
      {/* Timeline */}
      <img src={project.image} className="mt-2" alt="project" />

      {/* Details */}
      <div className="md:col-span-3 flex flex-col gap-2">
        <h6 className="text-lg font-semibold text-white group-hover:text-teal-400 flex gap-1 items-center">
          {project.project_name} - {project.company} <span className="group-hover:translate-y-[-4px] group-hover:translate-x-1"><LuArrowUpRight /></span> 
        </h6>
        <p className="text-gray-300 text-sm text-justify">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.technologies?.map((tech, idx) => (
            <Pill key={idx} content={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
