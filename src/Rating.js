import React from "react";
import Button from "./Button";
import { AiTwotoneStar } from "react-icons/ai";

const Rating = ({ onSubmitHandler, newRate }) => {
  const rateArr = [1, 2, 3, 4, 5];

  return (
    <form className="content" onSubmit={onSubmitHandler}>
      <AiTwotoneStar className="star_icon" />
      <h2>How did we do?</h2>
      <p>
        Please let us know how did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate_btn_container">
        {rateArr.map((num, index) => {
          return <Button rate={num} key={index} newRate={newRate} />;
        })}
      </div>
      <button type="submit" className="submit_btn">
        submit
      </button>
    </form>
  );
};

export default Rating;