/// <reference types = 'cypress' />

import landingPage from "../../support/pageObjects/form";

import buttons from "../../support/pageObjects/button";

const type = new landingPage(); // new: this class will be imported
const click = new buttons();
const data = require('../../fixtures/testData.json') //require: this file will be required for this dat

// run before each it block
beforeEach(() => {
    cy.viewport('macbook-11')
    cy.visit(Cypress.env("baseUrl"))
});

describe('Login Module', function() { 
// login with username standard_user
    it('Ensure user can login successfully', function() {
        cy.login(data.validLoginCreds1.username, data.validLoginCreds1.password)
    })
    // login with username locked_out_user
    it('Ensure user can login successfully', function() {
        cy.login(data.validLoginCreds2.username, data.validLoginCreds2.password)
    })
    // login with username problem_user
    it('Ensure user can login successfully', function() {
        cy.login(data.validLoginCreds3.username, data.validLoginCreds3.password)
       // cy.login()
    })
    // login with username performance_glitch_user
    it('Ensure user can login successfully', function() {
        cy.login(data.validLoginCreds4.username, data.validLoginCreds4.password)
    })
});