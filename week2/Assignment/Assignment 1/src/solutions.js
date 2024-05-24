/**
 * WEB322 – Assignment 01
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date: <SUBMISSION_DATE>
 *
 * Please see all unit tests in the files problem-1.test.js, problem-2.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive into all the problems
 * below, let's spend a minute helping you learn how to read this code, and how
 * to understand the tests that go with it.
 *
 * In addition to this file, please also open the src/problem-0.test.js file.
 * Start by reading the comment at the top of that file, then come back here and
 * continue.
 *
 * After you finish reading src/problem-0.test.js, it's time to try running
 * the tests.  To run the tests, go to your terminal and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as src/ and package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any code below.
 *
 * You can also run tests for only this problem instead of everything.  To do that:
 *
 *   npm test problem-0
 *
 * This will look for tests that are part of the problem-0.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one failed:
 *
 * ✕ greeting should say "Hello Name!" (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should say "Hello Name!"
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB322 Student!"
 *   Received: "Hello WEB322 Student"
 *
 *     63 |   test('greeting should say "Hello Name!"', function() {
 *     64 |     let result = greeting('WEB322 Student');
 *   > 65 |     expect(result).toBe('Hello WEB322 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the test 'greeting should say "Hello Name!"' is failing.
 * It's failing on line 65 of src/problem-0.test.js.  In particular, it's failing
 * because it expected to get the String "Hello WEB322 Student!" but instead
 * it actually received the String "Hello WEB322 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final ! character.  Try adding it below, save this file, and re-run the
 * tests again:
 *
 * npm test problem-0
 * PASS  src/problem-0.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should say "Hello Name!"
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment, and also read the tests
 * to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {String} name - the name to greet in the message
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell use the type {String} or {Number}, and also the parameter's name.
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: Object Literal Notation:

    - Create an object using Object Literal Notation to represent a car.
    - Include properties such as "make", "model", "year", and "color".
    - Implement a method called `displayDetails()` to display the car's details.
      - ex: Make: Toyota, Model: Camry, Year: 2022, Color: Blue
 ******************************************************************************/

let CarUsingLiteralNotation = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Blue',
  displayDetails: function () {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
  }
};

/*******************************************************************************
 * Problem 2: The "class" keyword:

    - Rewrite the car object using the "class" keyword to define a Car class.
    - Implement a constructor method to initialize the car's properties.
    - Implement a method called `displayDetails()` to display the car's details.
      - Make: Toyota, Model: Camry, Year: 2022, Color: Blue
    - Create a private property called `fuelEconomy` to store fuel economy.
    - Create a getter for `fuelEconomy` to retrieve the current fuelEconomy with units ex:"7.5 L/KM".
    - Implement a setter for fuelEconomy that takes number as argument to update the fuelEconomy securely.
 ******************************************************************************/

class CarUsingClass {
  make;
  model;
  year;
  color;
  #fuelEconomy;
  constructor(make, model, year, color, fuelEconomy) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.#fuelEconomy = fuelEconomy;
  }

  displayDetails() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
  }

  get fuelEconomy() {
    return `${this.#fuelEconomy} L/KM`;
  }

  set fuelEconomy(val) {
    this.#fuelEconomy = val;
  }
}

/*******************************************************************************
 * Problem 3: Inheritance:

    - Create a subclass of Car, such as ElectricCar, to represent electric vehicles.
    - Add an attribute called `batteryCapacity` to subclass ElectricCar (ex. 100kwh)
    - Add a method called `chargeBattery()` that prints  "Charging the {make} {model}'s battery.""
    - example output can be  "Charging Tesla Model 3's battery"
 ******************************************************************************/

class ElectricCar extends Car {
}

/*******************************************************************************
 * Problem 4: Array Destructuring:

    - Write an arrow function `printUser` that takes an object parameter user with properties name and age, and prints them.
    - You must use object destructuring to get name and age.
 ******************************************************************************/

let printUser = (user) => {
  const { name, age } = user;
  console.log(`Name: ${name}, Age: ${age}`);
};

/*******************************************************************************
 * Problem 5: Arrays and Iterating:

    - Create an array fruits with  5 different fruit names - Apple, Orange, Mango, Strawberry and Banana.
    - Use a for...of loop to iterate over the fruits array and print each fruit.
 ******************************************************************************/
let fruitPrinter = () => { };

/*******************************************************************************
 * Problem 6: Error Handling:

    - Write an arrow function `calculateSquareRoot` that takes a number as parameter and calculates the square root of the number.
    - If the input is negative, throw an error with a message "Input must be a non-negative number"
 ******************************************************************************/
let calculateSquareRoot = () => { };

// These lines expose your functions to the unit tests, you can ignore them.
exports.greeting = greeting;
exports.CarUsingLiteralNotation = CarUsingLiteralNotation;
exports.CarUsingClass = CarUsingClass;
exports.ElectricCar = ElectricCar;
exports.printUser = printUser;
exports.fruitPrinter = fruitPrinter;
exports.calculateSquareRoot = calculateSquareRoot;
