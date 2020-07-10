// Assignment Code
var generateBtn = document.querySelector("#generate");

// Length of password
var charAmount = prompt("Enter the amount of charcters needed for your password. (minimum of 8/maximum of 128)");
console.log(charAmount);

// lower/upper/special characters
var lowerCase = confirm("Should your password contain lowercase letters?");
console.log(lowerCase);

var upperCase = confirm("Should your password contain uppercase letters?");
console.log(upperCase);

var specialChar = confirm("Should your password contain special characters?");
console.log(specialChar);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
