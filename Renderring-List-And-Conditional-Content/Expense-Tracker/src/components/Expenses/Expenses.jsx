import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");

  const saveYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredArray = expenses.filter(
    (expense) => expense.date.getFullYear() == filterYear
  );

  let expenseContent = <p class="no-expense-message">No Expense found</p>;

  // conditional rendering
  if (filteredArray.length > 0) {
    expenseContent = filteredArray.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <div className="expenses">
      {/* doing two way binding    */}
      <ExpensesFilter selectedYear={filterYear} onSaveYear={saveYearHandler} />

      {/* dynamically render the expenses with the help of array.map() , after the looping
      we give get an array consisting of all the custom component tags like [tag1, tag2] and the react will
      render it */}

      <ExpensesChart expenses={filteredArray} />

      {expenseContent}
    </div>
  );
}
