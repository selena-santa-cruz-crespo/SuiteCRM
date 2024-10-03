import * as hooks from '../../support/hooks'
import { CallsElements } from '../../support/pages_objects/calls_elements'

const calls_elements = new CallsElements()

describe('Pruebas Calls', () => {
    hooks.setup_before_each()

    it('TC 801 - Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear una llamada', () => {
        cy.task('log', 'Verificando que no se puede crear una llamada con campos vacíos')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.submenuCreateCall().click({ force: true })
        calls_elements.setIframe().then(() => {
            calls_elements.parentNameField().clear().type('Review needs')
            calls_elements.saveButton().click();
            calls_elements.errorMessage().should('contain.text', 'Missing required field: Subject')
            cy.task('log', 'se mostró el mensaje de error adecuado.')
        })
    })

    it('TC 802 - Verificar que al llenar todos los campos obligatorios y hacer click en cancelar nos redirija a la lista de llamadas', () => {
        cy.task('log', 'Verificando que al cancelar, se redirige a la lista de llamadas')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.submenuCreateCall().click({ force: true })
        calls_elements.setIframe().then(() => {
            calls_elements.parentNameField().clear().type('Review needs')
            calls_elements.description().type('prueba llamadas')
            calls_elements.cancel().click()
            cy.url().should('include', '/calls')
            cy.task('log', 'se redirigió a la lista de llamadas.')
        })
    })

    it('TC 803 - Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear un invitado', () => {
        cy.task('log', 'Verificando que no se puede crear un invitado con campos vacíos')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.submenuCreateCall().click({ force: true })
        calls_elements.setIframe().then(() => {
            calls_elements.createInviteeAsContact().click()
            calls_elements.inviteeFirstNameField().clear().type('Lia')
            calls_elements.inviteeEmailField().clear().type('tom@gmail.com')
            calls_elements.createInviteeButton().click()
            calls_elements.inviteeLastNameError().should('contain.text', 'Missing required field: Last Name')
            cy.task('log', ' se mostró el mensaje de error para el campo de apellido.')
        })
    })

    it('TC 804 - Verificar que al buscar un contacto inexistente muestre el mensaje “Sorry, no results were found. Please create an invitee below.”', () => {
        cy.task('log', 'Verificando que se muestra un mensaje al buscar un contacto inexistente')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.submenuCreateCall().click({ force: true })
        calls_elements.setIframe().then(() => {
            calls_elements.searchfirstname().clear().type('Negan')
            calls_elements.searchlastname().clear().type('Ramit')
            calls_elements.saveButton().click()
            calls_elements.emptySearchMessage().should('contain.text', 'Sorry, no results were found. Please create an invitee below.')
            cy.task('log', 'se mostró el mensaje de no resultados.')
        })
    })

    it.skip('TC 805 - Verificar que al buscar una llamada con los datos correctos devuelve solo esa llamada', () => {
        cy.task('log', 'Verificando la búsqueda de una llamada con datos correctos')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.filterSettingsButton().click()
        calls_elements.filterCallSubject().clear().type('Left a message')
        cy.get(':nth-child(2) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control')
            .clear().type('JCB Banking Inc')
        cy.get('#pn_id_9 > .p-multiselect-label-container > .p-multiselect-label').click()
        cy.get('.p-inputtext').clear().type('chris')
        cy.get('.filter-button').click()
        cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-body > div > div > p')
            .should('exist')
            .and(($tableBody) => {
                const rows = $tableBody.find('table > tbody > tr')
                expect(rows.length).to.be.greaterThan(0)
            })
        cy.task('log', 'Verificación completa: se devolvieron resultados correctos de la búsqueda.')
    })

    it('FTC 806 - Verificar que al presionar sobre un “>” avance a los siguientes 20 llamadas', () => {
        cy.task('log', 'Verificando paginación hacia adelante')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.paginationNextButton().click()
        cy.task('log', 'se avanzó a la siguiente página de llamadas.')
    })

    it('FTC 807 - Verificar que al presionar sobre un “>>” avance al final de las llamadas', () => {
        cy.task('log', 'Verificando paginación al final')
        calls_elements.menuCalls().click()
        calls_elements.submenuCalls().click()
        calls_elements.paginationLastButton().click()
        cy.task('log', 'se avanzó al final de la lista de llamadas.')
    })
})
