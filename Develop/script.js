// Assignment code here


//Combined code to prompt questions 
document.querySelector("#generate").addEventListener("click", writePassword);

// Add arrays 
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Add variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

//Start alert
window.onload = alert("Please click 'Generate password' to start!");

// Prompt to confirm quantity of characters
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to have?"));

  // Loop if answer is outside the parameters 
  while(confirmLength >=8 || confirmLength <=128) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to have?"));
      } 

      // Confirm how many charactersuser put 
      alert(`Your password will have ${confirmLength} characters`);


    // Parameters of password 
    var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");


      // Loop if answer did not meet criteria
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {


        alert("You must choose at least one parameter");


        var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK  if you would like to include uppercase characters");   
    } 

     
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialCharacter)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(num)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

    console.log(passwordCharacters)

      
    var randomPassword = ""
      
    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

