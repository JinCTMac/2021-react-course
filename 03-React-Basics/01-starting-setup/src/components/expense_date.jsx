const ExpenseDate = (props) => {
  // when splitting date into its own Component, we need to get props again to access the data from the App.js
  const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
  const expenseDay = props.date.toLocaleString('en-US', { day: '2-digit'});
  const expenseYear = props.date.getFullYear();

  return (
    <div>
      {/* {props.date.toISOString()} */}
      <div>{expenseMonth}</div>
      <div>{expenseYear}</div>
      <div>{expenseDay}</div>
    </div>
  )
}

export default ExpenseDate;
