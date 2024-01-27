import React, { useContext } from "react";
import Todo from "../Model/todos";
import classses from "./TodoItem.module.css";
import TodosContext from "../store/todos-context";

const TodoItem: React.FC<{
  todoItem: Todo;
}> = ({ todoItem }) => {
  const ctx = useContext(TodosContext);
  return (
    <li className={classses.item} onClick={() => ctx.removeTodo(todoItem.id)}>
      {todoItem.text}
    </li>
  );
};

export default TodoItem;
