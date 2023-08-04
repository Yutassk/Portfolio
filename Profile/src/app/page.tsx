import React from "react";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{ background: "radial-gradient(600px at 550px 24px, rgba(29, 78, 216, 0.15), transparent 80%);" }}
        ></div>
        <div className="lg:hidden">
          <Navbar />
        </div>

        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            {/* <Header /> */}
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}
