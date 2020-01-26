// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanA = normalize(stringA);
  const cleanB = normalize(stringB);

  return cleanA === cleanB.slice(0, cleanA.length);
}

const normalize = str =>
  str
    .toLowerCase()
    .split("")
    .sort()
    .join("");
module.exports = anagrams;
