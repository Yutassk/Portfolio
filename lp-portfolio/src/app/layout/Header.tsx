"use client";

import Image from "next/image";
import React from "react";
import { Nav } from "../components/Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className="mb-5">
        <div className="">
          <div>
            <Link href="/">
              <h1 className="text-3xl m-6">YutaSasaki</h1>
            </Link>
          </div>
          <Nav />

          <ul className="flex justify-center">
            <li className="">
              <a href="/">
                <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
              </a>
            </li>
            <li className="ml-4">
              <a href="/">
                <Image width={40} height={40} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
