function convertDnaToRna(dnaSequence) {
  if (!/^[ACGT]*$/.test(dnaSequence)) {
    throw new Error('Invalid DNA sequence. Only A, C, G, and T are allowed.');
  }

  if (dnaSequence === '') {
    throw new Error('Field is required!');
  }

  const result = dnaSequence
    .replace(/G/g, 'X')
    .replace(/C/g, 'G')
    .replace(/X/g, 'C')
    .replace(/T/g, 'D')
    .replace(/A/g, 'U')
    .replace(/D/g, 'A');

  return result;
}

export default convertDnaToRna;
