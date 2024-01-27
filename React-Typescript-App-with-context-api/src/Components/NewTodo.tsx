import React, { useContext, useRef } from "react";
import Todo from "../Model/todos";
import classes from "./NewTodo.module.css";
import TodosContext from "../store/todos-context";

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = inputRef.current!.value;

    if (text.trim().length == 0) {
      return;
    }

    ctx.addTodo(new Todo(text));

    inputRef.current!.value = "";
  };

  return (
    <form action="" onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
