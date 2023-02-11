// NOTE: same concept as that in java.
// try, catch, finally, throw.

// age validation example
let age = 10;

try {
    if(age < 20)
        throw "age is too low";
} catch (err){
    console.log("Message: " + err.message);
} finally {
    console.log("finally is always executed.");
}

// Range Error
// Reference Error
// Syntax Error