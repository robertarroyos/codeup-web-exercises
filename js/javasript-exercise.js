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