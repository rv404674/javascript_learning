// create a set
// NOTE: SET - unique collection of values
const letters = new Set(["a", "b", "c", "c"]);
console.log(letters.size);


const letters2 = new Set();
// create variables
const a = "a";
const b = "b";
letters2.add(a);
letters2.add(b);

// returns the values
console.log(letters.values())

// NOTE: JS Maps
// key value pairs - like hashmap in java
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.get("apples"))

// change the existing values.
fruits.set("tomatos", 600);
console.log(fruits.values())

// check is a key is present.
fruits.has("apples");
fruits.delete("apples");

const fruitsObject = {
    fruits: 500,
    bananas: 300,
    2:400
};

console.log(fruitsObject["2"]);

// FIXME: WARNING - what is the difference between object and map, as both can store key val pair
/**
 * MAJOR DIFF
 * 1. In the map, a key can be anything - function, string, number, etc,
 * whereas in object it can only be string.
 *
 * 2. In a map, order of elements is guaranteed to be in the insertion order.
 * 3. Unlike objects, map has the standard, get, delete and set methods.
 */

// NOTE: Conclusion in a prod env, using map makes more sense.



















