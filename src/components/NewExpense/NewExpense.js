import './NewExpense.css'

import ExpenseFrom from './ExpenseForm'

function NewExpense(props){
    const onSaveExpenseDataHandler =(enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        // console.log(expenseData)
        props.onNewExpense(expenseData)
    }
    return (
        <div className='new-expense'>
            <ExpenseFrom onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense