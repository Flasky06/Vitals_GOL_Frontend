import React from "react";

const CustomLabel = ({ htmlFor, text }) => {
  return (
    <label className="block font-bold capitalize mr-2" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default CustomLabel;
