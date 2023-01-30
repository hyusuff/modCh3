// Assignment Code
var generateBtn = document.querySelector("#generate");

// var characters = "abcdefghijklmnopqrstuvwxyz";
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!","@","#","$","%","^","&","*","(",")","_","+","~","/","?","`","-",":",";","<",">"];
var charArray = "";

//Generate Password

function generatePassword() {
  var choice = prompt("How many characters would like your password to contain?");
  console.log(choice);

  if (choice < 8 || choice >= 128) {
   alert("Choose a length of at least 8 characters and no more than 128 characters");
    return;
  } else {
    var specialCharacter = confirm(
      "click OK to confirm including special characters"
    );
    console.log(specialCharacter);

    if (specialCharacter) {
      charArray += special.join("");
    }
    var numericCharacter = confirm(
      "Click OK to confirm including numerical characters"
    );
    console.log(numericCharacter);

    if (numericCharacter) {
      charArray += number.join("");
    }
    var lowerCaseCharacter = confirm(
      "Click OK to confirm including lowercase characters"
    );
    console.log(lowerCaseCharacter);

    if (lowerCaseCharacter) {
      charArray += lowerCase.join("");
    }
    var upperCaseCharacter = confirm(
      "Click OK to confirm including uppercase character"
    );
    console.log(upperCaseCharacter);

    if (upperCaseCharacter) {
      charArray += upperCase.join("");
    }
    if (charArray === "") {
      alert("Must pick at least one character type to generate password.");
      generatePassword();
    }
    
  }

  var finalPassword = "";
  for (var i = 0; i < choice; i++) {
    finalPassword += charArray[Math.floor(Math.random() * charArray.length)];
  }
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", writePassword, true);
