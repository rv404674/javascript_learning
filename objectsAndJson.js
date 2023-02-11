const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// directly add properties as well
person.email = "rv404674@gmail.com";

const {firstName, lastName, address: {city}} = person;
console.log(firstName);

const personJson = JSON.stringify(person);
console.log("Json of Person object ", personJson);


// bikeNames
// an array of objects
const bikeNames = [
    {
        id: 1,
        text: 'tuktuk is the best',
        misc: 'red coloured beast - gixer'
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Take out trash',
        isCompleted: true
    }
]

const bikeNamesJson = JSON.stringify(bikeNames);
console.log(bikeNamesJson);