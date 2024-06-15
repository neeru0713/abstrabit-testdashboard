import React from "react";
import ProgressBar from "./ProgressBar";
const Timeline = () => {
  const yearsArray = [
    { year: 2024, color: "#f0efff" },
    { year: 2025, color: "#f1f6e5" },
    { year: 2026, color: "#fef6e7" },
  ];
  const styles = {
    width: `${parseFloat(getWidth())}%`,
  };

  function getWidth() {
    let width = 0;
    if (yearsArray.length) {
      width = parseFloat(100 / yearsArray.length).toFixed(2);
    }
    return width;
  }

  const monthsArray = [
    "J",
    "F",
    "M",
    "A",
    "M",
    "J",
    "J",
    "A",
    "S",
    "O",
    "N",
    "D",
    ];
    const fdData = [
      {
        name: "Utkarsh FD 1",
        startDate: "04/01/2024",
        endDate: "04/07/2024",
        tenure: 7,
      },
      {
        name: "Shriram FD Plan 2",
        startDate: "04/01/2024",
        endDate: "04/08/2025",
        tenure: 16,
      },
      {
        name: "Bajaj Finserv FD 1",
        startDate: "04/05/2024",
        endDate: "04/07/2025",
        tenure: 12,
      },
      {
        name: "Mahindra FD Plan 2",
        startDate: "04/06/2024",
        endDate: "04/06/2026",
        tenure: 26,
      },
    ];
  return (
    <div className="px-10 pt-5 pb-8">
    <h1 className="font-medium">FD Maturity Timeline</h1>
   
    <div className="flex space-evenly w-full gap-1 relative">
        {fdData.map((item, i) => (
   <ProgressBar value={item.name} startDate={item.startDate} endDate={item.endDate} tenureInMonths={item.tenure} barNumber={i+1} />
        ))}
   
      {/* <ProgressBar value="test2" tenureInMonths={19} barNumber={2} /> */}
      {yearsArray?.map((item, index) => (
        <div className="flex flex-col text-center " style={styles}>
          <h2 className="text-[#767678] pb-4">{item.year}</h2>

          <div className="months-wrapper flex w-full items-center ">
            {monthsArray.map((m, i) => (
              <div
                style={{ background: item.color }}
                class="h-[180px] border border-white border-2 w-[40px]"
              >
                <span className="px-1 w-[20px] border border-s-0 border-e-0 border-t-2 border-b-2 border-gray-200">
                  {m}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timeline;