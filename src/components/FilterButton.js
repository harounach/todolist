import React from "react";

const FilterButton = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return (
    <button className={"btn btn--filter" + classNames}>{props.name}</button>
  );
};

export default FilterButton;
