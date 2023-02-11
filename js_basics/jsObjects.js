// NOTE: it is a common convention to declare objects as consts
const car = {type:"Fiat", model:"500", color:"white"};

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log("Name is" + " " + person.firstName);
console.log("LastName is" + " " + person["lastName"]);


// NOTE: you can have methods in object itself.
const student = {
    firstName: "Sachin",
    lastName: "Verma",
    id : 151364,
    maths: 60,
    chemistry: 80,
    totalMarks: function (){
        return this.maths + this.chemistry;
    },
    avgPercentage: function (){
        return this.totalMarks()/2;
    }
}

const engineer = {
    firstName: "Ruby",
    lastName: "Verma",
    salary: 4500000,
    department: "Tech and Product",
    info: function (){
        return "Name: " + this.firstName + "LastName: " + this.lastName;
    }
}

console.log(engineer.info());

// NOTE: JS arrays





























