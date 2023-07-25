import React from "react";

export const Contact = () => {
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
      </dl>
    </div>
  );
};
