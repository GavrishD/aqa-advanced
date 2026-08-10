//Task 3: Calculating the sum of the elements in an array

const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((num, item) => {
  return num + item;
}, 0);

console.log(sum);
