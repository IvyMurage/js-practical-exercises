function tranformKeys(inputObject, tranformFunction) {
  let newObj = {};
  for (let key in inputObject) {
    typeof inputObject[key] === "object"
      ? (newObj[tranformFunction(key)] = {
          ...tranformKeys(inputObject[key], tranformFunction),
        })
      : (newObj[tranformFunction(key)] = { ...inputObject }[key]);
  }
  return newObj;
}

function tranformKeysUsingReduce(inputObject, tranformFunction) {
  Object.keys(inputObject).reduce((acc, val) => {}, {});
}

const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: 12345,
  },
};

console.log(tranformKeys(inputObject, (key) => key.toUpperCase()));
