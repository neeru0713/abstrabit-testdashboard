import React from "react";
const Button = ({ width, color="white", name, bgColor, type }) => {
  let styles = {
    color: `${color}`,
    backgroundColor: `${bgColor}`,
  };

  if (type === "primary") {
    styles = {
      background: "#3a39d9",
      color: "white",
      width: `${width}px`,
    };
  } else if (type === "secondary") {
    styles = {
      background: "white",
      color: "#3a39d9",
      width: `${width}px`,
      border: '1px solid #3a39d9'
    };
  }
  //   } else if (type === "tertiary") {
  //     styles = {
  //       background: "#f8f1ff",
  //       color: "white",
  //       width: `${width}px`,
  //     };
  //   }

  return (
    <button className="button rounded-md px-3 py-2 " style={styles}>
      {name}
    </button>
  );
};

export default Button;
