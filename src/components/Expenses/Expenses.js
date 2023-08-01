import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  console.log("in expenses  ",props);
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {

    return expense.date.getFullYear().toString() === filteredYear;
  })

  
  //console.log(filteredExpenses);
    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
         
      <ExpensesList items={filteredExpenses}/>
      </Card>
    );
}

export default Expenses;