/// <reference types="cypress" />
describe('Handle Web Tables Test Suite', function () {
    it('Web Tables testCase', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //handling web tables
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                });
            }
        });

    })
})