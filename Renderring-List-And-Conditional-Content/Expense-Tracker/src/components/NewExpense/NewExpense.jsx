import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

export default function NewExpense(props) {
  const [showButton, setShowButton] = useState(true); // to manage if we want to show button , or the form
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid(),
    };

    props.onAddExpense(expenseData);
  };

  // for the close button of the form , if that button is click then the add expense button has to be displayed, i.e form has to be closed
  const onShowButtonHandler = (state) => {
    setShowButton(state);
  };

  // for the add expense button , if that button is closed ,then the from has to be opened
  const addExpenseHandler = (event) => {
    setShowButton(false);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData is used to get the data from the child component, in the childComponent it will be accessed as props.onSaveExpenseData */}

      {/* if showButton is true, we will display the button , else we will display the form */}
      {showButton ? (
        <button onClick={addExpenseHandler}>Add Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onShowButton={onShowButtonHandler}
        />
      )}
    </div>
  );
}
