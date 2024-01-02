// default import , named import
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
  // state variable , stateFunction
  const [title, setTitle] = useState(props.title);

  const clickHandler = (props) => {
    setTitle("updated");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount} Rs.</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}
