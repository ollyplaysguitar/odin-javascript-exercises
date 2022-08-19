const repeatString = function (phrase, repeats) {
  if (repeats < 0) return "ERROR";
  let repeatedString = "";
  for (let i = 1; i <= repeats; i++) {
    repeatedString += phrase;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
