import React from "react";

const FeatureTile = (props) => {
  return (
    <div className="FeatureTile-comp">
      <div className="image">
        <img src={props.img} alt="" />
      </div>
      <div className="description">
        <span>{props.title}</span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureTile;
