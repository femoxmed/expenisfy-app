import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'; 
import { startRemoveExpense} from '../action/expenses' ;
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({dispatch,id, description,amount ,note, createdAt}) =>
(
    
    <div className="content-container">
    <div className="list-header">
    <span className="show-for-mobile">Expenses</span><span className="show-for-desktop">Expenses</span><span className="show-for-desktop">Amount</span>
    </div>

    <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('₦0,0.00')}</h3>
  </Link>
          <button onClick={()=>  dispatch( startRemoveExpense(id))
         }>Delete</button>

        </div>
    
)


export default connect()(ExpenseListItem)