import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className="expenses">
        <ExpenseItem 
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
          location={props.expenses[0].location}
         >
        </ExpenseItem>
        <ExpenseItem 
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
          location={props.expenses[1].location}
         >
        </ExpenseItem>
      </Card>
    );
}

export default Expenses;