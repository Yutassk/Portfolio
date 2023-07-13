import Link from "next/link";
import React from "react";

export const Navmenu = () => {
  return (
    <div>
      <nav className="py-4">
        <ul className="flex justify-end">
          <li className="ml-12">
            <Link href="/">Profile</Link>
          </li>
          <li className="ml-12">
            <Link href="/">Skill</Link>
          </li>
          <li className="ml-12">
            <Link href="/">Hobby</Link>
          </li>
          <li className="ml-12">
            <Link href="/">Future</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
