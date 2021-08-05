// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt('Criteria \n\nPassword Length (number of characters): ');
  // var passLower = confirm('Criteria \n\nInclude lower case letters?');
  var passUpper = confirm('Criteria \n\nInclude upper case letters?');
  var passNumber = confirm('Criteria \n\nInclude numbers?');
  var passSpecial = confirm('Criteria \n\nInclude special characters?');

  var passLengthInt = parseInt(passLength);
  var charPoss = [];
  var numbPoss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specPoss = ['!', '#', '$', '%', '&', '*', '+', '-', ':', ';', '<', '=', '>', '?', '@', '^', '_', '~'];
  const upper = Array.from(Array(26)).map((e, i) => i + 65);
  const upperPoss = upper.map((x) => String.fromCharCode(x));
  var lowerPoss = upperPoss.toLowerCase;

  if (passUpper == true) {
    charPoss = charPoss.concat(upperPoss);
    charPoss = charPoss.concat(lowerPoss);
  } else {
    charPoss = charPoss.concat(lowerPoss);
  }

  if (passNumber == true) {
    charPoss = charPoss.concat(numbPoss);
  }

  if (passSpecial == true) {
    charPoss = charPoss.concat(specPoss);
  }

  // function generatePassword() {
    var password = Array(passLengthInt).fill(charPoss).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  // }
  // var password = generatePassword();  
  // generatePassword();
  console.log(password);
}



var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
// This is saying when I click the button it will run the writePassword function
generateBtn.addEventListener("click", writePassword);
