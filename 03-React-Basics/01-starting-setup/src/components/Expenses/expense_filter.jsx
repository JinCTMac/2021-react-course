import React from 'react';

import './expense_filter.css';

const ExpensesFilter = (props) => {
  // we set a state for the year filtered
  // const [enteredYear, setEnteredYear] = useState('');
  // the function for the event listener on the select
  const selectYearHandler = (event) => {
    // setEnteredYear(event.target.value);
    // if we passed enteredYear it will send the last value before the selection
    props.onExpenseFilterYear(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* we want to listen on changes to select */}
        <select value={props.selectedYear} onChange={selectYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
