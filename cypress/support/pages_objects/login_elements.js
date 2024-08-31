export class LoginElements{
    get login_username(){
        return cy.get('scrm-image + [name="username"]')
    }
    get login_password(){
        return cy.get('scrm-image + [name="password"]')
    }
    get login_button(){
        return cy.get('button#login-button')
    }
    get login_anim(){
        return cy.get('.sk-cube-grid')
    }
    get login_alert(){
        return cy.get('.alert')
    }
    get login_missing_required_field(){
        return cy.get('.invalid-feedback')
    }

}