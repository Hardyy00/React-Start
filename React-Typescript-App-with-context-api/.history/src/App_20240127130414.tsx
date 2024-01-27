import "./App.css";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./Model/todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

  function addTodo(todo: Todo) {
    todos.push(todo);
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
