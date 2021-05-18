import React from "react";

const FilterButton = (props) => {
  let classNames = props.classNames ? " " + props.classNames : "";
  if (props.isPressed) {
    classNames += " " + "btn--active";
  }
  return (
    <button
      className={"btn btn--filter" + classNames}
      onClick={() => props.setFilter(props.name)}
    >
      {props.name}
    </button>
  );
};

export default FilterButton;
