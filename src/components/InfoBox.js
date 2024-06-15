import React from "react";

import Button from "./Button";
import Capsule from "./Capsule";

const InfoBox = ({
  logo,
  heading,
  chips,
  interestRate,
  type,
  name,
  primary,
  secondary,
  tertiary,
}) => {
  const styles = {
    background: tertiary,
  };

  return (
    <div className="border border-4 border-white rounded-lg p-5" style={styles}>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <img className="h-12 rounded-full" src={logo} />
          <h1 className="font-semibold">{heading}</h1>
        </div>
        <div className="flex gap-2">
          {chips?.map((item) => (
            <Capsule text={item} secondary={secondary} primary={primary} />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-sm">
            <p className="text-gray-600">Interest Upto</p>
            <h1 className="font-semibold">{interestRate}% p.a</h1>
          </div>
          <Button name="Book Now" bgColor={primary} />
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
