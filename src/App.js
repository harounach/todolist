import { useState } from "react";
import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  // State hooks
  const [tasks, setTasks] = useState(props.tasks);

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
  const taskList = tasks.map((task) => (
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
