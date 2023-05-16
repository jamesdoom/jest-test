//Define a function named analyzeArray that takes an array as an input parameter.
function analyzeArray(arr) {
//If the input is not an array, throw an error.
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }  
//If the input array is empty, throw an error.
    if (arr.length === 0) {
      throw new Error("Array must contain at least one element");
    }  
//Initialize variables to keep track of the sum, minimum, and maximum values in the array.
    let sum = 0;
    let min = arr[0];
    let max = arr[0];  
// Loop through the array, updating the sum and checking for new minimum and maximum values.
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
//Calculate the average value.
    const average = sum / arr.length;
//Return an object containing the average, minimum, maximum, and length of the array.
    return { average, min, max, length: arr.length };
  }

  module.exports = analyzeArray;