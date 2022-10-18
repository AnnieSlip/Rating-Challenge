import React, { useState } from "react";
import Submitted from "./Submitted";
import Rating from "./Rating";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rate, setRate] = useState(0);
  const [active, setActive] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (rate) {
      setSubmitted(true);
    }
  };

  const newRate = (num) => {
    setRate(num);
    setActive(true);
  };

  if (!submitted) {
    return (
      <Rating rate={rate} onSubmitHandler={onSubmitHandler} newRate={newRate} />
    );
  }
  return <Submitted rating={rate} />;
};
export default App;
