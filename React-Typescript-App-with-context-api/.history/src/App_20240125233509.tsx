import "./App.css";
import Todos from "./Components/Todos";
import Todo from "./Model/todos";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
