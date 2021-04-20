import { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  };

  const hideNewExpenseFormHandler = () => {
    setShowExpenseForm(false);
  };

  const showNewExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };

  let expenseFormContent = <button onClick={showNewExpenseFormHandler}>Add New Expense</button>;

  if (showExpenseForm) {
    expenseFormContent = (
      <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        hideNewExpenseForm={hideNewExpenseFormHandler}
      />
    );
  }

  return <div className="new-expense">{expenseFormContent}</div>;
}

export default NewExpense;
