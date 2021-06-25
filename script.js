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
  var lengthEl = prompt("How many characters would you like your password to be?")
  while (lengthEl < 8 || lengthEl > 128) {
    lengthEl = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }
  var uppercaseEl = confirm("Do you want uppercase letters in your password?")
    if (uppercaseEl === true) {
      var uppercaseEl = true;
    }
    else {
      var uppercaseEl = false;
    }

  var lowercaseEl = confirm("Do you want lowercase letters in your password?")
    if (lowercaseEl === true) {
      var lowercaseEl = true;
    }
    else {
      var lowercaseEl = false;
    }

  var numbersEl = confirm("Do you want to include numbers?")
    if (numbersEl === true) {
      var numbersEl = true;
    }
    else {
      var numbersEl = false;
    }

  var symbolsEl = confirm("Do you want to include symbols?")
    if (symbolsEl === true) {
      symbolsEl = true;
    }
    else {
      symbolsEl = false;
  }
    var count = 0;
    var uppercase = '';
    var lowercase= '';
    var numbers = '';
    var symbols = '';

// Generate Random Functions array

    var functionArr = {
    getRandUpper: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    
    getRandLow: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    
    getRandNum: function() {
      return String.fromCharCode(Math.floor(Math.random() * 9) + 48);
    },
    
    getRandSymb: function() {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
  };

  // count responses to prompts 
    if (uppercaseEl === true) {
      uppercase = functionArr.getRandUpper();
      count++;
    }

    if (lowercaseEl === true) {
      lowercase = functionArr.getRandLow();
      count++;
    }

    if (numbersEl === true) {
      numbers = functionArr.getRandNum();
      count++;
    }

    if (symbolsEl === true) {
      symbols = functionArr.getRandSymb();
      count++;
    }
    
    var randomPasswordGenerated = '';

    // add length to be less than the amount of trues and create visible password 
    for (var i = 0; i < (parseInt(lengthEl) - count); i++) {
      var randomNumber= Math.floor(Math.random() * 4);
      randomPasswordGenerated += randomNumber;
    }
      randomPasswordGenerated += uppercase;
      randomPasswordGenerated += lowercase;
      randomPasswordGenerated += numbers;
      randomPasswordGenerated += symbols;
    return randomPasswordGenerated;
  }å