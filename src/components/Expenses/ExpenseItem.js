import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {

  return (
    console.log(props),
    <Card className="expense-item">
      <ExpenseDate date={ props.date }/>
      <div className="expense-item__description">
        <h2>{ props.title }</h2>
        <div className="expense-item__price">{ props.amount }</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

/*function ExpenseItem(date, description, amountSpent) {
  
  return (
    <div className="expense-item">
      <div>{ date }</div>
      <div className="expense-item__description">
        <h2>{ description }</h2>
        <div className="expense-item__price">{ amountSpent }</div>
      </div>
    </div>
  );
}

export default ExpenseItem;*/
