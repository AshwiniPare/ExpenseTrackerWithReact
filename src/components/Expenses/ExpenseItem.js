import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';
import Card from '../UI/Card'

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  const deleteHandler = () => {
    console.log("Clicked!!! + ");
    var gfg_down =
                document.getElementById(props.id);
               // gfg_down.parentElement.removeChild(gfg_down);
               // gfg_down.parentNode.removeChild(gfg_down);
  };

 return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail amount={props.amount} location={props.location} title={props.title}></ExpenseDetail>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
