function getObjectFlatten(obj) {
  const newObj = {};

  function flattenObject(obj) {
    Object.keys(obj).forEach((key) =>
      typeof obj[key] === "object"
        ? flattenObject(obj[key])
        : (newObj[key] = obj[key])
    );
  }
  flattenObject(obj);
  return newObj;
}

function reduceObj(obj) {
  return Object.keys(obj).reduce(
    (acc, key) =>
      typeof obj[key] === "object"
        ? { ...acc, ...reduceObj(obj[key]) }
        : { ...acc, [key]: obj[key] },
    {}
  );
}
let ob = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

console.log(getObjectFlatten(ob));
console.log(reduceObj(ob));
