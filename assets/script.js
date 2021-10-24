// Assignment code here
var alpha1 = "abcdefghijklmnopqrstuvwxyz";
var alpha2 ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var characters = "";

var conditions = function () {
  var conditionOptionPrompt = window.prompt(
    "How would you like your password generated? Press 1 for only lowercase letters, 2 for only UPPERCASE letters, 3 for a combination of UPPERCASE and LOWERCASE, 4 for letters and numbers, 5 for letters and symbols, and 6 for all three."
  );
  conditionOptionPrompt = parseInt(conditionOptionPrompt);
   
  switch (conditionOptionPrompt) {
    case 1:
      characters = alpha1;
      window.alert ("You've made it only lowercase!");
      break;
    case 2:
      characters = alpha2;
      window.alert ("You've made it only UPPERCASE!");
      break;
    case 3: 
      characters = alpha1 + alpha2;
      window.alert ("You've chosen both UPPERCASE and lowercase!");
      break;
    case 4:
      characters = alpha1 + alpha2 + numbers;
      window.alert ("You've added numbers!");
      break;
    case 5:
      characters = alpha1 + alpha2 + symbols;
      window.alert("You've added symbols!");
      break;
    case 6:
      characters = alpha1 + alpha2 + symbols + numbers;
      window.alert("You've added both numbers and symbols!");
      break;
    default:
      window.alert("Please make a valid selection!");
      conditions();
      break;
  }
};

var passwordConditions = function () {
  var passwordConditions1 = window.prompt ("How long is this password? Please specify a number between 8 and 128:");
  passwordConditions1 = parseInt(passwordConditions1);
  if (passwordConditions1 < 8 || passwordConditions1 > 128) {
    window.alert("You have entered an invalid number. Try again!");
    passwordConditions();
  }
  else {
    return passwordConditions1;
  }
};

var generatePassword = function () {
  passwordConditions();
  var length = passwordConditions();
  conditions();
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
