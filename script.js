// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of Numbers and characters that an employee can choose from while answering the prompts.
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = [ "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":"];

// First prompt that will appear after the employee clicks on Generate Password;
// Per the IF statement below, the number that the employee inputs must be greater than 7 and less than 129.

function promptUser(){
  var pwdLength = parseInt(
    prompt("How many characters for the password?")
  );

// Questions that will appear as prompts for an employee.
  
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

// Function that moves the numbers/characters selected by the employee to a new array, which will eventually be used to generate a randomized password.

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
  
  // Action that will move the password and place it in the center box on the interface.

return result.join('')
}

// Function that will shuffle the numbers/characters and provide a randomized password.

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

// Function used to write the password.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
