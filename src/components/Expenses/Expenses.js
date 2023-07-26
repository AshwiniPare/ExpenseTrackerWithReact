import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className="expenses">
          

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