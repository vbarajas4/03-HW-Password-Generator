// Assignment Code
var generateBtn = document.querySelector("#generate");

//added variable options to generate password
var upperCaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var upperCaseArr = upperCaseOption.split("")
var lowerCaseOption = "abcdefghijklmnopqrstuvwxyz" 
var lowerCaseArr = lowerCaseOption.split("")
var specialCharactersOption = "!@#$%^&*()?" 
var specialCharactersArr = specialCharacterOption.split("")
var numbersOption = "0123456789" 
var numbersOptionArr = numberOption.split("")

//prompting user instructions to begin 
window.onload = alert("Welcome! Select 'Generate Password' to start!")

//Prompt questions to ask user in order to generate password
function generatePassword() {

//Prompt user for length of characters in password?
  var lengthPassword = prompt("How many characters would you like your password to be? Choose between 8 to 128 characters.")
  console.log (typeof lengthPassword)
  if (parseInt(lengthPassword) < 8) {
    alert('The password must be at least 8 characters! Try Again');
    return;
  }
  if (parseInt(lengthPassword) > 128) {
    alert('The password must be less than 128 characters! Try Again');
    return;
  }
  if (!lengthPassword) {
    alert("You must enter a number.");
    return;
  }
  if (isNaN(lengthPassword)) {
    alert("Value must be a number.");
    return;
  }
  else {
//prompt user for types of characters such as lower or upper case and numbers and special characters  
  var upperCase = confirm("Would you like to include upper case letters?");
  var specialCharacters = confirm("Would you like to include special characters?");
  var lowerCase = confirm("Would you like to include lower case letters?");
  var numbers = confirm("Would you like to include numbers?");

  var chosenCharacters = [] 
  if (upperCase) {
    chosenCharacters = chosenCharacters.concat(upperCaseOption);
  }
  if (lowerCase) {
    chosenCharacters = chosenCharacters.concat(lowerCaseOption);
  }
  if (numbers) {
    chosenCharacters = chosenCharacters.concat(numbersOption);
  }
  if (specialCharacters) {
    chosenCharacters = chosenCharacters.concat(specialCharactersOption);
  }
  var passwordCreated = [];
  for (var i = 0; i < length; i++) {
    passwordCreated.push(chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]);
  }
  return passwordCreated;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
