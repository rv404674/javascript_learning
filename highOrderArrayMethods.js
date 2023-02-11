// forEach, map, filter

// forEach
const bikeNames = [
    {
        id: 1,
        text: 'tuktuk is the best',
        misc: 'red coloured beast - gixer',
        isBought: true
    },
    {
        id: 2,
        text: 'Ninja 400 goes fast',
        misc: 'It is 6 lakhs on road though',
        isBought: false
    },
    {
        id: 3,
        text: 'Continental 650 does 0-100 in 5secs',
        misc: 'Sexy exhaust note, hulky body, caferacer',
        isBought: false
    }
]


// NOTE: foreach -> for traversal
bikeNames.forEach(function(bike) {
    console.log(bike.text);
});

// NOTE: map returns an array
const bikeTestKeyArray = bikeNames.map(function (bike){
    return bike.text;
});

// NOTE: filter applies filter and then returns
// get bike id that you have bought.
const boughtBikes = bikeNames.filter(function (bike){
    return bike.isBought == true;
}).map(function (bike){
    return bike.id;
});

console.log(boughtBikes);



