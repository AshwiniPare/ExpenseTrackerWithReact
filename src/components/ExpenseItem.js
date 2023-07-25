import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import ExpenseDetail from './ExpenseDetail';

function ExpenseItem(props) {
  

  return (
    <div className="expense-item">
     
      <div className="expense-item__description">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetail amount={props.amount} location={props.location} title={props.title}></ExpenseDetail>
      </div>
    </div>
  );
}

export default ExpenseItem;
