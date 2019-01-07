import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';

import 'normalize.css/normalize.css';
import './styles.css/style.scss';
import configureStore from '../src/store/configureStore';
 import {addExpense} from '../src/action/expenses';
 import filterExpense from '../src/selectors/filterExpense'
 import './firebase/firebase';

const store = configureStore();
console.log(store.getState());



 store.subscribe(()=>{

 const state = store.getState();
 const ft = filterExpense(state.expenses,state.filter);
 console.log(ft);
 })
//  store.dispatch(addExpense({description:'i want to buy a phone',amount:76,createdAt:2087689}))
// store.dispatch(addExpense({description:'i want to buy a iphone',amount:96,createdAt:3067876}))
// store.dispatch(addExpense({description:'i want to buy a iphone',amount:40,createdAt:15654567}))


const jsx = (
    <Provider store = {store} >
    <AppRouter/>
    
    </Provider>
)
ReactDom.render( jsx, document.getElementById('app'))