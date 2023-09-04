"use client";
import { initializeApp } from "firebase/app";
import { QueryDocumentSnapshot, addDoc, collection, getDocs, getFirestore, on } from "firebase/firestore";
import React, { useEffect } from "react";

const Firebase = () => {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  //データ追加
  try {
    const docRef = addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  //データ取得
  // useEffect(() => {
  //   const postShift = getDocs(collection(db, "Shift"));
  //   postShift.then((snapshot) => {
  //     console.log(snapshot.docs.map((doc) => ({ ...doc.data() })));
  //   });
  // }, []);

  return (
    <div>
      <button>Firebase</button>
    </div>
  );
};

export default Firebase;
