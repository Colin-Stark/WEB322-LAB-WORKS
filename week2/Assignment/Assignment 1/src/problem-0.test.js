/**
 * Welcome to the Problem 0 Unit Tests! These files are code that
 * has already been written for you, you don't need to do anything
 * in them except read what's here.
 *
 * A Unit Test is a piece of code that tests another piece of code.
 * We call them Unit tests, because we try to have our tests test the
 * smallest possible unit of code that we can.
 *
 * These tests have been written using a Testing Framework called Jest.
 * Jest was created by Facebook to help its developers write code with
 * fewer bugs. You can read more about it at https://jestjs.io/en/
 *
 * Each of the problems that you need to solve in src/solutions.js
 * has an associated file with unit tests.  These tests define the
 * expected behaviour of your code.  If you write your tests correctly,
 * all the tests should PASS.  If you make a mistake, one or more of them
 * will FAIL.
 *
 * Your goal is get all of the 50+ tests in this assignment to PASS.
 * It's sort of like a video game, except instead of using a gamepad
 * you'll be writing JavaScript!
 *
 * Some of what these tests do is more complex than what you know how to
 * do yourself at this point.  Don't worry about that.  Remember, you don't
 * have to write the tests, only get your code to pass them.
 *
 * To help you, we'll document and explain everything in this file as we go.
 * This first line is getting the greeting function from the file solutions.js.
 * Don't worry about this for the moment, but if you're curious, you can read more
 * at https://nodejs.org/en/knowledge/getting-started/what-is-require/
 */
const { greeting } = require('./solutions');

/**
 * Next, we use one of Jest's functions called describe().  It allows
 * us to describe our tests for a particular feature, and give them a name.
 * Doing so makes it a bit easier to see what's going on when we run our tests.
 * We also define a function() {...} to contain our tests.
 */
describe('Problem 0 - greeting() function', function () {
  /**
   * Now we can start writing our individual tests.  We try to keep our tests
   * small, and only test 1 thing at a time.  This makes it easier to implement
   * our code and slowly make progress.
   *
   * Our first test makes sure that the variable named `greeting` is really
   * a function.  We're using Jest's expect() function, which let's us
   * compare an actual value (something returned by running our code) to an
   * expected value (something we define in advance in our test).  You don't need
   * to spend too much time on this, but if you're interested, you can read more
   * about expect() at https://jestjs.io/docs/en/expect.
   */
  test('greeting should be a function', function () {
    // This is like saying: if(typeof greeting === 'function')
    expect(typeof greeting).toBe('function');
  });

  /**
   * Our final test for greeting() checks to make sure that if you pass in
   * a name (a String), that it returns a new String formatted in the right way.
   */
  test('greeting should say "Hello Name!"', function () {
    let result = greeting('WEB322 Student');
    expect(result).toBe('Hello WEB322 Student!');
  });

  /**
   * OK, now you're ready to go back to src/solutions.js and continue solving
   * Problem 0.
   */
});
