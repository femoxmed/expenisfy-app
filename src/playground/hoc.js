import React from 'react'
import ReactDOM from 'react-dom'

const Warning = (props) => (
    <div> warning {props.info} </div>
)

const Warning2 = (props)=>(
    <div>   2</div>
)



const WithAdminWarning = (WrappedComponent, WrappedComponent2) => {
  return (props) => (
      <div>
      AdminContent
        <WrappedComponent {...props} />
        <WrappedComponent2 />

      </div>
  )  
}

const AdminInfo = WithAdminWarning(Warning,Warning2)


ReactDOM.render( <AdminInfo info = ': only admin can see this ' 
    
    /> , document.getElementById('app'))