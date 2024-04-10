function createCounter() {
  let res = 0;
  return function counterFn() {
    return res++;
  };
}

const counter = createCounter();
Array.from({ length: 5 }, () => console.log(counter())); // 0 1 2 3 4
