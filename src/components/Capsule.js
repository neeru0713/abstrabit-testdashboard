import React from "react";
import tickCircleIcon from "../assets/tickCircleIcon.svg";
import { IoCheckmarkCircle } from "react-icons/io5";

const Capsule = ({ text, secondary, primary }) => {
  const styles = {
    background: `${secondary}`,
  };

  return (
    <div
      className="border items-center rounded-lg flex gap-1 p-2"
      style={styles}
    >
      {/* <img src={tickCircleIcon} /> */}
      <IoCheckmarkCircle className="text-xl" fill={primary}/>
      <h1 className="text-sm">{text}</h1>
    </div>
  );
};

export default Capsule;
