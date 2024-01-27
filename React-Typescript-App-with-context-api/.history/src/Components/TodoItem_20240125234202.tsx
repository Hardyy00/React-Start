import React from "react";
import Todo from "../Model/todos";

const TodoItem: React.FC<{ todoItem: Todo }> = ({ todoItem }) => {
  return <li key={todoItem.id}>{todoItem.text}</li>;
};

export default TodoItem;
