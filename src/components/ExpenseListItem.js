import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'; 
import { removeExpense} from '../action/expenses' ;

const ExpenseListItem = ({dispatch,id, description,amount ,note, createdAt}) =>
(
    
    <div>
          <h3><Link to={`/edit/${id}`}>{description}</Link>  </h3>
          <p> amount : {amount} -- date: {createdAt} </p>
          <p>{note}</p>
          <button onClick={()=>  dispatch( removeExpense({id}))
         }>Delete</button>
        </div>
    
)



export default connect()(ExpenseListItem)