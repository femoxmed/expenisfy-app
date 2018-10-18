import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpense } from '../action/expenses'

const AddExpensesPage = (props) => {
    return(
    
        <div>
         This is the Add expense Page
         <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(addExpense(expense)) 
            props.history.push('/')
         }}/>
        </div>
    )
}


export default connect()(AddExpensesPage)