/*******************************************************************************
 * Problem 3: Inheritance:
 ******************************************************************************/
const { ElectricCar } = require('./solutions');

describe('ElectricCar', () => {
  let electricCar;

  beforeEach(() => {
    electricCar = new ElectricCar('Tesla', 'Model 3', 2023, 'Black', '100kWh');
  });

  test('displayDetails method should display correct details', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    electricCar.displayDetails();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Make: Tesla, Model: Model 3, Year: 2023, Color: Black'
    );
    consoleSpy.mockRestore();
  });

  test('chargeBattery method should display correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    electricCar.chargeBattery();
    expect(consoleSpy).toHaveBeenCalledWith("Charging the Tesla Model 3's battery.");
    consoleSpy.mockRestore();
  });
});
