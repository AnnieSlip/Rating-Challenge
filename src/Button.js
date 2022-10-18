import React from "react";

const Button = ({ rate, newRate, className }) => {
  return (
    <button className={className} type="button" onClick={() => newRate(rate)}>
      {rate}
    </button>
  );
};

export default Button;
