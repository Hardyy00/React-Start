import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  const [filterYear, setFilterYear] = useState("2020");

  const saveYearHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <div className="expenses">
      {/* doing two way binding    */}
      <ExpensesFilter selectedYear={filterYear} onSaveYear={saveYearHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}
