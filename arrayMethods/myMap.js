// const myMap = (callBack) => {
//   console.log(this);

//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callBack(this[i], i, this));
//   }
//   return result;
// };

function myMap(callBack) {
  console.log(this);
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callBack(this[i], i, this));
  }
  return result;
}
// console.log(myMap([1, 2, 3, 4, 5], (num) => num * 2)); // [2, 4, 6, 8, 10]
Array.prototype.myMap = myMap;
console.log("***** using map method******");
console.log([1, 2, 3, 4, 5].myMap((num) => num * 2)); // [2, 4, 6, 8, 10]
