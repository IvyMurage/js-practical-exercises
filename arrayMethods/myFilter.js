Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) ? result.push(this[i]) : null;
  }
  return result;
};

console.log("***** using filter method******");
console.log([2, 4].myFilter((num) => num % 2 !== 0)); // [1, 3, 5]
