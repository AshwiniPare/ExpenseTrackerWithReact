import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

    return (
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

      {props.expenses.map(item => (
        <ExpenseItem  key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        location={item.location}>
        </ExpenseItem>
      ))}
      </Card>
    );
}

export default Expenses;