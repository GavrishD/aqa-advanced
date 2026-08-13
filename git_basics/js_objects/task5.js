//Task 5

const users = [
  {
    name: "Alice",
    email: "aliceJordan@gmail.com",
    age: 22,
    degree: "bachelor's",
  },
  {
    name: "Alex",
    email: "alex@gmail.com",
    age: 27,
    degree: "master's",
  },
];

for (const user of users) {
  console.log(`${user.name} at the age of ${user.age}`);
}

for (const { name, age } of users) {
  console.log(`${name}: ${age}`);
}