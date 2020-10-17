// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of characters to be included in the password
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"];
// Write password to the #password input

function promptUser(){
  var pwdLength = parseInt(
    prompt("How many characters for the password?")
  );

  if(pwdLength > 7 && pwdLength < 129){
    var containsNums = confirm("Do you want numbers in the password?");
    var containsUpper = confirm("Do you want upper-case letters in the password?");
    var containsLower = confirm("Do you want lower-case letters in the password?");
    var containsSpecialChar = confirm("Do you want special characters in the password?");
 
    var userInput = {
      pwdLength: pwdLength,
      containsNums: containsNums,
      containsUpper: containsUpper,
      containsSpecialChar: containsSpecialChar
    }
    return userInput
  }else {
    alert("Password needs to be between 8 and 128 characters.")
  }
}

function generatePassword(){
  var inputs =promptUser()
  console.log(inputs);

  var result = [];
  var potentialChars = [];

  if(inputs.containsNums){
    potentialChars = potentialChars.concat(numericCharacters);
  }
  if(inputs.containsUpper){
    potentialChars = potentialChars.concat(upperCaseCharacters);
  }
  if(inputs.containsLower){
    potentialChars = potentialChars.concat(lowerCaseCharacters);
  }
  if(inputs.containsSpecialChar){
    potentialChars = potentialChars.concat(specialCharacters);
  }

  var randomizedArray = shuffle(potentialChars);

  for (var i = 0; i < inputs.pwdLength; i++){
    result.push(randomizedArray[i])
  }
  console.log(result.join(''))

return result.join('')
}

function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex){

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
