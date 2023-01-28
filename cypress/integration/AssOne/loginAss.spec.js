/// <reference types = 'cypress' />

import landingPage from "../../support/pageObjects/landingPage";

const type = new landingPage();

describe('Login Module', function() { 
    it('Ensure user can login successfully', function() {
        cy.visit(Cypress.env("baseUrl"))
        type.userNameField("standard_user")
        type.passwordField("secret_sauce")
        cy.wait (2000);
        cy.get('[data-test="login-button"]').click()
    })
}); 