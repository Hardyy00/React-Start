import React from "react";
import Todo from "../Model/todos";

// React.FunctionalComponent Type,and in that type we are defining the type of prop items
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
