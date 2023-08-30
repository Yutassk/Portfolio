import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NoticeButton = () => {
  return (
    <button className="bg-white w-7  rounded-md p-1">
      <FontAwesomeIcon icon={faBell} style={{ color: "#16a34a" }} />
    </button>
  );
};

export default NoticeButton;
