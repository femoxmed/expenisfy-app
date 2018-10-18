import { createStore, combineReducers } from 'redux';


import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filtersReducer'


export default () => {
    const store = createStore(combineReducers({
            expenses: expenseReducer,
            filter: filterReducer

        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}