import "./App.css";
import Todos from "./Components/Todos";
import Todo from "./Model/todos";

function App() {
  const todos = [new Todo()];
  return (
    <div>
      <Todos items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
