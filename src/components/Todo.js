import React, { useState } from "react";
import EditIcon from "../images/edit_black_24dp.svg";
import DeleteIcon from "../images/delete_black_24dp.svg";

const Todo = (props) => {
  // State hooks
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  // Edit template
  const editTemplate = (
    <div className="todo__edit">
      <form className="todo__form" onSubmit={handleSubmit}>
        <div className="todo__form-section">
          <label htmlFor={props.id} className="todo__form-label">
            New name for {props.name}
          </label>
        </div>
        <div className="todo__form-section">
          <input
            id={props.id}
            type="text"
            className="todo__form-input"
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div className="todo__form-section">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn--secondary btn--lg"
              onClick={() => setEditing(false)}
            >
              Cancel
              <span className="visually-hidden">renaming {props.name}</span>
            </button>
            <button type="submit" className="btn btn--primary btn--lg">
              Save
              <span className="visually-hidden">new name for {props.name}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  // View template
  const viewTemplate = (
    <div className="todo__view">
      <input
        id={props.id}
        type="checkbox"
        className="todo__checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label className="todo__label" htmlFor={props.id}>
        {props.name}
      </label>
      <div className="btn-group btn-group--inline">
        <button
          className="btn btn--40 btn--rounded btn--margin-right-s"
          onClick={() => setEditing(true)}
        >
          <img className="btn__icon" src={EditIcon} alt="" />
          <span className="visually-hidden">Edit {props.name}</span>
        </button>
        <button
          className="btn btn--40 btn--rounded btn--margin-right"
          onClick={() => props.deleteTask(props.id)}
        >
          <img className="btn__icon" src={DeleteIcon} alt="" />
          <span className="visually-hidden">Delete {props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editTemplate : viewTemplate}</li>;
};

export default Todo;
