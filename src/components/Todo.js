import React from "react";
import EditIcon from "../images/edit_black_24dp.svg";
import DeleteIcon from "../images/delete_black_24dp.svg";

const Todo = (props) => {
  return (
    <li className="todo">
      {/* Todo View */}
      <div className="todo__view">
        <input
          id={props.id}
          type="checkbox"
          className="todo__checkbox"
          defaultChecked={props.completed}
        />
        <label className="todo__label" htmlFor={props.id}>
          {props.name}
        </label>
        <div className="btn-group btn-group--inline">
          <button className="btn btn--40 btn--rounded btn--margin-right-s">
            <img className="btn__icon" src={EditIcon} alt="" />
            <span className="visually-hidden">Edit {props.name}</span>
          </button>
          <button className="btn btn--40 btn--rounded btn--margin-right">
            <img className="btn__icon" src={DeleteIcon} alt="" />
            <span className="visually-hidden">Delete {props.name}</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
