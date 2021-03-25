//added character options to generate password
var upperCaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseOption = "abcdefghijklmnopqrstuvwxyz"
var specialCharacterOption = "!@#$%^&*()?"
var numberOption = "0123456789"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Prompt questions to ask user in order to generate password
function generatePassword() {
  var upperCase = window.confirm("Would you like upper case letters?")
  var specialCharacters = window.confirm("Would you like special characters?")
  var lowerCase = window.confirm("Would you like lower case letters?")
  var numbers = window.confirm("Would you like numbers?")
  var lengthPassword = window.prompt("How many characters would you like your password to be?")




  return 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
