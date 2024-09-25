const substr = (str, start = 0, length = str.length) => {
  if (!str || start === '' || length === '') {
    throw new Error('All fields must be filled in!');
  }

  if (isNaN(start) || isNaN(length)) {
    throw new Error('Start index and length must be numbers!');
  }

  const strLength = str.length;

  if (start < 0) {
    start = strLength + start;
    if (start < 0) start = 0;
  }

  if (start >= strLength) {
    return '';
  }

  if (length < 0) {
    length = 0;
  }

  if (length === undefined || start + length > strLength) {
    length = strLength - start;
  }

  let result = '';
  for (let i = start; i < start + length; i++) {
    result += str[i];
  }

  return result;
};

export default substr;
