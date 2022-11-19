import Card from "../UI/Card";
import "./AllExpenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChar from "./ExpensesChart";

function AllExpenses(props) {
  let [filteredYear, setFilteredYear] = useState("All");

  const expenseFilterHandler = (filter) => {
    setFilteredYear(filter);
  };

  let filteredItems = props.items.filter(
    (item) =>
      item.date.getFullYear().toString() === filteredYear ||
      filteredYear === "All"
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onExpenseFilter={expenseFilterHandler}
      />
      <ExpenseChar expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default AllExpenses;
