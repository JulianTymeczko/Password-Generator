// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  function generatePassword() {
    var passwordEmpty = [];
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numericValues = "1234567890";
    var specialChar = "#$%&'()*+,-./:;<!=>?@[^] _`{|}~";

    var passwordLength = (prompt("How long should the password be?"));
    var realPasswordLength = parseInt(passwordLength)
    
    
  
    if (realPasswordLength < 8 || realPasswordLength > 128 || passwordLength == null || isNaN(passwordLength) == true) {
      alert("Password length must be between 8 and 128 characters.");
      return "";
    }
   

    var y = confirm("Include uppercase characters?");
   
   
    var x = confirm("Include lowercase characters?");
    var w = confirm("Include numeric values?");
    var z = confirm("Include special characters?");
    if (y) {
      passwordEmpty = passwordEmpty.concat(upperCase);
    }
    if (x) {
      passwordEmpty = passwordEmpty.concat(lowercase);
    }
    if (w) {
      passwordEmpty = passwordEmpty.concat(numericValues);
    }
    if (z) {
      passwordEmpty = passwordEmpty.concat(specialChar);
    }
    
    if (!y && !x && !w && !z) {
        alert("You must select at least one character type.");
        return "";
      }
    
     
    var passwordFull = "";
    for (var i = 0; i <= realPasswordLength; i++) {
      var randomIndex = passwordEmpty[Math.floor(Math.random() * passwordEmpty.length)]
      passwordFull += randomIndex[Math.floor(Math.random() * [randomIndex.length])];
    }
    console.log(passwordFull)
    return passwordFull;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






