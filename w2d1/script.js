function d6a(){
    var roll = Math.random(); // random number between inclusive 0 and exclusive 1
    roll = Math.floor(roll * 6); // multiply it by 6, and i floor the result
    roll++;
    return roll;
}

function d6b() {
    return Math.floor(Math.random() * 6) + 1;
}

function d6() {
    var roll = (Math.random() * 6) + 1;
    return Math.floor(roll);
}

var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

var playerRolla = d6a();
console.log("The player rolled: " + playerRolla);
var playerRollb = d6b();
// console.log("The player rolled: " + playerRollb);


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt."
];
function oracle(arr){
    var randomIndex = Math.floor(Math.random()*arr.length);
    console.log(randomIndex);
    var answers = arr[randomIndex];
    return answers;
}
console.log(oracle(lifesAnswers))