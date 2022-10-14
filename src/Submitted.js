import React from "react";

const Submitted = ({ rating }) => {
  return (
    <section className="content submitted">
      <img
        src="../assets/illustration-thank-you.svg"
        alt="thank-you-img"
        className="thank_you_image"
      />

      <p className="rating">You selected {rating} out of 5</p>

      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
};

export default Submitted;
