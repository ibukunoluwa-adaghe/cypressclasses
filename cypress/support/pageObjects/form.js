class  landingPage {
    userNameField(username) {
        return cy.get('[data-test="username"]').type(username)
    }
    passwordField(password) {
        return cy.get('[data-test="password"]').type(password)
    }
}
export default landingPage  