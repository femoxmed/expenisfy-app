import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters'
import TotalExpense from '../components/totalExpense'

const ExpenseDashboardPage = () => {
    return (
        <div>
  <TotalExpense />     
<ExpenseList />
<ExpenseListFilters />
         This is the dashboard Page
        </div>
    )
};

export default ExpenseDashboardPage