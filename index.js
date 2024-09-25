import substr from './substr.js';
import convertDnaToRna from './dna-to-rna-converter.js';
import isPalindrome from './palindrome.js';
import { toggleClass } from './classManager.js';

const inputConvecter = document.getElementById('convecterInput');
const buttonConvecter = document.getElementById('convecterButton');
const resultConvecter = document.getElementById('convecterResult');

buttonConvecter.addEventListener('click', () => {
  const inputValue = inputConvecter.value.trim().toUpperCase();

  try {
    resultConvecter.textContent = convertDnaToRna(inputValue);
    toggleClass(resultConvecter, 'error', false);
  } catch (error) {
    resultConvecter.textContent = error.message;
    toggleClass(resultConvecter, 'error', true);
    toggleClass(inputConvecter, 'error', true);
  }
});

const inputPalindrome = document.getElementById('palindromeInput');
const buttonPalindrome = document.getElementById('palindromeButton');
const resultPalindrome = document.getElementById('palindromeResult');

buttonPalindrome.addEventListener('click', () => {
  const inputValue = inputPalindrome.value;

  try {
    resultPalindrome.textContent = isPalindrome(inputValue);
    toggleClass(resultPalindrome, 'error', false);
  } catch (error) {
    resultPalindrome.textContent = error.message;
    toggleClass(resultPalindrome, 'error', true);
    toggleClass(inputPalindrome, 'error', true);
  }
});

const inputString = document.getElementById('stringInput');
const inputStart = document.getElementById('indexInput');
const inputLength = document.getElementById('lengthInput');
const buttonString = document.getElementById('substrButton');
const resultString = document.getElementById('substrResult');

buttonString.addEventListener('click', () => {
  const strValue = inputString.value.trim();
  const startValue = inputStart.value.trim();
  const lengthValue = inputLength.value.trim();

  const startNum = parseInt(startValue);
  const lengthNum = parseInt(lengthValue);

  try {
    resultString.textContent = substr(strValue, startNum, lengthNum);
    toggleClass(resultString, 'error', false);
    toggleClass(inputString, 'error', false);
    toggleClass(inputStart, 'error', false);
    toggleClass(inputLength, 'error', false);
  } catch (error) {
    resultString.textContent = error.message;

    if (error.message.includes('All fields must be filled in!')) {
      toggleClass(inputString, 'error', true);
      toggleClass(inputStart, 'error', true);
      toggleClass(inputLength, 'error', true);

      toggleClass(resultString, 'error', true);
    } else {
      toggleClass(resultString, 'error', false);

      toggleClass(inputString, 'error', false);
      toggleClass(inputStart, 'error', false);
      toggleClass(inputLength, 'error', false);
    }

    if (error.message.includes('Start index and length must be numbers!')) {
      toggleClass(inputStart, 'error', true);
      toggleClass(inputLength, 'error', true);

      toggleClass(resultString, 'error', true);
    }
  }
});
