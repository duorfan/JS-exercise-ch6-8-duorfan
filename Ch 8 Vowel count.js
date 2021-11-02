const word = prompt("Enter a word:");

console.log(`The word ${word} is ${word.length} characters long`);
console.log(`Its lowercase value is ${word.toLowerCase()}`);
console.log(`Its uppercase value is ${word.toUpperCase()}`);

let vowelCount = 0;

[...word].forEach(letter => {
  const lowerLetter = letter.toLowerCase();
  if (
    lowerLetter === "a" ||
    lowerLetter === "e" ||
    lowerLetter === "i" ||
    lowerLetter === "o" ||
    lowerLetter === "u" ||
    lowerLetter === "y"
  ) {
    vowelCount++;
  }

  console.log(`It has ${vowelCount} vowels`);