
/// <reference types="cypress" />
describe('My First Test Suite', function () {
  it('First testCase', function () {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
    // parents to child chaining
    cy.get('.products').as('productLocator');// aliasing the parent element(act as a variable) reusing it later
    cy.get('@productLocator').find('.product').should('have.length', 4);
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();// static index clicking
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      const textVeg = $el.find('h4.product-name').text();
      if (textVeg.includes('Cashews')) {
        cy.wrap($el).contains('ADD TO CART').click();
      }
    })
    cy.get('.brand').then(function (logoelement) {
      cy.log(logoelement.text());
    })
    //assertions log text is GreenKart or not
    cy.get('.brand').should('have.text', 'GREENKART');
    
  })
})