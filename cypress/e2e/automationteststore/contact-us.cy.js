/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        //cy.get('#contact-us').click({force: true})
        cy.get('#ContactUsFrm_first_name').type("Artur plokhyi");
        cy.get('#ContactUsFrm_email').type("apo@anadeainc.com");
        cy.get('#ContactUsFrm_enquiry').type("How can I learn Cypress?")
        cy.get('.col-md-6 > .btn').click({force: true});
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')
    });
})