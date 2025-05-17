import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map(({ name, icon }) => (
      <div className="w-28 h-28 flex flex-col items-center justify-center" key={name}>
        <img src={icon} alt={name} className="w-16 h-16 object-contain" />
        <p className="text-white text-sm mt-2">{name}</p>
      </div>
    ))}
  </div>
);

export default SectionWrapper(Tech, "");
