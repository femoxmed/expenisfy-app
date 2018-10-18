import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from '../components/ExpenseListItem';
import FilterExpense from '../selectors/FilterExpense';

const ExpenseList = (props) => ( <div> {
        props.expenses.map((expense) => {
            return <ExpenseListItem {...expense }
            />
        })
    }


    </div>
)


const mapToStateProps = (state) => {
    return {
        // expenses: state.expenses,
        // filters : state.filters
        expenses: FilterExpense(state.expenses, state.filter)
    };

}
const ConnectedExpenseList = connect(mapToStateProps)(ExpenseList)

export default ConnectedExpenseList