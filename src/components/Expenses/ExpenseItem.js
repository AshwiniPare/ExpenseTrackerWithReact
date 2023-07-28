import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card'

function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);
  const [title, setTitle] = useState(props.title);
  

  const clickHandler = () => {
    setTitle('Updated!');
    console.log("Clicked!!!");

  };

  const amountHandler = () => {
    setAmount("100$");
    console.log("Amount Clicked!!!");

  };

  const deleteHandler = () => {
    console.log("Clicked!!! + ");
    var gfg_down =
                document.getElementById(props.id);
               
               //gfg_down.parentNode.removeChild(gfg_down);
               // gfg_down.parentNode.removeChild(gfg_down);
  };

 return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail amount={amount} location={props.location} title={title}></ExpenseDetail>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountHandler}>Change amount</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
