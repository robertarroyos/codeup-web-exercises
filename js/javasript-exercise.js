// const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Pickles',
//         type: 'Dog',
//         age: 10
//     }
//
// ];
//
// function findAverageDogAge(pets){
//     let total = 0;
//     let dogCount = 0;
//     pets.forEach((pet) => {
//         if (pet.type === 'Dog'){
//             total += pet.age;
//             dogCount++;
//         }
//     });
//     return total / dogCount;
// }
//
// console.log(findAverageDogAge(pets), 7.5);
// ======================= returnPetWithNoFish Exercise ======================
// const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];
//
// function returnPetWithNoFish(pets){
//     let petsNewArr = [];
//     pets.forEach((pet) => {
//         if (pet.type !== 'Fish'){
//             petsNewArr.push(pet);
//         }
//     });
//     return petsNewArr;
// }
//
// console.log(returnPetWithNoFish(pets))
//
// const pets = [
//     {
//         name: 'Sparky',
//         type: 'Fish',
//         age: 4
//     },
//     {
//         name: 'Mr. Pig',
//         type: 'Cat',
//         age: 4
//     },
//     {
//         name: 'Bubba',
//         type: 'Dog',
//         age: 5
//     },
//     {
//         name: 'Beans',
//         type: 'Dog',
//         age: 3
//     },
//     {
//         name: 'Mr. Salmon',
//         type: 'Fish',
//         age: 1
//     }
// ];

// function returnLastTwoChars(input){
//     return input.slice(-2);
// }
//
// function returnLastCharsReversed(string, number){
//     let lastChars = string.slice(-(number));
//     return lastChars.split('').reverse().join('');
// }
//
// function filterList(arr){
//     let newArr = [];
//     arr.forEach(function (item){
//         let newArr = (typeof item !== 'string') ? newArr.push(item) : false;
//     })
//     return newArr;
// }

// function zipArrays(array1, array2) {
//     let newArray = [];
//     if (array1.length === array2.length) {
//         for (let i = 0; i < array1.length; i++) {
//             newArray.push(array1[i]);
//             newArray.push(array2[i]);
//         }
//         return newArray
//     }
//     return newArray;
// }
//
// const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// function getUserCredentials() {
//     let credentials = [];
//     for (let i = 0; i < users.length; i++) {
//         let user = users[i];
//         credentials.push({username: user.username, password: user.password})
//     }
//     return credentials;
//         }
// console.log(getUserCredentials(users));

// function getUserCredentials() {
//     let credentials = [];
//     users.forEach(function(user) {
//         credentials.push({username: user.username, password: user.password});
//     })
//     return credentials;
// }
//
// console.log(getUserCredentials(users));
//
// for (let i = 0; i < 10; i++) {
//     console.log("The value of i is " + i);
// }
//
// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//
// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

