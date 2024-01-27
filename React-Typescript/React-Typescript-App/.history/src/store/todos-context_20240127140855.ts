const TodosContext = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => void,
});
