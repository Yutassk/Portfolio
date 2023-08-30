"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Hamburger } from "./Hamburge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const Mains = [
    {
      title: "調整さん",
      desc1: "新しいイベントを作成する",
      desc2: "ログイン / 会員登録",
    },
    {
      title: "調整さんについて",
      desc1: "お問い合わせ・ご要望",
      desc2: "広告掲載について",
    },
    {
      title: "関連サービス",
      desc1: "TimeRex - 日程調整自動化サービス",
      desc2: "調整さんカレンダー - 予約受付サービス",
    },
    {
      title: "SNS",
      desc1: "調整さん Facebook",
      desc2: "調整さん Twitter",
    },
    { title: "言語", desc1: "日本語", desc2: "English" },
  ];

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <div onClick={toggleHamburger} className="lg:hidden ">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="">
        <div className={`${hamburgerOpen ? " z-50 bg-gray-100 text-gray-600 h-screen w-4/5 fixed right-0 top-0 m-auto flex flex-col transition-all" : "hidden"}`}>
          <div className="flex items-center justify-center">
            <h2 className="relative text-center text-2xl h-12 px-2 py-1 leading-10">メニュー</h2>
            <FontAwesomeIcon className="absolute right-4 text-2xl" icon={faXmark} onClick={toggleHamburger} />
          </div>

          <ul>
            {Mains.map((main) => (
              <li key={main.title} className="">
                <div className="w-full -mt-px bg-gray-300 border-y border-gray-400">
                  <Link className="mx-2" href={`#${main.title}`}>
                    {main.title}
                  </Link>
                </div>

                <div className=" bg-white">
                  <p className="py-2  -mt-px text-sm border-y border-gray-400border-y border-gray-400">{main.desc1}</p>
                  <p className="py-2  -mt-px text-sm border-y border-gray-400">{main.desc2}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
