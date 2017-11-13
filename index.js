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
   console.log("Your shopping cart is empty.");
  else {
    var item=Object.keys(cart[0]);
    const cost = cart[0][item];
    if(l===1)
    console.log(`In you cart, you have ${item} at $${cost}.`);

  }
}

function total() {
  var sum=0;
  for(var i=0;i<cart.length;i++) {
    var item=Object.keys(cart[i]);
    sum=sum+cart[i][item];
  }
  return sum;
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}
