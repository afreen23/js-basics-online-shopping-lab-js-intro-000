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
  else if(l===1){
    var item=Object.keys(cart[0]);
    console.log(`In your cart, you have ${item} at $${cart[0][item]}.`);
  }
  else if(l===2) {
    var item1=Object.keys(cart[0]);
    var item2=Object.keys(cart[1]);
    console.log(`In your cart, you have ${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`);
  }
  else {
    var s='In your cart, you have ';
    for(var i=0;i<cart.length;i++) {
      var item=Object.keys(cart[i]);
      var cost=cart[i][item];
      s=s+`${item} at ${cost}${(i===cart.length-2)?', and':((i===cart.length-1)?'.':',')}`;
    }
    console.log(s);
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
  for(var i=0;i<cart.length;i++) {
    if((cart[i]).hasOwnProperty(item))
      {
        cart.splice(i,1);
        return cart;
        break;
      }
  }
  if(i===cart.length)
   console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined)
   console.log("Sorry, we don't have a credit card on file for you.");
  else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.splice(0,cart.length);
  }
}
