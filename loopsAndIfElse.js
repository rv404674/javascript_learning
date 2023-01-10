// conditional operator
let age = 20;
let voteable = (age < 18) ? "too young" : "old enough";

// NOTE: JS will compare string and int.
// x will be true.
// A nonumeric string will be converted to NaN, which is always false.
let x = 2 < "12"
let y = 2 > "John"

const dogObject = {
    dogName : "rubu",
    dogAge: 9
}

if (dogObject.dogAge > 10){
    console.log("budha doggu")
} else if (dogObject.dogAge > 5) {
    console.log("mid life dog")
} else {
    console.log("young dog");
}

let day = 1;
switch (day){
    case 0 :
        day = "Synday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 4:
        day = "wednesday"
        break;
    default:
        text = "looking forward to ehe weekend."
}

