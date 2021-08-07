var specChars = ['!', '#', '$', '%', '&', '*', '+', '-', ':', ';', '<', '=', '>', '?', '@', '^', '_', '~'];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLettersString = ('abcdefghijklmnopqrstuvwxyz');
var lowerLetters = lowerLettersString.split('');
var upperLettersString = lowerLettersString.toUpperCase();
var upperLetters = upperLettersString.split('');
var generateBtn = document.querySelector("#generate");
var textEl = document.querySelector('#password');
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
  var specialCharConfirm = confirm('Criteria \n\nInclude special characters?');
  var numsConfirm = confirm('Criteria \n\nInclude numbers?');
  var upperLettersConfirm = confirm('Criteria \n\nInclude upper case letters?');
  var lowerLettersConfirm = confirm('Criteria \n\nInclude lower case letters?');

  //makes sure user picks at least one of the criteria
  if (specialCharConfirm == false && numsConfirm == false && upperLettersConfirm == false && lowerLettersConfirm == false) {
    alert('Must confirm at least 1 criteria.');
    return getUserOptions();
  }

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

//randomize function
function randomizeArray(array) {
  for (var i = array.length -1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array [i] = array[j];
    array[j] = temp;
  }
  return array;
}

function generatePassword() {
  var userOptions = getUserOptions();
  var generatedPass = [];
  var userPosChars = [];
  var guarChar = [];
  var guarAmt = 0

  //these if statements add the confirmed criteria to the list of possible characters and the list of guarenteed characters
  if (userOptions.specCharsOption == true) {
    userPosChars = userPosChars.concat(specChars);
    guarChar.push(randomizeArray(specChars));
    //this makes the amount of guarenteed characters needed go up every time a criteria is confirmed
    guarAmt++
  }
  if (userOptions.numsOption == true) {
    userPosChars = userPosChars.concat(nums);
    guarChar.push(randomizeArray(nums));
    guarAmt++
  }
  if (userOptions.upperLettersOption == true) {
    userPosChars = userPosChars.concat(upperLetters);
    guarChar.push(randomizeArray(upperLetters));
    guarAmt++
  }
  if (userOptions.lowerLettersOption == true) {
    userPosChars = userPosChars.concat(lowerLetters);
    guarChar.push(randomizeArray(lowerLetters));
    guarAmt++
  }
  
  // console.log(userPosChars);
  // console.log(guarChar);
  
  //this makes a randomly generated password from the possible characters which length is the user chosen length minus the amount of guaranteed characters needed
  for(i = 0; i < (userOptions.passLengthOption - guarAmt); i++) {
    generatedPass.push(userPosChars[Math.floor(Math.random() * (userPosChars.length - 1))])
  }
  
  // console.log(generatedPass);

  //a random item from each guaranteed array is then picked, added on to the end of the generated password, and the generated password is then randomized from lines 103-110
  var eachGuarChar = guarChar.map(function (array) {
    return array[Math.floor((Math.random() * guarChar.length))]
  })

  // console.log(eachGuarChar);

  var passwordFull = generatedPass.concat(eachGuarChar);
  var passwordRand = randomizeArray(passwordFull);
  //turns password array into a joined string
  var password = passwordRand.join('');

  console.log(password)
  
  //changes the text box to show the newly generated password
  textEl.textContent = password
}

generateBtn.addEventListener("click", generatePassword);


