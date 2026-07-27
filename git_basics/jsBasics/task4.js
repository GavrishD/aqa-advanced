//Task 4: Calculating Area and Volume

// Task 4.1: Circle Area
const circleRadius = 16;

const circleArea = Math.PI * circleRadius ** 2;

console.log("Circle radius:", circleRadius);
console.log("Circle area:", circleArea.toFixed(2));

// Task 4.2: Rectangle Area
const rectangleLength = 17;
const rectangleWidth = 8;

const rectangleArea = rectangleLength * rectangleWidth;

console.log("Rectangle length:", rectangleLength);
console.log("Rectangle width:", rectangleWidth);
console.log("Rectangle area:", rectangleArea.toFixed(2));

// Task 4.3: Cylinder Volume
const cylinderRadius = 7;
const cylinderHeight = 17;

const cylinderVolume = Math.PI * cylinderRadius ** 2 * cylinderHeight;

console.log("Cylinder radius:", cylinderRadius);
console.log("Cylinder height:", cylinderHeight);
console.log("Cylinder volume:", cylinderVolume.toFixed(2));
