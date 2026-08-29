//build a number guessing game with an actual input from the user
//first you have to store the "readline" by require it from node
const readline=require('readline');
const rl=readline.createInterface({input:process.stdin, output:process.stdout})
let ranNum=Math.floor(Math.random()*11);
const numGuessingGame=()=>{
    rl.question("Pick a random number from 1 to 10: ",(answer)=>{
        if(parseInt(answer,10)===ranNum){console.log("You guessed the number! Great job!"); rl.close()}
        else if(parseInt(answer,10)>ranNum){console.log("Nice attempt, try to pick a lower number");numGuessingGame()}
        else if(parseInt(answer,10)<ranNum){console.log("Nice attempt, try to pick a higher number");numGuessingGame()}
    })
    
}
numGuessingGame();