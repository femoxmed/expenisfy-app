
class Counter extends React.Component {
  constructor(props){
      super(props)
      this.addOne = this.addOne.bind(this)
      this.state  = {
   cuntt : 0,
   j : 'tayo'
  }
  }
  
   addOne(){
this.setState((prev)=>{
    return ({ j :'ope',
   cuntt :  prev.cuntt + 1 })

})
   }


    render(){

   return (
       <div>
       <h1>Counter : {this.state.cuntt} </h1> 
       <button onClick={this.addOne}>+1</button>
       <button>-1</button>
       <button>Reset</button>
       {this.state.j}
       
       </div>
   )


    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))