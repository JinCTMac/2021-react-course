// then in the expense item.jsx, we can import the expenseDate

import ExpenseDate from "./expense_date";
import Card from "../UI/card";
import "./expense_item.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  return (
    <Card className="expense-item">
      {/* in here we can call our expenseDate component
      so we can call components inside of components */}
      {/* note in order to access the props.date value inside of the expense_date.jsx, we need to pass the date attribute inside here as a props */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
