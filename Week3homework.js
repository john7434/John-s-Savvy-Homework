const pizzaToppings = ["Pepperlonely", "BBQ", "Apple", "kickin chicken"];

console.log("Welcome to my pie domain, heres what you can get:");
for (let toppingsList of pizzaToppings) {
  console.log(toppingsList);
}
const pizzaOrder = {
  size: ["8 Inch", "12 Inch", "16 Inch"],
  crust: ["Normal", "Pan"],
  toppings: []
};
console.log(
  pizzaOrder.size[1],
  pizzaOrder.crust[0],
  "pizza size",
  pizzaToppings[0],
  pizzaToppings[2],
  "cooking it up"
);
const preparePizza = {
  size: pizzaOrder.size[1],
  crust: pizzaOrder.crust[0],
  toppings: [pizzaToppings[0], pizzaToppings[2]]
};
console.log("In the oven");
const pizza = [preparePizza.size, preparePizza.crust, preparePizza.toppings];
console.log("Pipin ready");
console.log("Hope you like your", pizza, "Pizza.");
