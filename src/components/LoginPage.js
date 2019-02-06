import React from 'React'
import { connect } from 'react-redux';
import { startLogin } from '../action/auth'
const LoginPage = ({startLogin}) => (
    <div className='box-layout'>
    <div  className = 'box-layout__box'>
    <h1>Expenses APP</h1>
    <p>Its time to get your expenses under control</p>
    <button className='button' onClick={startLogin}>Login  With Google</button>
    
    </div> 
   
    </div>
)

const mapDispatchToProps = (dispatch) => ({
startLogin : () => dispatch(startLogin()) 
})
export default connect(undefined, mapDispatchToProps)(LoginPage);   