// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  const sign = !num ? 1 : Math.sign(num);

  const final = Math.abs(num)
    .toString()
    .split("")
    .reverse()
    .join("");

  return final * sign;
}

module.exports = reverseInt;
