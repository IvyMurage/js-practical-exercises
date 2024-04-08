const oddSquares = (array) => {
  return [...array].filter((num) => num % 2 !== 0).map((num) => Math.pow(num, 2));
};
console.log(oddSquares([1, 2, 3, 4, 5])); // [1, 9, 25]
