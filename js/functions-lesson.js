// let message = myfunction(name: 'Robert');
// console.log(message);
let person1 = 'Billy';
    person2 = 'Bob';
fight('Billy', 'Bob');
let x = isEven(928374987234);
console.log(x)
let y = isEven('lskjdf');
console.log(y)
let z = isEven(true);
console.log(z)

function myfunction(name){
    return 'Thank you, ' + name + '. You have ran my function.'
}

function fight(person1, person2){
    console.log(person1 + ' punched ' + person2 + ' right in the kisser.')
}

function isEven(num){
    // GET THE PIECES OF THE PUZZLE!!!!!
    // put the pieces of the puzzle into variables
    let number = num;
    let answer = (number % 2 == 0);
    // Finally return the answer
    return answer;
}