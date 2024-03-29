import React from 'react'
import './ExpenseItem.css'

function ExpenseDetail(props) {
    return (
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <div>{props.location}</div>
        </div>
    );
}

export default ExpenseDetail;