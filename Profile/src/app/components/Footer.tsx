import { faBridge, faFingerprint, faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <hr className="border-gray-400" />

      <div className="">
        {/* SNS Icon */}
        <div className="">
          <button className=" text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
            <FontAwesomeIcon icon={faBridge} />
          </button>
          <button className=" text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
            <FontAwesomeIcon icon={faFingerprint} />
          </button>
          <button className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3" type="button">
            <FontAwesomeIcon icon={faFontAwesome} />
          </button>
        </div>
      </div>
    </footer>
  );
}
