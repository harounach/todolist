import { useState } from "react";
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

// Filter map
const FILTER_MAP = {
  All: {
    cb: () => true,
    classNames: "btn--margin-right-s",
  },
  Active: {
    cb: (task) => !task.completed,
    classNames: "btn--margin-s",
  },
  Completed: {
    cb: (task) => task.completed,
    classNames: "btn--margin-left-s",
  },
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // State hooks
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");

  /**
   * Add new tasks
   * @param {string} name
   */
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  // Toggle tasks
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Delete tasks
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  // Edit tasks
  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // List of tasks
  const taskList = tasks
    .filter(FILTER_MAP[filter].cb)
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  // List of filter buttons
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
      classNames={FILTER_MAP[name].classNames}
    />
  ));

  // Tasks counter heading
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  // Render app content
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
            <div className="filters btn-group">{filterList}</div>
          </div>

          {/* Todo counter */}
          <div className="todoapp__section">
            <h2 className="todoapp__counter">{headingText}</h2>
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
