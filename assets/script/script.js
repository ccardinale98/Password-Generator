var specChars = ['!', '#', '$', '%', '&', '*', '+', '-', ':', ';', '<', '=', '>', '?', '@', '^', '_', '~'];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLettersString = ('abcdefghijklmnopqrstuvwxyz');
var lowerLetters = lowerLettersString.split('');
var upperLettersString = lowerLettersString.toUpperCase();
var upperLetters = upperLettersString.split('');
//array variables: specChars, nums, lowerLetters, upperLetters

function getUserOptions() {
  var passLengthString = prompt('Criteria \n\nPassword Length (number of characters): ');
  var passLength = parseInt(passLengthString);

  //makes sure the password length input is a number, not letters
  if (isNaN(passLength) == true) {
    alert('Must input a number.');
    return getUserOptions();
  }

  //makes sure the password length input is between 8 and 128 characters
  if (passLength < 8 || passLength > 128) {
    alert('Must be between 8 and 128 characters.');
    return getUserOptions();
  }

  //variables storing info from the criteria confirm windows
  var specialCharConfirm = confirm('Criteria \n\nInclude upper case letters?');
  var numsConfirm = confirm('Criteria \n\nInclude numbers?');
  var upperLettersConfirm = confirm('Criteria \n\nInclude upper case letters?');
  var lowerLettersConfirm = confirm('Criteria \n\nInclude lower case letters?');

  //single variable that stores all the user input from criteria confirm windows
  var passOptions = {
    passLengthOption: passLength,
    specCharsOption: specialCharConfirm,
    numsOption: numsConfirm,
    upperLettersOption: upperLettersConfirm,
    lowerLettersOption: lowerLettersConfirm,
  }

  return passOptions;
}



function generatePassword() {
  var userOptions = getUserOptions();
  var generatedPass = [];
  var userPosChars = [];
  var guarChar = [];

  if (userOptions.specCharsOption == true) {
    userPosChars = userPosChars.concat(specChars);
  }
  if (userOptions.numsOption == true) {
    userPosChars = userPosChars.concat(nums);
  }
  if (userOptions.upperLettersOption == true) {
    userPosChars = userPosChars.concat(upperLetters);
  }
  if (userOptions.lowerLettersOption == true) {
    userPosChars = userPosChars.concat(lowerLetters);
  }
  console.log(userPosChars)
  for(i = 0; i < userOptions.passLengthOption; i++) {
    generatedPass.push(userPosChars[Math.floor(Math.random() * (userPosChars.length - 1))])

    console.log(generatedPass)
  }

  var password = generatedPass.join('')

  console.log(password)
}

generatePassword()


