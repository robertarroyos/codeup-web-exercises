

let myPromise = fetch( 'https://api.github.com/users');

myPromise.then(response => console.log(response.json()))
myPromise.catch(error => console.log(error))





// fetch('https://api.github.com/users')
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data)
// })
// .catch(error => console.error(error));

// Async example

// async function getUsersAsync() {
//     try {
//         let response = await fetch('https://api.github.com/users');
//         let data = await response.json();
//         return data;
//     } catch(error){
//
//     }
// }

// Async arrow function

// const getUsersAsync = async () => {
//
// }

//iife arrow function
// (async () => {
//     try {
//         let users = await getUsers();
//         let repos = await getRepos();
//     }
//     catch (error){
//
//     }
// })();

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             console.log(users);
//         })
//     })
// })
//
// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })
//
// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })
//
// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })
//
// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages);
// })

// let p = new Promise(( resolve, reject ) => {
//     let a = 1+1
//     if ( a === 2 ) {
//         resolve('Success' )
//     } else {
//         reject( 'Failed' )
//     }
// })
//
// p.then(( message ) => {
//     console.log('This is in the then ' + message)
// }).catch(( message ) => {
//     console.log('This is in the catch ' + message)
// })

// let p = new Promise(( resolve, reject) => {
//     let a = 1+2
//     if ( a === 2 ) {
//         resolve('Success')
//     } else {
//         reject( 'Fail')
//     }
// })
//
// p.then(( message) => {
//     console.log('This is in the then ' + message)
// }).catch(( message) => {
//     console.log('This is in the catch ' + message)
// })

// fetch( 'https://reqres.in/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'user1'
//     })
// }).then(res => {
//     return res.json()
// })
//     .then(data => console.log(data))
//     .catch(error => console.log( 'ERROR' ))