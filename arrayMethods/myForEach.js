Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

console.log("***** using forEach method******");
[1, 2, 3, 4, 5].myForEach((num) => console.log(num * 2)); // 2 4 6 8 10
console.log(
  [1, 2, 3, 4, 5].myForEach((num, index, array) => console.log(array[index]))
); //
