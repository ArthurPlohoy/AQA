/// <reference types="cypress" />

describe('Iterate over elements', () => {
    it('Log information of all hair care products', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt', 5);
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

});