import React from "react";
import Button from "../Common/Button";
import { LuArrowUpRight } from "react-icons/lu";
const CertificationCard = ({ certification }) => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-4 gap-4 py-6 px-2 border-gray-700 hover:bg-teal-200/10 rounded-md cursor-pointer">
      {/* Timeline */}
      <img src={certification.image} className="mt-2" alt="certification" />

      {/* Details */}
      <div className="md:col-span-3 flex flex-col gap-2">
        <h6 className="text-lg font-semibold text-white group-hover:text-teal-400 flex gap-1 items-start">
          {certification.title} <span className="group-hover:translate-y-[-4px] group-hover:translate-x-1"><LuArrowUpRight /></span> 
        </h6>
        <p className="text-gray-300 text-sm text-justify">{certification.description}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
