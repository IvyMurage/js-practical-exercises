function flattenArray(array) {
  // using array.flat() method to avoid nested arrays
  //   array.flat(Infinity);
  //   const newArray = [];

  // using recursion to flatten nested arrays
  //   const getFlattenedArray = (array) => {
  //     array.forEach((arg) =>
  //       Array.isArray(arg) ? getFlattenedArray(arg) : newArray.push(arg)
  //     );
  //   };
  //   getFlattenedArray(array);

  // using reduce
  return array.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.push(val),
    []
  );
}

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
let array = [1, [3, 4]];
let newerArr = [];

console.log(newerArr.push(...array));
console.log(newerArr);