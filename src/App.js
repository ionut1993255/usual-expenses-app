import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Rent",
    amount: 500,
    date: new Date(2020, 6, 14)
  },
  { id: "e2", title: "New TV", amount: 600, date: new Date(2021, 5, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 230,
    date: new Date(2022, 2, 12)
  },
  {
    id: "e4",
    title: "New Phone",
    amount: 450,
    date: new Date(2022, 10, 8)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
