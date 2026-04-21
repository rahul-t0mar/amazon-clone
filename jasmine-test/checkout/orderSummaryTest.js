import { loadFromStorage } from "../../data/cart.js";
import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadProducts, loadProductsFetch } from "../../data/products.js";

describe('Test Suite : renderOrderSummary', ()=>{
    const productid1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'

    beforeAll((done)=>{    //done parameter help load the products after getting the response and then let the next step happen
        loadProductsFetch().then(()=>{
            done();
        });

    })
    beforeEach(() => {
        spyOn(localStorage, 'setItem');
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-header-total-items"></div>
        <div class="js-order-summary"></div>
        `;
        const productid1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productid1,
                quantity : 2,
                deliveryOptionId : '1'
            }]);
        });
        loadFromStorage();
        renderOrderSummary();
    });

    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    });

    it('Displays the cart', ()=>{
        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
        expect(document.querySelector(`.js-product-quantity-${productid1}`).innerText).toContain('Quantity: 2')

    });

    it('Removes a product', () => {
        
        document.querySelector(`.js-delete-link-${productid1}`.click);
        expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);
        expect(document.querySelector(`.js-cart-item-container-${productid1}`)).toEqual(null);
    });
});