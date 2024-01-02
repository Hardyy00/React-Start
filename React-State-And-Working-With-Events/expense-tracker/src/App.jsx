import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";
export default function App() {
  // dummy data for the expenses
  const expenses = [
    {
      id: "e1",
      title: "Complex",
      amount: 150,
      date: new Date(2023, 9, 7),
    },

    {
      id: "e2",
      title: "Canteen",
      amount: 50,
      date: new Date(2023, 9, 6),
    },

    {
      id: "e3",
      title: "Hospital",
      amount: 800,
      date: new Date(2022, 3, 1),
    },

    {
      id: "e4",
      title: "Car Insurance",
      amount: 70000,
      date: new Date(2021, 5, 2),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in add Expense Handler");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
