import Todo from "../Model/todos";

/* eslint-disable @typescript-eslint/no-unused-vars */
const TodosContext = React.createContext<Todo[]>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
