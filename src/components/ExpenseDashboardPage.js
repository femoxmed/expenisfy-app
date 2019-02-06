import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters'
import TotalExpense from '../components/totalExpense'

const ExpenseDashboardPage = () => {
    return (
        <div>
  <TotalExpense />     

<ExpenseListFilters />
<ExpenseList />
        </div>
    )
};

export default ExpenseDashboardPage