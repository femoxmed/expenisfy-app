let appRoot = document.getElementById('app');
let count = 0;
const cunti = ()=>{
    if (count >= 1) {count = count - 1;} 
    else if
    ((count < 1) && (count == 0)  ){
        count ++
    }
appRender()
console.log(count)

}

var  user = {
          name: 'femi',
          age: 6,
          loc: "Lagos",
         location : (location)=>{
            if (location) {
                 return <p> Location: {location} </p>
             } else return 'unknown'
          }
      };
      const appRender = ()=>{
         
let template = ( 
    <div>
    {(user.name&& user.age>18) &&  <p> you {user.name} is above 18</p>}
        <p>  {user.name ? user.name : 'Anonymous'}</p>
         {user.location(user.loc)}
         <button onClick={cunti}>BUTTON :{count}</button> {count}
    </div>   
);

    ReactDOM.render(template, appRoot);
      }
      appRender()