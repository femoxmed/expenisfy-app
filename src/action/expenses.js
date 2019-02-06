import uuid from 'uuid'
import database from '../firebase/firebase';
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;

        const expense = { description, note, amount, createdAt };

        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}




export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().
        then(() => { dispatch(removeExpense({ id })) })
    }
}


export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

})

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}
export const setExpense = (expenses) => {
    return {
        type: 'SET_EXPENSE',
        expenses
    }
}


export const startSetExpense = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpense(expenses))
        })
    }

}





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