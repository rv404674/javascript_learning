for(let i = 0; i<5; i++) {
    console.log("Current Number" + i);
}

// NOTE: for in loop
const numbers = [2,10,20,40];
for(let x in numbers){
    console.log("Current Num " + x);
}


let txt = "";
numbers.forEach(myFunction);

function  myFunction(value){
    txt += value;
}