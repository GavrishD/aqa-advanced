//Task 2: Copying with a mutation

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((num, index) => num * index);

console.log(newNumbers);