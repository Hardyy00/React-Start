import { useState } from "react";
import "./App.css";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Model/todos";

function App() {
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
