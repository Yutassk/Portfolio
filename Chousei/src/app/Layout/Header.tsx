import React from "react";
import NoticeButton from "../component/NoticeButton";
import { Navbar } from "../component/Navbar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-green-600 text-slate-100  w-full h-12">
      <div className="flex justify-between items-center mx-2">
        <Link href={"/"}>
          <h2 className="text-2xl">しふとさん</h2>
        </Link>
        <div className="flex items-center justify-around space-x-2">
          <NoticeButton />
          <div className="lg:hidden">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
