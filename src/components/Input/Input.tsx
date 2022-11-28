import React from "react";
import "./input.css";

export interface InputProps  {
  type?: string;
  value?: string;
  size?: "small" | "medium" | "large";
};
 
const Input = ({
  type = 'text',
  size = "medium",
  value
}: InputProps) => {
  
  return (
    <input
      type={type}
      className={["input", `input--${size}`].join(
        " "
      )}
      value={value}
      placeholder={value || type}
    />
  );
};

export default Input;