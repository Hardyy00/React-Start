import React from "react";
import Todo from "../Model/todos";
import classses from "./TodoItem.module.css";

const TodoItem: React.FC<{ todoItem: Todo }> = ({ todoItem }) => {
  return <li>{todoItem.text}</li>;
};

export default TodoItem;
