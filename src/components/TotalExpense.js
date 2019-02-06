 import React from 'react'
 import {Link } from 'react-router-dom'
  import { connect } from 'react-redux'
 import totalExpense from '../selectors/totalExpense'
 import FilterExpense from '../selectors/FilterExpense'


 export const TotalExpense = (props) => {
     const expenseWord = props.expressCount ===  1 ? 'expense' : 'expenses'
     return (
         
        <div className='page-header'>
           <div className='content-container'>
                    <h1 className='page-header__title'> Viewing <span> { props.expensesCount }</span> { expenseWord }
                        and the total = <span> ₦{ props.expensesTotal } </span>
                    </h1>
                <div class="page-heder__actions">
                 <Link to='/create' className='button'>Create Expense</Link>
                </div>

            </div>
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