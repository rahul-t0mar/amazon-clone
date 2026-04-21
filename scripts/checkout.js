import {renderOrderSummary} from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummery.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js'
// import '../data/cart-class-oop.js';
// import '../data/backende-practice.js';



/*
new Promise((resolve)=>{  //Here we run a asyncronous code which executes after the response and resolve is executed then we proceed to next step.
    loadProducts(()=>{    //Here we are not actually calling the loadProduct and hope the below code wont work but both codes run parallel to one another.
        resolve();
    })
}).then(()=>{     //This then function is executed once the asyncronous function is completed and executed then the next step is done so below code is not neccessary anymore.
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve()});
    }).then(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    })    
   
})

*/

//Instead of nested promise we can also make multiple promise go side by side by using Promise.all()
/*
Promise.all([
   loadProductsFetch(),
new Promise((resolve)=>{
        loadCart(()=>{
            resolve()});
    })
]).then(()=>{
        renderOrderSummary();
        renderPaymentSummary();
});
*/

//There is even a better way to deal with asynchronous code which is using async which is shortcut for promise
//and instead of passing a value through resolve in await we can actually save the value as it return the value.

async function loadPage(){
    await loadProductsFetch();

    await new Promise((resolve)=>{
        loadCart(()=>{
            resolve()});
    })

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();




/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/