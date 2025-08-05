hometask 2
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %)");

let result;

if (operator === '/' && num2 === 0) {
  console.log("Error: Division by zero");
} else {
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operator");
  }

  if (result !== undefined) {
    console.log(`Result: ${result}`);
  }
}

project2
let products = [
  { id: 1, name: "T-shirt", price: 499, quantity: 2 },
  { id: 2, name: "Jeans", price: 999, quantity: 0 },
  { id: 3, name: "Shoes", price: 1499, quantity: 1 },
  { id: 4, name: "Cap", price: 199, quantity: 3 },
];

// 1️⃣ Filter products with quantity > 0
const availableProducts = products.filter(product => product.quantity > 0);
console.log("\n🟢 Available Products:");
console.log(availableProducts);

// 2️⃣ Calculate total cart value using reduce()
const totalValue = availableProducts.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(`\n💰 Total Cart Value: ₹${totalValue}`);

// 3️⃣ Use slice() to get a copy of first 2 products
const firstTwo = products.slice(0, 2);
console.log("\n🔍 First Two Products (using slice):");
console.log(firstTwo);

// 4️⃣ Use splice() to remove product with id = 2
const indexToRemove = products.findIndex(p => p.id === 2);
if (indexToRemove !== -1) {
  const removed = products.splice(indexToRemove, 1);
  console.log("\n❌ Removed Product (using splice):", removed[0]);
}

// 5️⃣ Clone and update product list using spread (...)
const updatedProducts = [...products, { id: 5, name: "Watch", price: 799, quantity: 1 }];
console.log("\n🆕 Updated Product List (after adding new product):");
console.log(updatedProducts);

// 6️⃣ Product with method to print details
const specialProduct = {
  id: 6,
  name: "Bag",
  price: 599,
  quantity: 2,
  printDetails() {
    console.log(`\n📦 Product Details:\nName: ${this.name}\nPrice: ₹${this.price}\nQuantity: ${this.quantity}`);
  },
};
specialProduct.printDetails();

// 7️⃣ Destructuring a product
const { name, price, quantity } = specialProduct;
console.log(`\n🔍 Destructured:\nName: ${name}, Price: ₹${price}, Quantity: ${quantity}`);
