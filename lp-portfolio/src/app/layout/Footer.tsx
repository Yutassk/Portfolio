import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";

export const Footer = () => {
  return (
    <div>
      <footer className="flex justify-between bg-gray-700 text-white px-20 py-6">
        {/* <Scroll to="Skills" smooth={true}>
          Skills
        </Scroll> */}
        <Link href={"/"}>Profile</Link>
        <Link href={"/"}>Skill</Link>
        <Link href={"/"}>Hobby</Link>
        <Link href={"/"}>Future</Link>
      </footer>
    </div>
  );
};
