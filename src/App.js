import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Mangalore'},
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Puttur'},
    {title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28), location: 'Bangalore'}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
       >
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
       >
      </ExpenseItem>
    </div>
  );
}

export default App;
