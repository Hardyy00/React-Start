import React, { useRef } from "react";

const NewTodo = (props): React.FC => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const text = inputRef.current!.value;

    if (text.trim().length == 0) {
      return;
    }

    props.addTodo();
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
