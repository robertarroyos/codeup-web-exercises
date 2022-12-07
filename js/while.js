console.log('Running While Loop.js')
//
// let numMultiplyBy = 2;
// let counter = 8;
// while(counter < 16){
//     console.log(numMultiplyBy);
//     numMultiplyBy *= 2;
//     counter++;
// }
//
// for(let i = 0, num = 2; i < 16; i++){
//     console.log(num);
//     num *= 2;
// }

let conesToSell = Math.floor(Math.random() * (100 - 50) + 50);
do{
    let conesToBuy = Math.floor(Math.random() * (5 - 1) + 1);
    if(conesToBuy <= conesToSell){
        console.log(`${conesToBuy} cones sold...`);
        conesToSell -= conesToBuy;
    } else {
        console.log(`Cannot sell you ${conesToBuy} cones, I have ony ${conesToSell}...`);
        console.log(`${conesToSell} cones sold...`);
        conesToSell -= conesToBuy;
        console.log(`Yay! I have sold them all!`);
        break;
    }

}while (conesToSell > 0);