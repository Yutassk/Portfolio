import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";

export const Skills = () => {
  const [accordion, setAccordion] = useState(false);

  const accordionSkills = () => {
    setAccordion(!accordion);
  };

  const getAccordion = () => {
    if (accordion) {
      return "rotate-45";
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <button onClick={accordionSkills} className="text-3xl mr-2">
          <FontAwesomeIcon icon={faPlus} className={`${getAccordion()} transition-all`} />
        </button>
        <h2 className="text-3xl">Skill</h2>
      </div>
      <ul className="hidden">
        <li className="rounded-lg shadow hover:shadow-lg m-4 p-4 bg-cyan-200 bg-opacity-20">
          <div className="flex items-center justify-center border-b border-white pb-2">
            <Image className="" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} alt="" width={50} height={50} />
            <h3 className="ml-2">HTML5</h3>
          </div>
          <div className="">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} alt="" width={50} height={50} />
        <li>
          <h3>TailwindCSS</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} alt="" width={50} height={50} />
        <li>
          <h3>CSS</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} alt="" width={50} height={50} />
        <li>
          <h3>JavaScript</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} alt="" width={50} height={50} />
        <li>
          <h3>React</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <li>
          <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} alt="" width={50} height={50} />

          <h3>Next.JS</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
      </ul>
      <style jsx>
        {`
          .hidden {
            display: ${accordion ? "inline" : "none"};
          }
        `}
      </style>
    </div>
  );
};
