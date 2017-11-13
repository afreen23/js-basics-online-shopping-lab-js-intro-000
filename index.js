var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice=Math.floor(Math.random()*100);
  var newobj= Object.assign({},{[item]: itemPrice});
  cart.push(newobj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var l=cart.length;
  if(l===0)
   console.log("Your shopping cart is empty");
  else {
    var a=Object.keys(cart);
    for(i=0;i<l;i++) {
      console.log(`In you cart, you have ${a[i]} at ${cart[a[i]]}`);
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
