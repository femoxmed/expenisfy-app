import React from 'react';
import  {NavLink,Link} from 'react-router-dom';
import {connect } from 'react-redux'
import {startLogOut} from '../action/auth'

export const Header = ({startLogOut}) =>(
  
 
    <div className='header'> 
     <div className='content-container'>
     <div className='header__content'>
     <Link to="/dashboard" className='header__title'><h1 >EXPENSIFY APP</h1></Link>
       <button className="button button--link" onClick={startLogOut} >Log Out</button>
     </div>
    
     </div>
    </div>
  
    
  );
  const mapStateToDispatch = (dispatch) => ({
   startLogOut : () => {
     return dispatch(startLogOut())
   }
  })

    export default connect(undefined, mapStateToDispatch)(Header); 