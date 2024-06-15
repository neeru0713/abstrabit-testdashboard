import React from "react";
import Button from "./Button";

export const ScheduleBox = ({
  title,
  scheduleType,
  calanderDate,
  content,
  primaryButtonName,
  secondaryButtonName,
  depositeAmt,
  tennure,
  interestRate,
  name,
  type,
  
}) => {
  return (
    <div className="px-5 py-9 bg-white">
      <div className="flex flex-col">
        <div className="font-medium"> {title}</div>
        <div className="flex gap-6">
          <div className="flex flex-col mt-2 items-center">
            <p className="text-xs text-[#767678]">{scheduleType}</p>
            <div className="bg-[#f3f3f4] border text-center mt-2 pt-2 items-center">
              <p className="text-4xl font-semibold">{calanderDate}</p>
              <div className="text-white bg-[#ce5151] px-2 text-sm">Oct,2023</div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="text-xs font-semibold">{content}</div>
            <div className="flex gap-6 mt-6">
              <div className="flex flex-col">
                <div className="text-[#767678] text-sm">Deposit Amt</div>
                <div className="text-sm text-black font-semibold">{depositeAmt}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#767678] text-sm">Tennure</div>
                <div className="text-sm text-black font-semibold">{tennure}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-[#767678] text-sm">Interest Rate</div>
                <div className="text-sm text-black font-semibold">{interestRate}%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <Button name={primaryButtonName} type="primary" width="250" />
          <Button name={secondaryButtonName} type="secondary" width="250" />
        </div>
      </div>
    </div>
  );
};
