import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpenseData is used to get the data from the child component, in the childComponent it will be accessed as props.onSaveExpenseData */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
