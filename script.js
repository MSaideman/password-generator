// generate button used to initiate prompt questions and count data collected
var generateBtn = document.getElementById('generate'); 

// add generate function so counted data uses random functions to create password 
generateBtn.addEventListener ('click', writePassword);

// add write password function so password created is written on display
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Prompt Questions that store as numbers and bouleans values
function generatePassword () {
  var passwordLength = prompt("How many characters would you like your password to be?")
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }
  var upperChars = confirm("Do you want uppercase letters in your password?");

  var lowerChars = confirm("Do you want lowercase letters in your password?");

  var numberChars = confirm("Do you want to include numbers?");

  var symbolsChars = confirm("Do you want to include symbols?");

    var count = 0;

// concatonate results of random functions into single variable 
    var chosenSymbols = '';

// Generate Random Functions array

    var functionArr = {
    getRandUpper: function() {
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    },
    
    getRandLow: function() {
      return 'abcdefghijklmnopqrstuvwxyz';
    },
    
    getRandNum: function() {
      return '0123456789';
    },
    
    getRandSymb: function() {
        return '!@#$%^&*(){}[]=<>/,.';
    }
  };

  // count responses to prompts 
    if (upperChars) {
      chosenSymbols += functionArr.getRandUpper();
    }

    if (lowerChars === true) {
      chosenSymbols += functionArr.getRandLow();
    }

    if (numberChars === true) {
      chosenSymbols += functionArr.getRandNum();
    }

    if (symbolsChars === true) {
      chosenSymbols += functionArr.getRandSymb();
    }

    var randomPasswordGenerated = '';

    // add length to be less than the amount of trues and create visible password 
    for (var i = 0; i < parseInt(passwordLength) - count; i++) {
      var symbolIndex = Math.floor(Math.random() * chosenSymbols.length); 
      randomPasswordGenerated += chosenSymbols[symbolIndex];
    }
    return randomPasswordGenerated; 
    }
  


