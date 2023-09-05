"use client";
import { doc, setDoc } from "firebase/firestore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { db } from "./Firebase";

export const GeneratedURL = () => {
  const months = [
    { label: "1月" },
    { label: "2月" },
    { label: "3月" },
    { label: "4月" },
    { label: "5月" },
    { label: "6月" },
    { label: "7月" },
    { label: "8月" },
    { label: "9月" },
    { label: "10月" },
    { label: "11月" },
    { label: "12月" },
  ];

  const [month, setMonth] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const chooseMonth = (selectedMonth) => {
    console.log(selectedMonth.label);
    setMonth(selectedMonth);
  };

  const generateRandomString = (length: number) => {
    const characters = "ABCDDEFGHIJKLMNWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleUrlGenerate = () => {
    const min = 30;
    const max = 50;

    let len = Math.floor(Math.random() * (max - min + 1)) + min;
    const generatedUrl = generateRandomString(len);

    // 生成されたURLをstateに保存
    // setUrl(generatedUrl);
    // console.log(url);
    //Selectで選んだ月でシフトを作成
    // try {
    const docRef = setDoc(doc(db, "shifts", generatedUrl), { シフト月: month });
    console.log("Document written with ID: ", docRef.then());
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    router.push("s" + "?" + createQueryString("h", generatedUrl));
  };

  // useEffect(() => {
  //   router.push("s" + "?" + createQueryString("h", url));
  // }, [searchParams]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <Select className="text-sm " placeholder="シフト月" options={months} onChange={(selectedMonth) => chooseMonth(selectedMonth)} />
        <h3>月の</h3>
      </div>
      <button className={month ? "bg-pink-300" : "pointer-events-none bg-slate-200"} onClick={handleUrlGenerate}>
        シフトを作成する
      </button>
    </div>
  );
};
