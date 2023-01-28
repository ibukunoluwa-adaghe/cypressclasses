/// <reference types = 'cypress' />

import landingPage from "../../support/pageObjects/landingPage";

const type = new landingPage(); // new: this class will be imported
const data = require('../../fixtures/testData.json') //require: this file will be required for this dat

// run before each it block
beforeEach(() => {
    cy.viewport('macbook-11')
    cy.visit(Cypress.env("baseUrl"))
});

describe('Login Module', function() { 
// login with username standard_user
    it('Ensure user can login successfully', function() {
        type.userNameField(data.validLoginCreds1.username)
        type.passwordField(data.validLoginCreds1.password)
        cy.wait (2000);
        cy.get('[data-test="login-button"]').click()
    })
    // login with username locked_out_user
    it('Ensure user can login successfully', function() {
        type.userNameField(data.validLoginCreds2.username)
        type.passwordField(data.validLoginCreds2.password)
        cy.wait (2000);
        cy.get('[data-test="login-button"]').click()
    })
    // login with username problem_user
    it('Ensure user can login successfully', function() {
        type.userNameField(data.validLoginCreds3.username)
        type.passwordField(data.validLoginCreds3.password)
        cy.wait (2000);
        cy.get('[data-test="login-button"]').click()
    })
    // login with username performance_glitch_user
    it('Ensure user can login successfully', function() {
        type.userNameField(data.validLoginCreds4.username)
        type.passwordField(data.validLoginCreds4.password)
        cy.wait (2000);
        cy.get('[data-test="login-button"]').click()
    })
});