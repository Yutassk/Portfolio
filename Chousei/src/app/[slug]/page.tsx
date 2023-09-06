"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ShiftList } from "../component/ShiftList";
import Header from "../Layout/Header";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../component/Firebase";

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  console.log(params);

  const userAuth = localStorage.getItem("creatorUserId");
  console.log(userAuth);

  const handleFirebaseCheck = () => {
    getDocs(collection(db, "shifts")).then((doc) => {
      doc.docs.map((n) => {
        console.log(n.id, "=>", n.data());
      });
    });
  };

  return (
    <div>
      <Header />
      <div>My Post: {params.slug}</div>
      <ShiftList />
      <button onClick={handleFirebaseCheck}>check</button>
    </div>
  );
}
