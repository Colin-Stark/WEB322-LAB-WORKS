const { calculateSquareRoot } = require('./solutions');

describe('Problem 6: Error Handling', () => {
  test('calculateSquareRoot function calculates square root for non-negative number', () => {
    expect(calculateSquareRoot(9)).toBe(3);
  });

  test('calculateSquareRoot function throws error for negative number', () => {
    expect(() => calculateSquareRoot(-4)).toThrow('Input must be a non-negative number');
  });
});
