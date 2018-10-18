console.log('app is running');
const appRoot = document.getElementById('app');
const app = {
    name: 'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options: ['one','two']
}
let count = true;
let dis ="none"

const onFormSubmit = (e)=>{
e.preventDefault()
let option = e.target.option.value;
if(option){

app.options.push(option)
console.log(option)
 e.target.option.value= '';
}
appRender()
}

const deleteAll = ()=>{
    app.options=[];
    appRender()
}


const onMakeDecision = ()=>{
    // let ref = Math.floor(Math.random() * app.options.length)
    // console.log(ref)
    // alert(app.options[ref])
    // disabled={true ?count==true:false}
   count = !count
   if (count === false){
    document.getElementById('show').style.display="block" 
   }
 else{
    document.getElementById('show').style.display="none" 
 }
}
function appRender(){
    const  template= (
<div>
  <h1>{app.name}</h1>
  <p>{app.subtitle}</p>
    <p>{app.options.length >= 1 ? 'here are your options': ''}</p>
    <button   onClick={onMakeDecision}>What should i do?</button>
    

      <form  id="show" onSubmit={onFormSubmit}>
      <input display="none" type="text" name="option"></input>
      <p>{app.options.length}</p>
      <button name="submit" >Add Option</button>
      <button onClick={deleteAll}name="submit" >Add Option</button>
     <ol> {
          app.options.map((opt)=> <li key={opt}>{opt} </li> )
        } </ol>
      </form>

</div>
    )
    ReactDOM.render(template,appRoot)
}

 appRender()