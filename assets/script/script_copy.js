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




//from manoli




//array of special chars
var specialCharacters = []
//array of numbs

//array of lowercase (look up .split())

//array of uppercase (look up .split())

//create a function that prompts a user for pass options
fucntion getUserOptions() {

  //create a var to store length of pass from user input (look up parseInt())
  // var passLength = 

  //create a conditional statement to check if the length is an actual number rather than just 'eight'
  //create a condition to check if pass length is at least 8 char long
  //create a conditional to check if pass lengtyh is lower than 128 char long

  //create 4 different conditional statements to store if user password is going to use special chars, numbs, lower, and/or upper
  //create conditional statement to check if user included some type of character (alers that loops it back)

  //create a var to store all the user input (store in object)
  //var passOptions = {
  //   passLength: passLength,
  //   specchars,
  //   numbs,
  //   upper,
  //   lower
  //}
//return our passOptions
}

//write function for getting a random element from an array
//check out math.random

//function to generate password with out user input
function generatePassword {
  //create a var and call our first function to use data from it
  var userOptions = getUserOptions();

  //create a var to store password
  //var results = [empty]
  //create an array to store types of chars used
  //var userPosChars = [empty]
  //array to contain at least one of each chosen type of char to make sure at least one of every char is being used (validation)
  //var guarChar = [empty]
  
  //create conditionals that add the array of charactersinto an array of possible chars based on our users input
  //need to push our new random characters to the guarenteed characters (look up .concat())
  //if  (userOptions.specchars) {
    //take chars and concat
    //take chars and push(randomizationfunction(specchars)) (AFTER WE RANDOMIZE)
  // }

  //create conditionals that add the array of charactersinto an array of possible chars based on our users input
  //need to push our new random characters to the guarenteed characters (look up .concat())

  //create conditionals that add the array of charactersinto an array of possible chars based on our users input
  //need to push our new random characters to the guarenteed characters (look up .concat())

  //create conditionals that add the array of charactersinto an array of possible chars based on our users input
  //need to push our new random characters to the guarenteed characters (look up .concat())

  //create a for loop to pluck out random options object and grabbingrandom chars from the array of possioble chars and concat them into the results var

  //create another for loop to guarentee at least one char from each possible char in the results

  //take the result (look up join()) turn it in to string

}