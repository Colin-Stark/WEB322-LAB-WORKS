/*******************************************************************************
 * Problem 2: The "class" keyword:
 ******************************************************************************/
const { CarUsingLiteralNotation } = require('./solutions');

describe('CarUsingLiteralNotation', () => {
  test('displayDetails method should display correct details', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    CarUsingLiteralNotation.displayDetails();
    expect(consoleSpy).toHaveBeenCalledWith('Make: Toyota, Model: Camry, Year: 2022, Color: Blue');
    consoleSpy.mockRestore();
  });
});
