import React from "react";

const Testmonial = (props) => {
  return (
    <div className="testmonial">
      <p className="feedback">{props.msg}</p>
      <span>{props.person}</span>
    </div>
  );
};

export default Testmonial;
