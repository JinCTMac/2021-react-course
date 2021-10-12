// import ExpenseItem from "./components/expense_item";
import Expenses from "./components/Expenses/expenses";
import NewExpense from "./components/NewExpense/new_expense";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* inside we can pass the whole expenses array as an attribute that we can access via props inside of the expenses.jsx - we can call props.expenses[0] for example */}
      <NewExpense></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
