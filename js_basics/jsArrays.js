// arrays in js
// 0 based indexing.
const bikeNames = ["gixer", "pulsar", "continental", "hunter"];
// NOTE: this wont give any error.
bikeNames[5] = "temp1";

console.log(bikeNames);
console.log(bikeNames[4]);

let firstBike = bikeNames[0];
let lastBike = bikeNames[bikeNames.length -1];
console.log(lastBike);

// NOTE: for loops, looping through the array
for(let i=0; i<bikeNames.length; i++){
    let bikeNum = i+1;
    console.log("bike " + bikeNum + " " + "is" + bikeNames[i]);
}

// NOTE: can be looped like this as well.
function myFunction(value){
    console.log("bike is " + value);
}

bikeNames.forEach(myFunction);

// FIXME: Warning, adding elements with high indexes can create undefined holes in
// an array.
const fruits = ["banana", "apple", "orange"];
fruits[6] = "lemon";

// preferred way to add are these.
// NOTE: 0 based indexing.
fruits.push("grapes");
fruits[fruits.length] = "tomato";


// NOTE: arrays use numbered indexes, objects uses named indexes.
// objects are like hashmap in general.


