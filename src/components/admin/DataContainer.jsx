import React from "react";

const DataContainer = (props) => {
  return (
    <div className="done">
      <p className="title">
        <span>{props.title}</span>
        <img src={props.image} alt={props.alt} />
      </p>
    </div>
  );
};

export default DataContainer;
