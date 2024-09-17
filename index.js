import substr from './substr.js';
import convertDnaToRna from './dna-to-rna-converter.js';
import isPalindrome from './palindrome.js';

const inputConvecter = document.getElementById('convecterInput');
const buttonConvecter = document.getElementById('convecterButton');
const resultConvecter = document.getElementById('convecterResult');

buttonConvecter.addEventListener('click', () => {
  const inputValue = inputConvecter.value.trim().toUpperCase();
  resultConvecter.classList.remove('error');
  inputConvecter.classList.remove('error');

  if (!/^[ACGT]*$/.test(inputValue)) {
    resultConvecter.textContent =
      'Invalid DNA sequence. Only A, C, G, and T are allowed.';
    resultConvecter.classList.add('error');
    inputConvecter.classList.add('error');
  } else if (inputValue === '') {
    resultConvecter.textContent = 'Field is required!';
    resultConvecter.classList.add('error');
    inputConvecter.classList.add('error');
  } else {
    const convecter = convertDnaToRna(inputValue);

    resultConvecter.textContent = `RNA: ${convecter}`;
    inputConvecter.classList.remove('error');
  }
});

const inputPalindrome = document.getElementById('palindromeInput');
const buttonPalindrome = document.getElementById('palindromeButton');
const resultPalindrome = document.getElementById('palindromeResult');

buttonPalindrome.addEventListener('click', () => {
  const inputValue = inputPalindrome.value;
  const isPalin = isPalindrome(inputValue);

  resultPalindrome.classList.remove('error');
  inputPalindrome.classList.remove('error');

  if (inputValue === '') {
    resultPalindrome.textContent = 'Field is required!';
    resultPalindrome.classList.add('error');
    inputPalindrome.classList.add('error');
  } else {
    resultPalindrome.textContent = isPalin
      ? 'It is a palindrome!'
      : 'It is not a palindrome!';
    inputPalindrome.classList.remove('error');
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

  resultString.classList.remove('error');
  inputString.classList.remove('error');
  inputStart.classList.remove('error');
  inputLength.classList.remove('error');

  if (!strValue || !startValue || !lengthValue) {
    resultString.textContent = 'All fields must be filled in!';
    resultString.classList.add('error');
    inputString.classList.add('error');
    inputStart.classList.add('error');
    inputLength.classList.add('error');
    return;
  }

  const startNum = parseInt(startValue);
  const lengthNum = parseInt(lengthValue);

  if (isNaN(startNum) || isNaN(lengthNum)) {
    resultString.textContent = 'Error: Start index and length must be numbers!';
    resultString.classList.add('error');
    inputStart.classList.add('error');
    inputLength.classList.add('error');
    return;
  }

  const result = substr(strValue, startNum, lengthNum);
  resultString.textContent = result;
});

inputConvecter.addEventListener('input', () => {
  inputConvecter.classList.remove('error');
});

inputPalindrome.addEventListener('input', () => {
  inputPalindrome.classList.remove('error');
});

inputString.addEventListener('input', () => {
  inputString.classList.remove('error');
});
inputStart.addEventListener('input', () => {
  inputStart.classList.remove('error');
});
inputLength.addEventListener('input', () => {
  inputLength.classList.remove('error');
});
