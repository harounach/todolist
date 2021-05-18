import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="page">
      <header className="page__header header">
        <h1 className="title">TodoList</h1>
      </header>
      <main className="page__main main">
        {/* todoapp */}
        <div className="todoapp">
          <div className="todoapp__section">
            {/* form */}
            <form className="form">
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
                />
                <button type="submit" className="btn btn--primary btn--form">
                  Add
                </button>
              </div>
            </form>
          </div>
          {/* filter buttns */}
          <div className="todoapp__section">
            <div className="filters btn-group">
              <button className="btn btn--filter btn--active btn--margin-right-s">
                All
              </button>
              <button className="btn btn--filter btn--margin-s">Active</button>
              <button className="btn btn--filter btn--margin-left-s">
                Completed
              </button>
            </div>
          </div>

          {/* Todo counter */}
          <div className="todoapp__section">
            <h2 className="todoapp__counter">4 tasks remaining</h2>
          </div>

          {/* todolist */}
          <div className="todoapp__section">
            <ul className="todolist">{taskList}</ul>
          </div>
        </div>
      </main>
      <footer className="page__footer footer">
        <p className="footer__notice">Copyright Haroun Ach 2021</p>
      </footer>
    </div>
  );
}

export default App;
