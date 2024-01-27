import Todo from "../Model/todos";
import React from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (item: Todo) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

Todo;

const TodoContextProvider: React.FC = (props) => {};
