function Cart(localStorageKey){
    const cart = {
        cartItems : undefined,

        loadFromStorage(){
            this.cartItems =JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems){
                this.cartItems = [{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity : 1,
                deliveryOptionId : '1'
                }]
            }
        },

        addToCart(productId){
            let matchingItem;
            this.cartItems.forEach((item)=>{
                if (productId === item.productId){
                matchingItem = item;
                }
            });
            if (matchingItem){
                matchingItem.quantity += 1;
            }
            else{
                this.cartItems.push({
                productId : productId,
                quantity : 1,
                deliveryOptionId : '1'
                });
            }
            this.saveToStorage()
        },

        saveToStorage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId){
            let matchingItem;
            this.cartItems.forEach((item)=>{
                if (productId === item.productId){
                    matchingItem = item;
                }
            });
            if (matchingItem){
                matchingItem.quantity += 1;
            }
            else{
                this.cartItems.push({
                productId : productId,
                quantity : 1,
                deliveryOptionId : '1'
                });
            }
            this.saveToStorage()
        },

        removeProduct(productId) {
            // Mutate in place using splice instead of reassigning
            const index = this.cartItems.findIndex((item) => item.productId === productId);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
            }
            this.saveToStorage();
        },

        saveToStorage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        updateDeliveryOption(productId, deliveryOptionId){
            let matchingItem;
            this.cartItems.forEach((item)=>{
            if (productId === item.productId){
                matchingItem = item;
            }
            });
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }

    };

    return cart;
};


const cart = Cart('cart-oop')
const businessCart = Cart('business-cart')
cart.loadFromStorage();

console.log(cart);
console.log(businessCart)

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
