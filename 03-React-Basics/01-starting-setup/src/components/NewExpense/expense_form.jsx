import './expense_form.css';
import React, { useState } from 'react';

const ExpenseForm = () => {

  // we store the useState variable as an empty string ''
  // because the input element always returns a string
  // even if its a number, it will be returned as a string to be set equal to the value
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // or we can use a single state like so
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    // to be executed when the title input changes
    // remember we just point at this function in the input field, without ()
    setEnteredTitle(event.currentTarget.value);
    // instead of using 3 separate states, we could use the single setUserInput state and add to it like so with a new object to replace the old one
    // setUserInput({...userInput, enteredTitle: event.currentTarget.value})
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.currentTarget.value);
    // instead of using 3 separate states, we could use the single setUserInput state and add to it like so with a new object to replace the old one
    // setUserInput({...userInput, enteredAmount: event.currentTarget.value})
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.currentTarget.value);
    // instead of using 3 separate states, we could use the single setUserInput state and add to it like so with a new object to replace the old one
    // setUserInput({...userInput, enteredDate: event.currentTarget.value})
  }

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" steps="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
