import Todo from "../Model/todos";

/* eslint-disable @typescript-eslint/no-unused-vars */
const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (item: Todo) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
