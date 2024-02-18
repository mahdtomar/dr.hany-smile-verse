import React from "react";

const DataContainer = (props) => {
  return (
    <div className={`data-container ${props.className}`}>
      <p className="title">
        <span>{props.title}</span>
        <img src={props.image} alt={props.alt} />
      </p>
      <span className="count">{props.count}</span>
    </div>
  );
};

export default DataContainer;
