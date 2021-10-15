import "./expenses.css";
import Card from "../UI/card";
import ExpenseItem from "./expense_item";
import ExpenseFilter from "./expense_filter";
import React, { useState } from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  // make a function to be pointed to by the ExpenseFilter prop
  const expenseFilterYearHandler = (filteredExpenseYear) => {
    console.log(filteredExpenseYear);
    setFilteredYear(filteredExpenseYear)
  }

  // below we point to the expenseFilterYearHandler as a prop as well as
  // setting the default year as filteredYear, which is 2020 via 2-way binding
  return (
    <div>
      <ExpenseFilter selectedYear={filteredYear} onExpenseFilterYear={expenseFilterYearHandler}></ExpenseFilter>
      <Card className="expenses">
        {/* we pass down the expenses array as the expenses attribute, so we can call props.expenses[0].title for example */}
        {/* in the card.jsx, we append the prop.className so that we get access to the css applied for the className expenses */}
        <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
      </Card>
    </div>
  )
}

export default Expenses;
