const sortProducts = (products) => {
  return products.sort((a, b) => a.price - b.price);
};

console.log(
  sortProducts([
    { name: "bread", price: 3.5 },
    { name: "orange", price: 1.3 },
    { name: "gum", price: 2.8 },
  ])
);
