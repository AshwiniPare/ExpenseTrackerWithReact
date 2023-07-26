import React from 'react'
import Expenses from './components/Expenses/Expenses'

const App = () => {
  const expenses = [
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Mangalore'},
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Puttur'},
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Bangalore'}
  ]
  
 return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, "getting started"),
    React.createElement(Expenses, {expenses: expenses})
  );
  /*return (
      <div >
      <Expenses expenses={expenses}></Expenses>
        
    </div>
  );*/
}

export default App;
