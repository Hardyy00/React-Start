import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return <ul>{props.items}</ul>;
};

export default Todos;
