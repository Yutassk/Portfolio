import Link from "next/link";
import React from "react";

const Contact = () => {
  const contactList: {
    title: string;
    address: string;
  } = {
    title: "Twitter",
    address: "https://twitter.com/yuta_ss90",
  };

  return (
    <div>
      <h2>Contact</h2>
      <dl>
        <dt>Twitter</dt>
        <dd>ここにアカウント名</dd>
        <Link href="/">button</Link>
      </dl>
    </div>
  );
};

export default Contact;
