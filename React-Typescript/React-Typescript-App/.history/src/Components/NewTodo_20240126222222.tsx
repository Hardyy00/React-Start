import React, { useRef } from "react";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
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
