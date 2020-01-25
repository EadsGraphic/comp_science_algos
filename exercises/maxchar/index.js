// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dictonary = {};

  for (let char of str) {
    dictonary[char] ? dictonary[char]++ : (dictonary[char] = 1);
  }

  const v = Math.max(...Object.values(dictonary));
  const k = Object.keys(dictonary)[Object.values(dictonary).indexOf(v)];

  return k;
}

module.exports = maxChar;
