let pizzaPlace = "Lucali's Pizzeria";
let numberOfToppings = 8;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log("We are ${pizzaPlace}, we offer ${numberOfToppings} toppings.");

if (numberOfToppings < 10) {
  console.log(`"Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
for (let i = 1; i <= numberOfToppings; i+) {
  console.log(i);
}
