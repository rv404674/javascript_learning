// Scope in JS has three types.
// block scope, function scope, global scope.

// NOTE: block scope - let, const has block scopre only
// var doesnt have block scope.
{
    let x = 2;
}
// x cannot be used here.
// ReferenceError: x is not defined
console.log(x);

{
    var x = 2;
}
// x can be used here.


// NOTE: Local scope, all the variables inside the funciton has local scope
// i.e they are local to a function.

function myCar() {
    var carName = "volvo";
    console.log(carName);
    console.log(bikeNameGlobal);
}

// NOTE: Global scope
// variables declared globally (outside any func) have global scope.
// global variables can be accessed anywhere in a JS program.
let bikeNameGlobal = "gixerSF150";

// FIXME: automatically global
// if you assign a value to a variable that has not been declared,
// it will automatically become a global variable

myFunction();
// code here can use carName

function myFunction() {
    // now carname becomes global automatically.
    carName = "Volvo";
}

// NOTE: To fix the global strict STRICT keyword is being used.


























