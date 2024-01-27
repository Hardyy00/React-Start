import { useState } from "react";
import "./App.css";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Model/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodos((pre) => [...pre, todo]);
  }

  function removeTodo(id: string) {
    setTodos((pre) => pre.filter((item: Todo) => item.id !== id));
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
