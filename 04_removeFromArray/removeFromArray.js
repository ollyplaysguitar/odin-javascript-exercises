const removeFromArray = function (arr, ...toRemove) {
  const newArr = arr.filter(function (el) {
    return toRemove.indexOf(el) === -1 ? el : "";
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
