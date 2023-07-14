import Link from "next/link";
import React, { useState } from "react";
import { Hamburger } from "./Hamburger";

export const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <nav className="navigation">
        <ul className="">
          <li className="">
            <Link href="/">Profile</Link>
          </li>
          <li className="">
            <Link href="/">Skill</Link>
          </li>
          <li className="">
            <Link href="/">Hobby</Link>
          </li>
          <li className="">
            <Link href="/">Future</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>
      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigation ul {
          display: ${hamburgerOpen ? "inline" : "none"};
          flex-wrap: wrap;
          float: right;
          margin: 20 0px;
          padding: 0 25px;
        }

        .navigation ul li {
            list-style- type: none;
            padding-right: 10px;
        }

        .hamburger {
          display: none;
        }

        @media (max-width: 767px) {
          .hamburger {
            display:fixed;
            padding-top:10px;
            margin-left:10px;
            z-index: 10;
          }
        }
      `}</style>
    </div>
  );
};
