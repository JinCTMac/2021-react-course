import "./expense_item.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  const expenseMonth = props.date.toLocaleString('en-US', { month: 'long' });
  const expenseDay = props.date.toLocaleString('en-US', { day: '2-digit'});
  const expenseYear = props.date.getFullYear();


  return (
    <div className="expense-item">
      {/* convert to iso string for readability */}
      <div>
        {/* {props.date.toISOString()} */}
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDay}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;
