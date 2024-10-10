const words = ['Tango', 'Zulu', 'Bravo', 'Lima'];
words.sort((a, b) => {
  if (b > a) return 1;
  if (b < a) return -1;
  return 0;
});
console.log(words); // Output: ['Zulu', 'Tango', 'Lima', 'Bravo']
