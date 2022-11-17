import AllExpenses from "./Components/Expenses/AllExpensesItems";
import "./App.css";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const EXPENSES_DEFAULT = [
  {
    id: "e1",
    title: "Toilet",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES_DEFAULT);

  const addExpenseHendler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHendler} />
      <AllExpenses items={expenses} />
    </div>
  );
}

export default App;
