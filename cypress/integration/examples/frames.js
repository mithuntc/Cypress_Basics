/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
describe('Frames Test Suite', function () {
    it('Frames testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // handling frames
        cy.frameLoaded('#courses-iframe');
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
    });
});
