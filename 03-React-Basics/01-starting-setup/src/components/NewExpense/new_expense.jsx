import React from 'react';
import './new_expense.css';
import ExpenseForm from './expense_form';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      // we should take the expense data object from expenseForm as a param
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // console.log(expenseData)
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
