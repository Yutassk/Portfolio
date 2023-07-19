import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Skills = () => {
  const [accordion, setAccordion] = useState(false);

  const accordionSkills = () => {
    setAccordion(!accordion);
    console.log(accordion);
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
        <li className="">
          <i className="devicon-html5-plain-wordmark text-8xl w-1/2"></i>
          <div className="">
            <h3 className="">HTML5</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
          </div>
        </li>
        <li>
          <i className="devicon-tailwindcss-plain colored text-8xl"></i>
          <h3>TailwindCSS</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <li>
          <i className="devicon-css3-plain-wordmark colored text-8xl"></i>
          <h3>CSS</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <li>
          <i className="devicon-javascript-plain-wordmark colored text-8xl"></i>
          <h3>JavaScript</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <li>
          <i className="devicon-react-plain-wordmark colored text-8xl"></i>
          <h3>React</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, maiores? Quam quaerat molestias dolorem rerum dicta modi, neque a incidunt.</p>
        </li>
        <li>
          <i className="devicon-nextjs-plain colored text-8xl"></i>
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
