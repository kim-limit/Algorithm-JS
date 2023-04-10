function fibonacci(n) {
  let newArr = [0, 1];

  let fib = (n) => {
    if (newArr[n] !== undefined) {
      return newArr[n];
    }
    newArr[n] = fib(n - 1) + fib(n - 2);
    return newArr[n];
  };

  return fib(n);
}
