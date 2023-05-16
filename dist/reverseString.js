//This function takes a string argument and returns a new string with its characters in reverse order.
function reverseString(str) {
//Use the String.split() method to split the original string into an array of individual characters.
//Use the Array.reverse() method to reverse the order of the characters in the array.
//Use the Array.join() method to join the reversed characters into a new string.
  return str.split('').reverse().join('');
}
//Export the reverseString function so that it can be used in other modules
module.exports = reverseString;