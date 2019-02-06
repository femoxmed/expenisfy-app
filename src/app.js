import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter , {history} from './routes/AppRouter';

import 'normalize.css/normalize.css';
import './styles.css/style.scss';
import configureStore from '../src/store/configureStore';
 import {addExpense} from '../src/action/expenses';
 import filterExpense from '../src/selectors/filterExpense'
 import {login, logout } from './action/auth'
 import {startSetExpense } from '../src/action/expenses'
 import {firebase } from './firebase/firebase';


 const store = configureStore();
// console.log(store.getState());



//  store.subscribe(()=>{

//  const state = store.getState();
//  const ft = filterExpense(state.expenses,state.filter);
//  console.log(ft);
//  })
//  store.dispatch(addExpense({description:'i want to buy a phone',amount:76,createdAt:2087689}))
// store.dispatch(addExpense({description:'i want to buy a iphone',amount:96,createdAt:3067876}))
// store.dispatch(addExpense({description:'i want to buy a iphone',amount:40,createdAt:15654567}))


const jsx = (
    <Provider store = {store} >
    <AppRouter/>
    
    </Provider>
)
  let hasRendered = false
 const renderApp = () => {
     if (hasRendered === false ){
        ReactDom.render( jsx, document.getElementById('app'));
        hasRendered =  true
     }
   
 }


ReactDom.render( <p>Loading... </p>, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        console.log('user',user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(()=>{
       renderApp()
       if (history.location.pathname === '/')
       {
           
           history.push('/dashboard')
       }
})
        console.log('Login')
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/');
        
    }


})