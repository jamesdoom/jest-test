//Create an object called calculator with four properties: add, 
//subtract, multiply, and divide.
const calculator = {
//Each property is defined as a function that takes two arguments, a and b,
//and returns a value based on the operation performed by that function.
//The add function takes two numbers as arguments and returns their sum.
    add: function(a, b) {
      return a + b;
    },
//The subtract function takes two numbers as arguments and returns their difference.
    subtract: function(a, b) {
      return a - b;
    },
//The multiply function takes two numbers as arguments and returns their product.  
    multiply: function(a, b) {
      return a * b;
    },
  
    divide: function(a, b) {
//if the second argument (denominator) is zero, the function throws an error with the
//message "Cannot divide by zero".
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
//The divide function takes two numbers as arguments and returns their quotient.
      return a / b;
    }
  };
//Exports the calculator object so that it can be used in other files or modules.
  module.exports = calculator;