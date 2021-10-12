import "./expense_date.css";

const ExpenseDate = (props) => {
  // when splitting date into its own Component, we need to get props again to access the data from the App.js
  // it is better to make static variables to contain the logic
  // rather than implementing the logic within the jsx code itself
  const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
  const expenseDay = props.date.toLocaleString('en-US', { day: '2-digit'});
  const expenseYear = props.date.getFullYear();

  return (
    <div className="expense-date">
      {/* {props.date.toISOString()} */}
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  )
}

export default ExpenseDate;
