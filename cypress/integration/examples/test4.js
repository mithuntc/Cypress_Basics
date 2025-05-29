/// <reference types="cypress" />
describe('My Fourth Test Suite', function () {
    it('Forth testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //handling alerts
        cy.get('#alertbtn').click(); //clicking on the alert button
        cy.get('[value="Confirm"]').click(); //clicking on the confirm button
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge'); //asserting the alert text
        });
        //handling confirm box
        cy.get('#confirmbtn').click(); //clicking on the confirm button
        //confirm alert
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?'); //asserting the confirm text
        });
    });

})