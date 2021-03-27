// Assignment Code
var generateBtn = document.querySelector("#generate");
//Assign variables to the different types of characters
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var specialCharactersArr = ['!','@','#','$','%','^','&','*','(',')','?'];

var numbersArr = ['0','1','2','3','4','5','6','7','8','9'];

var userTotal;
var upperCase;
var lowerCase;
var numbers;
var specialCharacters;


//Prompt questions to ask user in order to generate password
function generatePassword() {

//Prompt user for length of characters in password?
  var userTotal = prompt("How many characters would you like your password to be? Choose between 8 to 128 characters.");
  var lengthPassword = Number(userTotal)

  if (!lengthPassword) {
    alert("You must enter a number.");
    return '';
  }
  if (isNaN(lengthPassword)) {
    alert("Value must be a number.");
    return '';
  }
  if (lengthPassword < 8) {
    alert('The password must be at least 8 characters! Try Again');
    return '';
  }
  if (lengthPassword > 128) {
    alert('The password must be less than 128 characters! Try Again');
    return '';
  }
else if (lengthPassword >= 8 && lengthPassword <= 128) {
//prompt user for types of characters such as lower or upper case and numbers and special characters  
  upperCase = confirm("Would you like to include upper case letters?");
  specialCharacters = confirm("Would you like to include special characters?");
  lowerCase = confirm("Would you like to include lower case letters?");
  numbers = confirm("Would you like to include numbers?");
  
  if (!upperCase && !specialCharacters && !lowerCase && !numbers) {
    alert("confirmation is required");
    return '';
    }
  }

  var chosenCharacters = [] 
  if (upperCase) {
    chosenCharacters = chosenCharacters.concat(upperCaseArr);    
  }
  if (lowerCase) {
    chosenCharacters = chosenCharacters.concat(lowerCaseArr);    
  }
  if (numbers) {
    chosenCharacters = chosenCharacters.concat(numbersArr);      
  }
  if (specialCharacters) {
    chosenCharacters = chosenCharacters.concat(specialCharactersArr);   
  }
  
  var createpassword = [];

  for (var i = 0; i < lengthPassword; i++){

    createpassword.push(chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)]);
  }
  return createpassword.join('');

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
