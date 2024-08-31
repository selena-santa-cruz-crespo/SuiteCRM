import './commands';
export function setup_before_all() {
    before(() => {
    })
}
    export function setup_before_each() {
    beforeEach(() => {
    cy.session('login',() => {
        cy.login()
    })
        cy.visit('/#/home')
    })
}
    export function setup_after_each() {
    afterEach(() => {
    })
}
    export function setup_after_all() {
    after(() => {
    })
}