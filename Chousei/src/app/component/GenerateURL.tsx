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
    const characters = "ABCDDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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

  const handleUrlGenerate = async () => {
    const min = 30;
    const max = 50;

    let len = Math.floor(Math.random() * (max - min + 1)) + min;
    const generatedUrl = generateRandomString(len);

    //Selectで選んだ月でシフトを作成
    // try {
    const docRef = await setDoc(doc(db, "shifts", generatedUrl), { シフト月: month });
    console.log("Document written with ID: ", docRef);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    router.push("s" + "?" + createQueryString("h", generatedUrl));
  };

  // useEffect(() => {
  //   router.push("s" + "?" + createQueryString("h", url));
  // }, [searchParams]);

  return (
    <div className="flex flex-col items-center space-y-4 mb-4">
      <div className="flex items-center justify-center">
        <Select className="text-sm " placeholder="シフト月" options={months} onChange={(selectedMonth) => chooseMonth(selectedMonth)} />
        <h3>月の</h3>
      </div>
      <button className={`bg-emerald-500 text-white py-2 px-4 rounded-md  ${month ? "hover:bg-emerald-600" : "pointer-events-none opacity-40"}`} onClick={handleUrlGenerate}>
        シフトを作成する
      </button>
    </div>
  );
};
