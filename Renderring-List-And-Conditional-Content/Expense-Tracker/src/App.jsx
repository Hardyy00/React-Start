import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import { v4 as uuid } from "uuid";

import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: uuid(),
    title: "Complex",
    amount: 150,
    date: new Date(2023, 9, 7),
  },

  {
    id: uuid(),
    title: "Canteen",
    amount: 50,
    date: new Date(2023, 9, 6),
  },

  {
    id: uuid(),
    title: "Hospital",
    amount: 800,
    date: new Date(2022, 3, 1),
  },

  {
    id: uuid(),
    title: "Car Insurance",
    amount: 70000,
    date: new Date(2021, 5, 2),
  },
];

export default function App() {
  // dummy data for the expenses
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      const newState = [expense, ...prevState];
      // console.log(newState);
      return newState;
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
