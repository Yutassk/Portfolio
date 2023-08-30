import React from "react";

export const Hamburger = ({ isOpen }: any) => {
  return (
    <div className="hamburger">
      <div className="burger burger1 bg-slate-200" />
      <div className="burger_center burger2 bg-cyan-800" />
      <div className="burger burger3 bg-slate-200" />

      <style jsx>
        {`
          .hamburger {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
          }

          .burger {
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;
            z-index: 9999;
          }

          .burger_center {
            width: 1.5rem;
            height: 0.25rem;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }

          .burger1 {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .burger2 {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }
          .burger3 {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </div>
  );
};
