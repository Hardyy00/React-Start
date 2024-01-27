import React from "react";
import Todo from "../Model/todos";
import classses from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todoItem: Todo;
  onRemoveTodo: (id: string) => void;
}> = ({ todoItem }) => {
  return <li className={classses.item}>{todoItem.text}</li>;
};

export default TodoItem;
