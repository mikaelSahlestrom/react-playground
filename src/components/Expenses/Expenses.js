import {useState} from "react"
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";

function Expenses(props) {

  const [filter, setFilter] = useState("2021")

  const onChangeFilterHandler = (filterValue) => {
    setFilter(filterValue)
  }
  return (

    <Card className="expenses">
      <ExpensesFilter filterValue={filter} onChangeFilter={onChangeFilterHandler}/>
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            price={expense.amount}
            key={index}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
