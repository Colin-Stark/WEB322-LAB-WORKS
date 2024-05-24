const { fruitPrinter } = require('./solutions');

describe('Problem 5: Arrays and Iterating', () => {
  test('fruitPrinter function prints each fruit', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    fruitPrinter();
    expect(consoleSpy).toHaveBeenCalledTimes(5); // Expecting 5 calls for 5 fruits
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'Apple');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'Orange');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'Mango');
    expect(consoleSpy).toHaveBeenNthCalledWith(4, 'Strawberry');
    expect(consoleSpy).toHaveBeenNthCalledWith(5, 'Banana');
    consoleSpy.mockRestore();
  });
});
