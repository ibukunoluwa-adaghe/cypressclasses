class  landingPage {
    userNameField(username) {
        return cy.get('[data-test="username"]').type(username)
    }
    passwordField(password) {
        return cy.get('[data-test="password"]').type(password)
    }
    loginButton() {
        return cy.get('[data-test="login-button"]').click()
    }
}
export default landingPage  