// then in the expense item.jsx, we can import the expenseDate
// need to import useState to change the state and call the component function again
import React, { useState } from 'react';

import ExpenseDate from "./expense_date";
import Card from "../UI/card";
import "./expense_item.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // useState takes a variable and returns an array of 2 elements
  // the variable value, and a function to change the value of that variable
  const [title, setTitle] = useState(props.title);

  // we update the value of a variable with an event and calling that function
  // the function takes the argument of what we want the variable to be changed to
  const clickHandler = () => {
    console.log("Clicked!");
    setTitle("Updated!");
  }

  return (
    <Card className="expense-item">
      {/* in here we can call our expenseDate component
      so we can call components inside of components */}
      {/* note in order to access the props.date value inside of the expense_date.jsx, we need to pass the date attribute inside here as a props */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem;
