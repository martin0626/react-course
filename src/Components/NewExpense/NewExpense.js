import "./NewExpense.css";
import ExpenseForm from "./NewExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  };

  const [enteredDisplay, setDisplay] = useState(false);

  let actionFormHandler = (event) => {
    event.preventDefault();
    if (enteredDisplay === true) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  return (
    <div className="new-expense">
      {!enteredDisplay && (
        <button onClick={actionFormHandler}>New Expense</button>
      )}
      {enteredDisplay && (
        <ExpenseForm
          closeForm={actionFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
