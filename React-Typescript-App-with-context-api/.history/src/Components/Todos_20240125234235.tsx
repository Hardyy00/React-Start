import React from "react";
import Todo from "../Model/todos";
import TodoItem from "./TodoItem";

// React.FunctionalComponent Type,and in that type we are defining the type of prop items
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem todoItem={item} />
      ))}
    </ul>
  );
};

export default Todos;
