const PRODUCTS = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
    { id: 3, name: "Orange", price: 3 },
    { id: 4, name: "Rice", price: 1.5 },
    { id: 5, name: "Chocolate", price: 3 },
  ];
  

  const SHOPPING_CART = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ];

  function getCartTotalAmount() {
    let result = 0;
    SHOPPING_CART.forEach((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      result += product.price * item.quantity;
    });
    return result;
  }
  
  function addProductToCart(productId) {
    const existingItem = SHOPPING_CART.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      SHOPPING_CART.push({ id: productId, quantity: 1 });
    }
  }
  
  function removeProductFromCart(productId) {
    const itemIndex = SHOPPING_CART.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
      if (SHOPPING_CART[itemIndex].quantity > 1) {
        SHOPPING_CART[itemIndex].quantity--;
      } else {
        SHOPPING_CART.splice(itemIndex, 1);
      }
    }
  }

  console.log(getCartTotalAmount()); 

  addProductToCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); 

  addProductToCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); 
  
  removeProductFromCart(1);
  console.log(JSON.stringify(SHOPPING_CART));
  
  removeProductFromCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); 
  
  