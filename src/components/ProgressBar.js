import React from "react";

const ProgressBar = ({ value, startDate, endDate, tenureInMonths, barNumber }) => {

  function getStyles(){
    const startDateArr = startDate.split('/'); // ['04', '01', '2024'];
    const endDateArr = endDate.split('/'); 
    const startMonth = parseInt(startDateArr[1]);
let balancer = 10;
    return {
      left: startMonth === 1 ? startMonth*30 - balancer*2.5 + "px": startMonth*30 - balancer*3.5 + "px",
        top: barNumber * 30 + 50 + 'px',
        width: tenureInMonths*30 - 50 + 'px'
        // right: tenureInMonths*30 * 10 + 'px'
    };

  }
  const styles = getStyles();
  return (
    <div
      id={`progressBar${barNumber}`}
      style={styles}
      className="bg-blue-700  text-white rounded-xl absolute text-xs text-center"
    >
      {value}
    </div>
  );
};

export default ProgressBar;