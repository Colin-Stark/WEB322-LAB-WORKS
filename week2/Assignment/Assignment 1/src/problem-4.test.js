/*******************************************************************************
 * Problem 3: Inheritance:
 ******************************************************************************/
const { printUser } = require('./solutions');

describe('Problem 4: Array Destructuring', () => {
  test('printUser function prints name and age', () => {
    const user = { name: 'Alice', age: 30 };
    const consoleSpy = jest.spyOn(console, 'log');
    printUser(user);
    expect(consoleSpy).toHaveBeenCalledWith('Name: Alice, Age: 30');
    consoleSpy.mockRestore();
  });
});
