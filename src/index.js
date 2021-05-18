import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Run", completed: false },
  { id: "todo-3", name: "Code", completed: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
