import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters'

const ExpenseDashboardPage = () => {
    return (
        <div>
        
<ExpenseList />
<ExpenseListFilters />
         This is the dashboard Page
        </div>
    )
};

export default ExpenseDashboardPage