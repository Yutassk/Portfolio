import Image from "next/image";
import React from "react";
import { Navmenu } from "../components/Navmenu";

export const Header = () => {
  return (
    <div>
      <header className="display_size">
        <div className="flex justify-between">
          <div>
            <Image width={300} height={300} alt="" src="/yuta.png" />
          </div>

          <ul className="flex items-center">
            <li className="">
              <a href="#">
                <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
              </a>
            </li>
            <li className="ml-4">
              <a href="#">
                <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <Navmenu />
      </header>
    </div>
  );
};
