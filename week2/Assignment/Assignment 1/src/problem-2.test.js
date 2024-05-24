/*******************************************************************************
 * Problem 2: The "class" keyword:
 ******************************************************************************/
const { CarUsingClass } = require('./solutions');

describe('CarUsingClass', () => {
  let car;

  beforeEach(() => {
    car = new CarUsingClass('Toyota', 'Camry', 2022, 'Blue');
  });

  test('displayDetails method should display correct details', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    car.displayDetails();
    expect(consoleSpy).toHaveBeenCalledWith('Make: Toyota, Model: Camry, Year: 2022, Color: Blue');
    consoleSpy.mockRestore();
  });

  test('getter and setter for fuelEconomy should work correctly', () => {
    car.fuelEconomy = 7.5;
    expect(car.fuelEconomy).toBe('7.5 L/KM');
  });
});
