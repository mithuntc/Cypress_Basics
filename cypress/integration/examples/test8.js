/// <reference types="cypress" />
describe('TAB Test Suite', function () {
    it('TAB testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // handling tab events
        cy.get('#opentab').then((el) => {
            const url = el.prop('href');
            cy.visit(url);
            cy.origin(url, () => {
                cy.get("div.sub-menu-bar a[href*='about']").click();
            });
        });
    });
});