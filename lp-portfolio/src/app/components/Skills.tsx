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
        <li className="card">
          <div className="card_header">
            <h3 className="card_title">HTML5</h3>
            <Image className="" src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} alt="" width={50} height={50} />
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <li className="card">
          <div className="card_header">
            <h3 className="card_title">TailwindCSS</h3>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"} alt="" width={50} height={50} />
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <li className="card">
          <div className="card_header">
            <h3 className="card_title">JavaScript</h3>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} alt="" width={50} height={50} />
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <li className="card">
          <div className="card_header">
            <h3 className="card_title">CSS</h3>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} alt="" width={50} height={50} />
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <li className="card">
          <div className="card_header">
            <h3 className="card_title">React</h3>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} alt="" width={50} height={50} />
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <li className="card">
          <div className="card_header">
            <h3 className="card_title">Next.js</h3>
            <Image src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"} alt="" width={50} height={50} />
          </div>
          <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
      </ul>
      <style jsx>
        {`
          .hidden {
            display: ${accordion ? "inline" : "none"};
            transition: ;
          }
        `}
      </style>
    </div>
  );
};
