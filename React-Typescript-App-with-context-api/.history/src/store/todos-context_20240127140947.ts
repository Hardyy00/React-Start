import Todo from "../Model/todos";

/* eslint-disable @typescript-eslint/no-unused-vars */
const TodosContext = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
