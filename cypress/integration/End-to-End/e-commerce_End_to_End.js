/// <reference types="cypress" />
describe('E-commerce End to End Test Suite', function () {
    it('End to End testing', () => {
        const productName = 'Nokia Edge';
        let sum = 0;
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.get('#username').type('rahulshettyacademy');
        cy.get('#password').type('learning');
        //radio button admin or user
        cy.get('input[value="admin"]').check();
        //select dropdown
        cy.get('select.form-control').select('Student').should('have.value', 'stud');
        //checkbox termas
        cy.get('#terms').check().should('be.checked');
        //submit button 
        cy.get('#signInBtn').click();
        cy.contains('Shop Name').should('be.visible');
        cy.get('app-card').should('have.length', 4);// count of cards
        // search for product and add to cart
        cy.get('app-card').filter(':contains("'+productName+'")').as('nokiaCard').then(() => {
            //assert that the product is visible
            cy.get('@nokiaCard').should('be.visible');
            cy.get('@nokiaCard').find('button').click();
        });
        //check out
        cy.get('a.nav-link.btn.btn-primary').click();
        //assert that the product is in the cart
        cy.get('h4').should('contain', productName);
        // price check cannot exceed 100000 fro nokia edge from the table
        cy.get('tr td:nth-child(4) strong').each(($el) => {
            const price = Number($el.text().split(" ")[1].trim());
           sum = sum+price;
        }).then(() => {
            expect(sum).to.be.lessThan(200000);
        });
        //check out
        cy.get('button.btn.btn-success').click();
        //place contry name
        cy.get('#country').type('India');
        cy.wait(2000); // wait for suggestions to load
        cy.get('.suggestions ul li a').contains('India').click();
        //submit order
        cy.get('input[value="Purchase"]').click();
        //assert that order is placed successfully
        cy.get('.alert').should('contain', ' Thank you! Your order will be delivered in next few weeks :-'); 
    });
});