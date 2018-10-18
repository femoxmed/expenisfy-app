import React from 'react';
import  {NavLink,Link} from 'react-router-dom';


const Header = () =>(
  
 
    <div> 
    <h1>EXPENSIFY APP</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create</NavLink>
    <NavLink to="/edit" activeClassName="is-active"> edit</NavLink>
    <NavLink to="/help" activeClassName="is-active"> help</NavLink>
    </div>
  
    
  );
  

    export default Header;