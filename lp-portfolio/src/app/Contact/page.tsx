import Link from "next/link";
import React from "react";
import Home from "../page";

const Contact = () => {
  type contact = {
    title: string;
    address: string;
  };

  const contactList: contact[] = [
    {
      title: "Twitter",
      address: "https://twitter.com/yuta_ss90",
    },
  ];

  return (
    <Home>
      <div>
        <h2>Contact</h2>
        <p>{contactList.title}</p>
        <dl>
          <dt>{contactList.title}</dt>
          <dd>{contactList.address}</dd>
          <Link href="/">button</Link>
        </dl>
      </div>
    </Home>
  );
};

export default Contact;
