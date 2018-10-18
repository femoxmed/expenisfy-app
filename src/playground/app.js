   class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        

        this.state = {
             options :[]
            
        }
    }
    componentDidMount(){
        
     const json = localStorage.getItem('options')
     const options = JSON.parse(json)
     console.log(options)
     if (options){ this.setState(()=>( {options})) }
    
    }

    componentDidUpdate(prevProps,prevState){
        if (prevState.options !== this.state.options){
           const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    handleRemoveAll(){
        this.setState(()=>({options:[]}))  }

        handleDeleteOption(option){
            this.setState((prevState)=>({
                options : prevState.options.filter((options) => ( options !== option))
            }))
       }
         


    handlePick(){
        this.setState(()=>{
            let ref = Math.floor(Math.random() * this.state.options.length)
    console.log(ref)
    alert(this.state.options[ref])
    
        })
    }

    handleAddOption(option){
        if (!option){
let a=  'Enter a Valid Option';
return a;
       } else if (this.state.options.indexOf(option) > -1){
           return 'Option Already Exist';
       } 
   this.setState((prevState)=>{
 
      
       return {options : prevState.options.concat(option)}
   })
    }
      
      render(){

          const title = 'Indecison App';
          const subtitle = 'Put your Life in the hands of a computer ';
         
return (
        <div>hello
        <Header    subtitle={subtitle} />
        <Action hasOptions ={this.state.options.length > 0}
           handleRemoveAll= {this.handleRemoveAll}
           handlePick = {this.handlePick} />
        <Options options={this.state.options} 
        handleDeleteOption = {this.handleDeleteOption}
        />
        <Option />
        <AddOption
        handleAddOption={this.handleAddOption}
        />

        </div>
) 
       }
   }

   IndecisionApp.defaultProps = {
       options : []
   }

const Header = (props)=>{
    return (
               <div>
               <h1> {props.title} </h1>
               <h2> {props.subtitle}</h2>
               
               </div>
           )
}
   Header.defaultProps = {
       title : 'Some Header'
   }


  const Action = (props) =>{
   
         return ( <div>
            <button onClick={props.handleRemoveAll}>Remove All </button>
               { !props.hasOptions && <p>Enter  options to get started</p>}
             <button onClick={props.handlePick} disabled={!props.hasOptions}>What Should I do?</button> 
         </div>);

  

  };
    const Options = (props) => {
      return (
        <div> 
       {
           props.options.map((opt) => (
               <Option 
                       key={opt} 
                       optionText={opt}
                       handleDeleteOption = {props.handleDeleteOption}
                       />
           ))
       }
        
        
        </div>
      );
    }
 
 const  Option = (props) => {
    
     return(
         <div>  
       
         {props.optionText} 
          {props.optionText&&  
            <button onClick = {(e) => { props.handleDeleteOption(props.optionText)}}>remove </button>}
         
         </div>
         
         
     )

 }

class AddOption extends React.Component {
  constructor(props){
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
            error: undefined
        }
  }
     handleAddOption  (e){

        e.preventDefault()
         let option = e.target.elements.option.value.trim()
        
        
        const  error = this.props.handleAddOption(option)
          this.setState(() => {
           
              return {error};
          
        } );
        if (!error){
                e.target.elements.option.value = ''
              }
        }


     render(){
  


         return (
             <div>     
 This is an option
 {this.state.error && <p> {this.state.error} </p>} 
 <form onSubmit={this.handleAddOption}> 
<input type = "text" name="option"></input>
<button name="submit">SUBMIT</button>

 </form>
      </div>
         );
     }
 }

    ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


  