// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',() =>{
    cy.visit('/')
    login_element.login_anim.should('not.exist')
    cy.fixture('login_data.json').then((user_data) => {
    login_element.login_username.should('be.visible')
        .click()
        .type(user_data.user_name)
    login_element.login_password.should('be.visible')
        .click()
        .type(user_data.user_password)
    })
    login_element.login_button.click()
    cy.url().should('include', '/#/home')
})
