var resultElement = document.getElementById('password');
var lengthElement = document.getElementById('length');
var uppercaseElement = document.getElementById('uppercase');
var lowercaseElement = document.getElementById('lowercase');
var numbersElement = document.getElementById('numbers');
var symbolsElement = document.getElementById('symbols');
var generateElement = document.getElementById('generate');
var clipboardElement = document.getElementById('clipboard');

var randomChars = {
  lower: getRandomLowerLetter,
  upper: getRandomUpperLetter,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate Password listener
generate.addEventListener('click', () => {
  var length = +lengthElement.value;
  var isUpper = uppercaseElement.checked;
  var isLower = lowercaseElement.checked;
  var isNumber = numbersElement.checked;
  var isSymbol = symbolsElement.checked;

  resultElement.innerText = generatePassword(
    isUpper,
    isLower,
    isNumber,
    isSymbol,
    length
  );
});


//Generate Password function

function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = '';
  var typesCount = upper + lower + number + symbol;
  var typesArr = [{
    upper
  }, {
    lower
  }, {
    number
  }, {
    symbol
  }].filter(
    item => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomChars[funcName]();
    });
  }

  var finalPassword = generatedPassword

  return finalPassword;

}

// Generator functions

function getRandomLowerLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,."'
  return symbols[Math.floor(Math.random() * symbols.length)];
}