//This function takes a string and a shift value, and returns a new string that has been encoded using a Caesar cipher with the given shift value
function caesarCipher(str, shift) {
//Define the alphabet that the function will use for encoding
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//Initialize a variable to store the encoded string
  let encodedStr = '';
  
//Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
//Get the current character and its index in the alphabet (or -1 if it's not in the alphabet)
    let char = str[i];
    let idx = alphabet.indexOf(char.toLowerCase());
  
//If the character is in the alphabet, encode it using the shift value
    if (idx !== -1) {
//Calculate the new index of the character by adding the shift value and wrapping around to the beginning of the alphabet if necessary
      let newIdx = (idx + shift) % 26;
//Get the new character at the new index
      let newChar = alphabet[newIdx];
  
//Preserve the case of the original character in the encoded string
      if (char === char.toUpperCase()) {
        newChar = newChar.toUpperCase();
      }
  
//Append the encoded character to the encoded string
      encodedStr += newChar;
    } else {
//If the character is not in the alphabet, append it to the encoded string without encoding it
      encodedStr += char;
    }
  }
  
//Return the encoded string
  return encodedStr;
}

//Export the caesarCipher function so that it can be used in other modules
module.exports = caesarCipher;

//Example usage:
const message = "Hello, World!";
const shift = 3;
const encodedMessage = caesarCipher(message, shift);

console.log(encodedMessage); // "Khoor, Zruog!"