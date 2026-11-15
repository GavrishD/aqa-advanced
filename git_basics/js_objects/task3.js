//Task 3

const car1 = {
  brand: "Mitsubishi",
  model: "Lancer X",
  year: 2008,
};

const car2 = {
  brand: "Jeep",
  model: "Cherokee",
  owner: "Jeem",
};

const car3 = { ...car1, ...car2 };

console.log(car3);
