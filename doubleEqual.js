const x = '10';

// NOTE: this will give true
//  == doesnt COMPARE TYPES
if(x == 10){
    console.log("print yes");
}

// use === to compare types as well
if(x === 10){
    console.log("no: not equal");
}