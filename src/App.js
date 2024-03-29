import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses'
import  NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
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
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  /*const expenses = [
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Mangalore'},
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Puttur'},
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Bangalore'}
  ]*/
  
 const [expenses, setExpenses] = useState(dummy_expenses);


 
  

  const addExpensehandler = expense => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  }

 /*return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, "getting started"),
    React.createElement(Expenses, {expenses: expenses})
  );*/
  return (
      <div >
        <NewExpense onAddExpense={addExpensehandler}/>
        <Expenses expenses={expenses}></Expenses>
        
    </div>
  );
}

export default App;
