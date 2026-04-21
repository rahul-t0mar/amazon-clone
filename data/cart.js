export let cart;
loadFromStorage();
export function loadFromStorage(){
  cart =JSON.parse(localStorage.getItem('cart'));
  if (!cart){
      cart = [{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity : 1,
      deliveryOptionId : '1'
  }]
}

}

export function addToCart(productId){
  let matchingItem;
  cart.forEach((item)=>{
    if (productId === item.productId){
      matchingItem = item;
    }
  });
  if (matchingItem){
    matchingItem.quantity += 1;
  }
  else{
  cart.push({
    productId : productId,
    quantity : 1,
    deliveryOptionId : '1'
  });}
  saveToStorage()
}

// export function removeProduct(productId){
//   const newCart = [];
//   cart.forEach((item)=>{
//     if (item.productId !== productId){
//       newCart.push(item);
//     }
//   })
// cart = newCart;
// saveToStorage()
// }
export function removeProduct(productId) {
    // Mutate in place using splice instead of reassigning
    const index = cart.findIndex((item) => item.productId === productId);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
  cart.forEach((item)=>{
    if (productId === item.productId){
      matchingItem = item;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}


export function loadCart(fun){
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
   console.log(xhr.response)
  fun();
  });
  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}