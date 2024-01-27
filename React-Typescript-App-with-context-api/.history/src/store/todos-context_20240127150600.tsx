import Todo from "../Model/todos";
import React, { ReactNode, useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */

type TodosContextType = {
  todos: Todo[];
  addTodo: (item: Todo) => void;
  removeTodo: (id: string) => void;
};
const TodosContext = React.createContext<>({
  todos: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (item: Todo) => {
    setTodos((pre) => [...pre, item]);
  };

  const removeTodo = (id: string) => {
    setTodos((pre) => pre.filter((item) => item.id !== id));
  };

  const state: {
    todos: Todo[];
    addTodo: (item: Todo) => void;
    removeTodo: (id: string) => void;
  } = {
    todos,
    addTodo,
    removeTodo,
  };
  return (
    <TodosContext.Provider value={state}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
