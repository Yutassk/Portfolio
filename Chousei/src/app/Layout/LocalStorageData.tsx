"use client";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { db } from "../component/Firebase";

const LocalStorageData = () => {
  const [localData, setLocalData] = useState<string[] | null>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("deviceEventHistory");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLocalData(parsedData);
    }

    const querySnapShot = getDocs(collection(db, "shifts")).then((doc) => {
      doc.docs.map((n) => {
        console.log(n.id, "=>", n.data());
      });
    });
  }, []);

  return (
    <div className=" grid grid-rows-4 grid-flow-row gap-4">
      {localData &&
        localData.map((data, index) => (
          <Link className="bg-emerald-200 overflow-hidden p-2" key={index} href={`/${data}`}>
            {data}
          </Link>
        ))}
    </div>
  );
};

export default LocalStorageData;
