// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword(){

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var Length = prompt("How long would you like your password. Must be between 8 and 128 characters?")

if (Length < parseInt("8")){
  alert("Error");
  writePassword();
}
else if (Length > parseInt("128")){
  alert("Error");
  writePassword();
}