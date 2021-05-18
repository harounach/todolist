import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      props.addTask(name);
    }
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__section">
        <h2 className="form__label-wrapper">
          <label htmlFor="new-todo-input" className="form__label">
            What needs to be done?
          </label>
        </h2>
      </div>
      <div className="form__section">
        <input
          type="text"
          id="form__input-control"
          className="form__input-control"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn--primary btn--form">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
