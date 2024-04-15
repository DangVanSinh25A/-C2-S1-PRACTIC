let totalPrice = 0;
const total_Price  = items => items.forEach(item => {
    return totalPrice += item.price * item.quantity;
});

let shoppingCart = [
    { name: "Apples", price: 2.5, quantity: 3 },
    { name: "Bananas", price: 1.5, quantity: 2 },
    { name: "Oranges", price: 3, quantity: 1 },
  ];
  total_Price(shoppingCart)
console.log(totalPrice);