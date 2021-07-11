import {useState} from 'react';
import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';
import { render } from '@testing-library/react';

const NewExpense = (props) => {
    const [renderExpenseForm, setRenderExpenseForm] = useState(false);

    const newExpenseButtonHandler = (event) => {
        setRenderExpenseForm(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {!renderExpenseForm && <button onClick={newExpenseButtonHandler}>Add New Expense</button>}
            {renderExpenseForm && <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler }/>}
        </div>

    );
}

export default NewExpense;