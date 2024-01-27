import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

// React.FunctionalComponent Type,and in that type we are defining the type of prop items
const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctx.todos.map((item) => (
        <TodoItem todoItem={item} key={item.id} />
      ))}
    </ul>
  );
};

export default Todos;
