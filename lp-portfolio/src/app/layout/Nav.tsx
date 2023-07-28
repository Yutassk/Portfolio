import Link from "next/link";
import React, { useState } from "react";
import { Hamburger } from "../components/Hamburger";

export const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  type Menu = {
    title: string;
    link: string;
  };

  const Menus: Menu[] = [
    {
      title: "Profile",
      link: "/",
    },
    {
      title: "Skill",
      link: "/Skills",
    },
    {
      title: "Hobby",
      link: "/",
    },
    {
      title: "Future",
      link: "/",
    },
    {
      title: "Contact",
      link: "/Contact",
    },
  ];

  return (
    <div>
      <nav className="navigation">
        <ul className="">
          {Menus.map((menu) => (
            <li key={menu.title} className="">
              <Link href={menu.link}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <style jsx>{`
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 20 0px;
          padding: 0 25px;
          overflow: hidden;
        }

        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }

        @media (max-width: 767px) {
          .hamburger {
            display: inline;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 10;
            position: fixed;
            right: 10px;
            top: 10px;
          }

          .navigation {
            display: ${hamburgerOpen ? "inline" : "none"};
          }

          .navigation ul {
            display: inline;
            background-color: #ccc;
            height: 100vh;
            width: 80vw;
            position: fixed;
            right: 0;
            top: 0;
            opacity: 0.9;
            z-index: 1;
            font-size: 2rem;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};
