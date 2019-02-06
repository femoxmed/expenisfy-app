import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import { connect  } from 'react-redux'
import { startEditExpense } from '../action/expenses';
import {removeExpense } from '../action/expenses'

const EditExpensePage = (props) =>{
    return (
        //  This is the edit expense Page {props.match.params.id}
        <div className="page-header">
        
        
        <div  className="content-container">
        <ExpenseForm 
         //send this props to the component that has just been created 
          expense ={props.expense}
         onSubmit={(expense)=>{
             props.dispatch(startEditExpense(props.expense.id,expense));
             props.history.push('/')
         }}/>

         <button  className="button  button-delete" onClick={() => {
             props.dispatch(removeExpense({id:props.match.params.id}))
             props.history.push('/')
         }}>Delete Expense</button>
      
        </div>
         
          

        </div>
    )
}

const mapToState =  (state, props) =>{
    return {
expense: state.expenses.find((expenses)=> {
   return expenses.id === props.match.params.id

   //use find to search for the particular that match with the selected id
}
)}}

//remember to return value of yr functions femi

export default connect(mapToState)(EditExpensePage)
