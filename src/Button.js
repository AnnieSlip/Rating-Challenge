import React from "react";

const Button = ({ rate, newRate }) => {
  return (
    <button type="button" className="rate_btn" onClick={() => newRate(rate)}>
      {rate}
    </button>
  );
};

export default Button;
