const reverseString = require('./reverseString');

test('reverseString function reverses string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('testing')).toBe('gnitset');
});