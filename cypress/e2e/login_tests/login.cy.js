import { LoginElements } from "../../support/pages_objects/login_elements";
const login_element = new LoginElements()


it('TC 101 -  Verificar que un usuario pueda ingresar al sistema con credenciales válidas', () => {
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

it('TC 102 -  Verificar que un usuario no pueda ingresar al sistema con credenciales inválidas', () => {
    cy.visit('/')
    login_element.login_anim.should('not.exist')
    cy.fixture('login_data.json').then((user_data) => {
    login_element.login_username.should('be.visible')
        .click()
        .type(user_data.user_namefail)
    login_element.login_password.should('be.visible')
        .click()
        .type(user_data.user_passwordfail)
    })
    login_element.login_button.click()
    login_element.login_alert.should('be.visible')
    .and('contain', 'Login credentials incorrect, please try again.')
})

it('TC 103 -  Verificar que al no llenar el campo de usuario y contraseña el usuario no  pueda ingresar al sistema.', () => {
    cy.visit('/')
    login_element.login_anim.should('not.exist')
    login_element.login_username.should('be.visible')
    .click()
    login_element.login_password.should('be.visible')
    .click()
    login_element.login_button.click()
    login_element.login_missing_required_field.should('be.visible')
    .and('contain', 'Missing required field')
})