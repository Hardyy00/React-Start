import React, { useContext } from "react";
import Todo from "../Model/todos";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import TodosContext from "../store/todos-context";

// React.FunctionalComponent Type,and in that type we are defining the type of prop items
const Todos: React.FC = (props) => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          todoItem={item}
          key={item.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
