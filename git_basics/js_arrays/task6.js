//Task 6: Sorting Arrays

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedNumbers = [...numbersList];

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(numbersList);
console.log(bubbleSort(sortedNumbers));