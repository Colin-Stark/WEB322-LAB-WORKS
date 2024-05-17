let blueprint = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

blueprint.age = 40; // Change the age

// let result = blueprint.greet(); // Hello, my name is John and I am 30 years old.


// *************************** OR ********************************


/**
 * Creating a class with object literals
 */
class Personel {
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

const personal = new Personel('John', 30);

// personal.greet(); // Hello, my name is John and I am 30 years old.

// *************************** OR ********************************

class Personin {
    name;
    age;
    constructor(...args) {
        [this.name, this.age] = args;
    }

    greet(delay) {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }, delay);
    }
}

const persons = new Personin('bloke', 20);

// persons.greet(1000);


/**
 * Working with private properties
 */
class Person {
    name;
    age;
    email;
    #sin;
    address;
    constructor(name, age, email, SIN, Addy) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.#sin = SIN;
        this.address = Addy;
    }

    get sin() {
        return this.#sin = 'xxx-xx-xxxx';
    }

    set sin(value) {
        this.#sin = value;
    }

    display() {
        console.log(
            `
            Name: ${this.name}
            Age: ${this.age}
            Email: ${this.email}
            Address: ${this.address}
            `
        );
    }
}


let newPerson = new Person('John', 30, 'john@test.com', 1234567890, '12 James Street, Toronto, ON, M5C 2H5');

newPerson.display();
console.log(newPerson.sin);
console.log(newPerson.name);






