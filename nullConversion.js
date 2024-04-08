const convertNullableValues = (obj) => {
  for (let key in obj) {
    if (obj[key] === null) {
      obj[key] = 0;
    } else if (obj[key] === undefined) {
      obj[key] = "";
    }
  }
  return obj;
};

console.log(convertNullableValues({ x: null, y: 5, z: null })); // { x: 0, y: 5, z: 0 }
console.log(convertNullableValues({ x: 1, y: undefined, z: 2 })); // { x: 1, y: "", z: 2 }