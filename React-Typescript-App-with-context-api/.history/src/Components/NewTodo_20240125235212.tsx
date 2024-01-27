import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {};
  return (
    <form action="" onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
