import React from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card'

function ExpenseItem(props) {
  const deleteHandler = () => {
    console.log("Clicked!!! + ");
    var gfg_down =
                document.getElementById(props.id);
               
               //gfg_down.parentNode.removeChild(gfg_down);
               // gfg_down.parentNode.removeChild(gfg_down);
  };

 return (
  <li>
    <Card className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail amount={props.amount} location={props.location} title={props.title}></ExpenseDetail>
      <button >Delete Expense</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
