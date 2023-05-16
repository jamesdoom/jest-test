const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  it('shifts lowercase letters', () => {
    expect(caesarCipher('hello', 3)).toEqual('khoor');
  });

  it('shifts uppercase letters', () => {
    expect(caesarCipher('WORLD', 3)).toEqual('ZRUOG');
  });

  it('wraps from z to a', () => {
    expect(caesarCipher('zoo', 1)).toEqual('app');
  });

  it('keeps the same case', () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
  });

  it('preserves punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
  });
});