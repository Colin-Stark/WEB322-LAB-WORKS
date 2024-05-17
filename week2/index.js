let blueprint = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

blueprint.age = 40; // Change the age

let result = blueprint.greet(); // Hello, my name is John and I am 30 years old.


// *************************** OR ********************************


/**
 * Creating a class with object literals
 */
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const personal = new Person('John', 30);

personal.greet(); // Hello, my name is John and I am 30 years old.



// *************************** OR ********************************

class Personin {
    name;
    age;
    constructor(...args) {
        [this.name, this.age] = args;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const persons = new Personin('bloke', 20);

persons.greet(); 