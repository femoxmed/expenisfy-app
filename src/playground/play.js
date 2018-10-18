function a(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is a' + message)
        }, 4000)
    })
}

async function getMessage() {
    let k = await a('Fuck test');

}






function ak(a, callback) {


    setTimeout(() => {

        callback('kkjkj' + a);
    }, 4000)
}
ak('joij', (callback) => {
    let k = console.log(callback)
})