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
// variables defined with var are hoisted on the top and can be initizliaed at any time
carName = "volvo";
var carName;

// that is not the case with let
bikeName = "gixer";
let bikeName;



