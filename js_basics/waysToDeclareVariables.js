var x = 20;
let y = 30;

console.log("value of x is" + x);
// NOTE: var keyword is used in all JS code from 1995 - 2015
// let and const were added to JS in 2015

// so if you want older browser support use - var
// NOTE: in our case use let always.
// also let has block level scope as well. You can declare same varible,
// outside the scope. But that
{
    let temp = 100;
    console.log(temp);
}

// temp cant be used here, as it is undefined.
// console.log(temp)

let temp1 = 50;
temp1 = 100;

// NOTE: Variable hoisting
// NOTE: Hoisting is JS default behaviour of moving all the declarations to the top of the current scope.
// this will work.
tempVar = 5;
var tempVar;


// FIXME: this will never work though.
tempLet = 10;
var tempLet;
// let and const are hoisted to the top of the block, but not initialized.


// that is not the case with let
bikeName = "gixer";
let bikeName;

// NOTE: constants
// you can;t reassign a constant value, but you can change the values of the array.
// also scope for constnats is same as that of let.
const cars = ["Saab", "Volvo", "BMW"]
cars[0]= "rahul";
cars.push("sachinverma");

// but you cant reassing
// cars = ["sfs"]





























