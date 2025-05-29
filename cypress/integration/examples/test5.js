/// <reference types="cypress" />
describe('Handle Child windows Test Suite', function () {
    it('Child window handling testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //opening a new tab
        cy.get('#opentab').invoke('removeAttr', 'target').click(); //removing the target attribute to open the link in the same tab
        // clicking about us link
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get("#navbarSupportedContent a[href*='about']").click(); //clicking on the about link
            //asserting the URL contains 'about'
            cy.get('.page-banner-cont h2').should('have.text', 'About Us'); //asserting the heading text
        })
    });
})