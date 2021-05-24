// https://www.codewars.com/kata/587593285448632b8d000143
function submitOrder(user) {
  // let shoppingCart;
  // let zipCode;
  // let shippingRate;
  // let orderSuccessful;
  
  return Promise
    .all([
      // Get the current user's shopping cart
      OrderAPI.getShoppingCartAsync(user),
      // Also look up the ZIP code from their profile
      CustomerAPI.getProfileAsync(user)
    ])
    .then(([ shoppingCart, profile ]) => {
      // Calculate the shipping fees
      const shippingRate = calculateShipping(shoppingCart, profile.zipCode);
      
      // Submit the order
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
    })
    .then((orderSuccessful) => {
      console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
    });
}
