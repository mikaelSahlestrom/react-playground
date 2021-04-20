import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filter, setFilter] = useState(2021);

  const onChangeFilterHandler = (filterValue) => {
    setFilter(filterValue);
  };

  let filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filter);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterValue={filter}
        onChangeFilter={onChangeFilterHandler}
      />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList expenses={filterExpenses} />
    </Card>
  );
}

export default Expenses;
