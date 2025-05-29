/// <reference types="cypress" />
describe('My Third Test Suite', function () {
    it('Third testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2');//checking the checkbox and asserting it is checked
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');//unchecking the checkbox and asserting it is not checked
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);//checking multiple checkboxes
        //dropdown handling using id
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');//selecting option2 from the dropdown and asserting it is selected
         //dropdown handling using select
        cy.get('select').select('option3').should('have.value', 'option3');//selecting option3 from the dropdown and asserting it is selected
        //Handling dynamic dropdowns
        cy.get('#autocomplete').type('ind');
        //looking for the dropdown options
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                cy.wrap($el).click();
            }
        })
        //asserting the selected value
        cy.get('#autocomplete').should('have.value', 'India');
        //handling visible and invisible elements
        cy.get('#displayed-text').should('be.visible');//asserting the text is visible
        cy.get('#hide-textbox').click();//clicking on the hide button
        cy.get('#displayed-text').should('not.be.visible');//asserting the text is not visible
        cy.get('#show-textbox').click();//clicking on the show button
        cy.get('#displayed-text').should('be.visible');//asserting the text is visible again
        //radio button handling
        cy.get('[value="radio2"]').check().should('be.checked');//checking the radio button and asserting it is checked
    })
})