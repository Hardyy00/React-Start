import "./App.css";
import Todos from "./Components/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}

export default App;
