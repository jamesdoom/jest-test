const capitalize = require('./capitalize');

test('capitalize function capitalizes first character of string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('testing')).toBe('Testing');
});







