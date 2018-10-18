console.log('destgructuring')

const myarray = [{ 'name': 'femi' }, { age: 12 }];


const age = JSON.stringify(myarray[1])

//destructuring

console.log(myarray)
console.log(`(${age})`)


const [name, agg] = myarray
console.log(name)