// 1) Given an array of numbers, find and return the max value. arr.length === n

function findMax(arr){
    var max = arr[0];

    //                  n
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

var numbers1 = [53, 61, 27, 31, 97, 23, 80, 12, 73, 8];
// console.log("first output: ", findMax(numbers1)); // => 97

var numbers2 = [10, 82, 73, 79, 172, 3];
// console.log("second output: ", findMax(numbers2)); // => 172



// 2) fizzbuzz

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

var n = 30;
console.log(n % 5);


// make a change

for(var n = 0; n<=100; n++){
    if(n % 15 === 0){
        console.log("FizzBuzz")
    }else if(n % 5 === 0){
        console.log("Buzz");
    }else if(n % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(n);
    }
}

// 1 === 1 true
// 1 === "1" false

// 1 == 1 true
// 1 == "1" true