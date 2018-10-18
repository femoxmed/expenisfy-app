import uuid from 'uuid'

export const addExpense = ({ description = '', note = '', amount = '', createdAt = '' } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

})

//filter reducer functions

export const filterText = (text) => ({
    type: 'FILTER_TEXT',
    text: text

})

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});




// const store = createStore(combineReducers({
//     expenses: expenseReducer,
//     filter: filterReducer
// }))

// store.subscribe(() => {
//     const state = store.getState();

//     const ft = filterExpense(state.expenses, state.filter)
//     console.log(ft)
//         // console.log(store.getState())
// })

// const expenseOne = store.dispatch(addExpense({ description: 'ok new', createdAt: 140 }));
// const expense2 = store.dispatch(addExpense({ description: 'ok nellw' }));
// // store.dispatch(removeExpense({}));
// // store.dispatch(editExpense(expense2.expense.id, { amount: '10000' }))
// // store.dispatch(filterText({ text: 'my fav text' }))
// store.dispatch(setStartDate(100))
// store.dispatch(setEndDate(400))

// // console.log(expenseOne)



// const demoState = {
//     expenses: [{
//         id: 'kjkjdsk',
//         description: 'January Rent',
//         note: 'this was the final payment for the purpose',
//         amount: 55000,
//         createdAt: 0
//     }],

//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         EndDate: undefined
//     }
// }