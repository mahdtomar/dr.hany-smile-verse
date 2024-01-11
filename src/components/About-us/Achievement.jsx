import React from "react";

const Achievement = ({ img, count, title, description }) => {
  return (
    <figure>
      <img src={img} alt="" />
      <figcaption>
        <span className="counter">
          <strong>{count}</strong>
        </span>
        <p className="title">{title}</p>
        <span className="description">{description}</span>
      </figcaption>
    </figure>
  );
};

export default Achievement;
