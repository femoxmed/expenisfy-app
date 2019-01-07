 import React from 'react'
 import { connect } from 'react-redux'
 import totalExpense from '../selectors/totalExpense'
 import FilterExpense from '../selectors/FilterExpense'


 export const TotalExpense = (props) => {
     const expenseWord = props.expressCount ===  1 ? 'expense' : 'expenses'
     return ( <div>
         <h1> The { props.expensesCount } { expenseWord }
         and the total = { props.expensesTotal } </h1>


         </div>
     )
 }


 const mapStateToProps = (state) => {
     const expenses = FilterExpense(state.expenses, state.filter)
     return {
         expensesCount: expenses.length,
         expensesTotal: totalExpense(expenses)
     }


 }

 export default connect(mapStateToProps)(TotalExpense)