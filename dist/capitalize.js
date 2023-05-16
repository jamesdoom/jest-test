//Takes a string argument and returns a new string with the first character capitalized.
function capitalize(str) {
//Use the String.charAt() method to get the first character of the string and the 
//String.toUpperCase() method to capitalize it. Concatenate the capitalized first character
//with the rest of the string, which is obtained using the String.slice() method.
  return str.charAt(0).toUpperCase() + str.slice(1);
}
//Export the capitalize function so that it can be used in other modules.
module.exports = capitalize;