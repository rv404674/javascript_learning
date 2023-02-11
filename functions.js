// a js function is called when something invokes it.
// 1. when an event occurs (when a user clicks on the button).
// 2. when it is invoked (called) from JS code
// 3. Automatically (self invoked)


function myFunction(p1, p2){
    return p1 * p2;
}

let x = myFunction(4,3);
console.log(x);

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

let x = toCelsius(77);
console.log(x);


function calculateSum(x, y){
    return x+y;
}

// NOTE: ARROW/arrow function
