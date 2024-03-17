import React from "react";

const Testmonial = (props) => {
  return (
    <figure className="testmonial flex-2">
      {props.img ? <img src={props.img} alt="" /> : ''}
      <figcaption>
        <p className="feedback">{props.msg}</p>
        <span>{props.person}</span>
      </figcaption>
    </figure>
  );
};

export default Testmonial;
