import "./expenses.css";
import Card from "./card";
import ExpenseItem from "./expense_item";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* we pass down the expenses array as the expenses attribute, so we can call props.expenses[0].title for example */}
      <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
    </Card>
  )
}

export default Expenses;
