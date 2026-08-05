//Task 1

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleNum(num, evenCallback, oddCallback) {
  if (num % 2 === 0) {
    evenCallback();
  } else {
    oddCallback();
  }
}

handleNum(9, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);