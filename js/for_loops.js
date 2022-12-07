function showMultiplicationTable(input){
    for (let i = 1; i < 11; i++){
        let answer = input * (i);
        console.log(`${input} * ${i} = ${answer}`);
}
}
showMultiplicationTable(7);

function isEvenOrOdd(){
    for (let i = 0; i < 11; i++){
        let input = Math.round(Math.random() * (200 - 20) + 20);
        if (input % 2 === 0){
            evenOdd = 'Even';
        } else {
            evenOdd = 'Odd';
        }
        console.log(`The #${i} random number is ${input}.`)
        console.log(`The number ${input} is ${evenOdd}`);
    }
}

function numPyramid(){
    for (let i = 0; i < 10; i++){
        console.log(String(i).repeat(i))
        }
}

// for (let i=0; i < 9; i++){
//     let number = i + 1;
//     let result = String(number);
//     for (let j = 1; j <= i; j++){
//         result += number;
//     }
//     console.log(result);
// }

function minusByFive(){
    for (let i = 100; i >= 5; i -= 5){
        console.log(i);
    }
}

