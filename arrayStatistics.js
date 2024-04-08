const arrayStats = (array) => {
  const sum = array.reduce((num, sum) => num + sum, 0);
  const avg = parseFloat((sum / array.length).toFixed(2));
  const min = Math.min(...array);
  const max = Math.max(...array);
  return { sum: sum, average: avg, min: min, max: max };
};

console.log(arrayStats([1, 2, 3, 4, 5]));
