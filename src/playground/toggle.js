class Toggle extends React.Component {
  
  
    constructor(props){
           super(props)
           this.toggle = this.toggle.bind(this)
           this.state ={
               togVar : true
           }
        }

        toggle() {
         this.setState((prevState)=> {
          return({togVar : !prevState.togVar})  
     
        
        })

         }
  
  render() {


       return (
           <div> 
           <button onClick={this.toggle}>Toggle</button>
           {this.state.togVar && <p>llllll</p>  }
           
           </div>

       )
    }
}
ReactDOM.render(<Toggle />, document.getElementById('app'))