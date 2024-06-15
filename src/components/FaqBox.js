import React from "react";

const FaqBox = ({ title, content }) => {
  return (
    <div className="flex flex-col border rounded-lg gap-1 shadow shadow-lg p-10 bg-white">
      <h1 className="font-semibold text-2xl text-left pr-10">{title}</h1>
      <p className="text-xs pr-10">{content}</p>
      <p className="text-[#3a39d9] underline text-xs">Read more...</p>
    </div>
  );
};

export default FaqBox;
