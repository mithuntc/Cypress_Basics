/// <reference types="cypress" />
describe('E-commerce End to End Test Suite', function () {
    before(() => {
        // This will run once before all tests in this block
         cy.fixture('example.json').then((data) => {
          this.data = data; // Get the product name from the fixture
        });
    });
    it('End to End testing', () => {
        // Initialize sum variable to calculate total price of products
        let sum = 0;
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.get('#username').type(this.data.username);
        cy.get('#password').type(this.data.password);
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
        cy.get('app-card').filter(':contains("'+this.data.productName+'")').as('nokiaCard').then(() => {
            //assert that the product is visible
            cy.get('@nokiaCard').should('be.visible');
            cy.get('@nokiaCard').find('button').click();
        });
        //check out
        cy.get('a.nav-link.btn.btn-primary').click();
        //assert that the product is in the cart
        cy.get('h4').should('contain', this.data.productName);
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
        //cy.config('defaultCommandTimeout', 10000); // increase timeout for country input
        cy.wait(2000); // wait for suggestions to load
        cy.get('.suggestions ul li a').contains('India').click();
        //submit order
        cy.get('input[value="Purchase"]').click();
        //assert that order is placed successfully
        cy.get('.alert').should('contain', ' Thank you! Your order will be delivered in next few weeks :-'); 
    });
});