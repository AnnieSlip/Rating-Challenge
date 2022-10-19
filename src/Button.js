import React from "react";

const Button = (props) => {
  const { className, rate } = props;
  return (
    <button className={className} type="button" onClick={props.onClick}>
      {rate}
    </button>
  );
};

export default Button;
