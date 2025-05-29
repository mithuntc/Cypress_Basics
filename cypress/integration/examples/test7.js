/// <reference types="cypress" />
describe('Mouse over Test Suite', function () {
    it('Mouse Over testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // handling mouse over events
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        //assertion
        cy.url().should('include', 'top');

        // forcefully clicking on an element that is not visible
        // cy.get('div.mouse-hover-content').invoke('show');
        // cy.contains('Top').click({ force: true });
    });
});