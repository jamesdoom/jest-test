const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  it('should return the correct values for a simple input', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = analyzeArray(arr);
    expect(result.average).toBe(3);
    expect(result.min).toBe(1);
    expect(result.max).toBe(5);
    expect(result.length).toBe(5);
  });

  it('should throw an error if input is not an array', () => {
    expect(() => {
      analyzeArray(123);
    }).toThrow('Input must be an array');
  });

  it('should throw an error if input array is empty', () => {
    expect(() => {
      analyzeArray([]);
    }).toThrow('Array must contain at least one element');
  });
});