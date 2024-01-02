import React, { useState } from "react";
import "./expenseForm.css";

export default function ExpenseForm(props) {
  // we get an event object whenever , the handler function is called,that describes about the event

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /// ----------- or
  // instead of using multiple state using a single state to update all the values

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setting state for all the fields together
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value, // overriding previous value
    // });
    // back there we were using the previous state (...userInput) for managing the current state, and it should be done like this

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // convert entered amount from string to number
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // sending the data to the app.jsx i.e to the parent component
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const closeButtonHandler = (event) => {
    props.onShowButton(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name=""
            id=""
            value={enteredTitle} // 2-way binding
            onChange={titleChangeHandler}
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="20230-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={closeButtonHandler}>
          Close
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
