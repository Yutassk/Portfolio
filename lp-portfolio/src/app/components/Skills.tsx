import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export const Skills = () => {
  const [accordion, setAccordion] = useState(false);

  const accordionSkills = () => {
    setAccordion(!accordion);
    console.log(accordion);
  };
  return (
    <div>
      <div className="flex justify-center">
        <button onClick={accordionSkills} className="text-3xl mr-2">
          <FontAwesomeIcon icon={faPlus} className="plusIcon" />
        </button>
        <h2 className="text-3xl">Skill</h2>
      </div>
      <ul className="hidden">
        <li>
          <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="" />
          HTML,CSS
        </li>
        <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" />
        <li>Javascript</li>
        <li>
          <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
          React
        </li>
        <li>
          <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="" />
          TailwindCSS
        </li>
        <li>
          <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
          Typescript
        </li>
        <li>
          <Image width={100} height={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="" />
          Next.js
        </li>
      </ul>
      <style jsx>
        {`
          .hidden {
            display: ${accordion ? "inline" : "none"};
          }

          .plusIcon {
            color: red;
          }
        `}
      </style>
    </div>
  );
};
