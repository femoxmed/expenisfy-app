import * as firebase from 'firebase'
import * as expenseAction from '../action/expenses'



const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);


const database = firebase.database()


// database.ref().set({
//         name: 'Andrew Mead',
//         age: 26,
//         isSingle: false,
//         location: {
//             city: 'Phil',
//             country: 'US'
//         }
//     }).then(console.log('data added succesful'))
//     .catch((e) => { console.log(e) })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })



database.ref('expenses').set({
    description: 'rent',
    note: '',
    amount: 123467,
    createdAt: 978123408763
})

database.ref('expenses').set({
    description: 'phone bill',
    note: '',
    amount: 5566467,
    createdAt: 978123408763
})

database.ref('expenses').set({
    description: 'clothes',
    note: '',
    amount: 45566,
    createdAt: 978123408456
})

database.ref('expenses').set({
    description: 'general',
    note: 'for saye',
    amount: 123467,
    createdAt: 978123408763
})