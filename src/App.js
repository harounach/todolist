import { useState } from "react";
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks.map((task) => (
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
            <Form addTask={addTask} />
          </div>
          {/* filter buttns */}
          <div className="todoapp__section">
            <div className="filters btn-group">
              <FilterButton
                name="All"
                classNames="btn--active btn--margin-right-s"
              />
              <FilterButton name="Active" classNames="btn--margin-s" />
              <FilterButton name="Completed" classNames="btn--margin-left-s" />
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
