"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
let color;
let colorLower;

function analyzeColor(userInput){
    color = userInput
    color = prompt("Provide a color:");
    colorLower = color.toLowerCase();
    if (color === 'red'){
        return(`${color} is the color of blood.`)
    } else if (color === 'blue'){
        return (`${color} is the color of the ocean.`)
    } else {
        return (`${color} is not a color I know.`)
}
}
console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// let color;
// let colorLower;
//
// function analyzeColor(userInput){
//     color = userInput
// //    color = prompt("Provide a color:");
//     colorLower = color.toLowerCase();
//     switch(color){
//         case "red":
//             return (`${color} is the color of blood.`);
//             break;
//         case "blue":
//             return(`${color} is the color of the ocean.`);
//             break;
//         default:
//             return (`${color} is not a color I know.`);
//             break;
//     }
// }
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let color;
// let colorLower;
//
// function analyzeColor(userInput){
//     color = userInput
//     color = prompt("Provide a color:");
//     colorLower = color.toLowerCase();
//     switch(color){
//         case "red":
//             return (`${color} is the color of blood.`);
//             break;
//         case "blue":
//             return(`${color} is the color of the ocean.`);
//             break;
//         default:
//             return (`${color} is not a color I know.`);
//             break;
//     }
// }
// console.log(analyzeColor());
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// let randomNum = Math.floor(Math.random() * (6 - 1) + 1);
// let luckyNum = randomNum;
// let price1;
// let total;
//
// // console.log(calculateTotal(randomNum, 100));
// // console.log('Lucky Number: ' + luckyNum);
// // console.log('Total before discount: $' + price1);
// // console.log('Total after discount: $' + total)
//
//
// function calculateTotal(discount, price){
//     price1 = price;
//     switch(discount) {
//         case 0:
//             total = price - 0;
//             return total;
//             break;
//         case 1:
//             total = price - (price * .1);
//             return total;
//             break;
//         case 2:
//             total = price - (price * .25);
//             return total;
//             break;
//         case 3:
//             total = price - (price * .35);
//             return total;
//             break;
//         case 4:
//             total = price - (price * .5);
//             return total;
//             break;
//         case 5:
//             total = price - price;
//             return total;
//             break
// }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
// let priceInput = prompt('Bill total: ');
//
// console.log(calculateTotal(luckyNumber, priceInput));
// alert('Your lucky number is: ' + luckyNumber + '.');
// alert('Your total before discount: $' + priceInput + '.');
// alert('Your total after discount: $' + total + '.');

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let num1;
// let enterNum = confirm('Would you like to enter a number?');
// if(enterNum === true) {
//     num1 = prompt('Please enter your number: ')
// }else {
//     alert("Thank you. You're done.")
// }
// if(isNaN(num1)){
//     alert('That is not a number!')}
//
// if(num1 % 2 === 0){
//     alert('Your number is even.')}
// else{
//     alert('Your number is odd.')
// }

// Locate ingredients (Pantry)
    // Peanut Butter, Jelly, Bread
// Locate utensils (drawer)
    // Butter knife
    // Spoon
    // Plate
// Locate flat surface

// Layout all items on a flat surface
// Remove from package
// Determine with or w/o crust
    // w/o remove crust
// Lay bread down on plate

// Open peanut butter and jelly jars
// Mix peanut butter with spoon (creamy)
// Use spoon to scoop peanut butter from jar
// Spread peanut butter