import React from 'react';
import './new_expense.css';
import ExpenseForm from './expense_form';

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  )
}

export default NewExpense;
