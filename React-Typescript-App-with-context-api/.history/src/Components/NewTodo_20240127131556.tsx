import React, { useRef } from "react";
import Todo from "../Model/todos";

const NewTodo: React.FC<{ onAddTodo: (item: Todo) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = inputRef.current!.value;

    if (text.trim().length == 0) {
      return;
    }

    props.onAddTodo(new Todo(text));
    inputRef.current!.value = "";
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
