fetch('./data/profiles.json')
    .then( response => response.json())
    .then( data => {
        console.log(Object.keys(data));
    })

// const getUserColor = ( e ) => {
//     e.preventDefault();
//     fetch('./data/profiles.json')
//         .then( response => response.json())
//         .then(( data ) => {
//             return data;
//     })
// }

// let userInput = document.querySelector('#inputField');
// let submitButton = document.querySelector('#button');
// submitButton.addEventListener('click', getUserColor);