const calculator = require('./calculator');

test('calculator adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.add(-2, 3)).toBe(1);
});

test('calculator subtracts two numbers', () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
  expect(calculator.subtract(0, 0)).toBe(0);
  expect(calculator.subtract(-2, 3)).toBe(-5);
});

test('calculator multiplies two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(0, 0)).toBe(0);
  expect(calculator.multiply(-2, 3)).toBe(-6);
});

test('calculator divides two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(0, 3)).toBe(0);
  expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
});