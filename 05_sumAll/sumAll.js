const sumAll = function (start, stop) {
  if (!validateInputs(start, stop)) return "ERROR";
  let sum = 0;
  if (start <= stop) {
    for (let i = start; i <= stop; i++) {
      sum += i;
    }
  } else {
    for (let i = start; i >= stop; i--) {
      sum += i;
    }
  }
  return sum;
};

const validateInputs = function (start, stop) {
  if (start < 0 || stop < 0) return false;
  if (typeof start !== "number" || typeof stop !== "number") return false;
  return true;
};

// Do not edit below this line
module.exports = sumAll;
