import React from 'react';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensesPage from '../components/AddExpensespage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />

    <Switch>
       <Route path="/" component={ExpenseDashboardPage} exact={true} />
       <Route path="/create" component={AddExpensesPage} />
       <Route path="/edit/:id" component={EditExpensePage} />
       <Route path="/help" component={HelpExpensePage}/>
       <Route  component={NotFoundPage}/>
       </Switch>

       </div>
    </BrowserRouter>
    )


export default AppRouter