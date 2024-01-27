import Todo from "../Model/todos";
import React from "react";

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

Todo;

export function TodosContextProvider(props): React.FC {
  <TodosContext.Provider></TodosContext.Provider>;
}
