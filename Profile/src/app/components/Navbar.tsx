"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Hamburger } from "./Hamburger";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Navbar(props) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  type List = {
    title: string;
    link: string;
  };

  const NavList: List[] = [
    {
      title: "Docs",
      link: "/",
    },
    {
      title: "Share",
      link: "/",
    },
    {
      title: "tweet",
      link: "/",
    },
    {
      title: "star",
      link: "/",
    },
  ];

  return (
    <nav className={(props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white shadow-lg") + " flex flex-wrap items-center justify-between px-2 py-3 "}>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="">
            <Link href="/" className="flex items-center fixed">
              <Image src={"/yuta.png"} alt="" width={40} height={40} className="rounded-full " />
              <h2 className={(props.transparent ? "text-white" : "text-gray-800") + " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ml-2"}>Yuta's Portfolio</h2>
            </Link>
          </div>
          <div onClick={toggleHamburger} className="hamburger">
            <Hamburger isOpen={hamburgerOpen} />
          </div>
        </div>
        <div className={"lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (hamburgerOpen ? " block rounded shadow-lg" : " hidden")} id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            {NavList.map((nav) => (
              <li key={nav.title} className="flex items-center">
                <Link
                  className={
                    (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href={nav.link}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
    </nav>
  );
}
