import React from "react";

const Button = ({ rate, newRate }) => {
  return (
    <button className="rate_btn" type="button" onClick={() => newRate(rate)}>
      {rate}
    </button>
  );
};

export default Button;
