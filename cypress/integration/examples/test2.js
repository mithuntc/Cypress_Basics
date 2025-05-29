
/// <reference types="cypress" />
describe('My second Test Suite', function () {
    it('Second testCase', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        // parents to child chaining
        cy.get('.products').as('productLocator');// aliasing the parent element(act as a variable) reusing it later
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text();
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click();
            }
        })
        // click on the cart icon
        cy.get('.cart-icon > img').click();
        // proceed to checkout
        cy.contains('PROCEED TO CHECKOUT').click();
        // wait for the checkout page to load
        cy.wait(2000);
        //palce order
        cy.contains('Place Order').click();
    })
})