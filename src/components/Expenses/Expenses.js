import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            date={expense.date}
            expense={expense.title}
            price={expense.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
