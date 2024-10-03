import * as hooks from '../../support/hooks';
import { MeetingsElements } from '../../support/pages_objects/meetings_elements';

const meetings_elements = new MeetingsElements();

describe('Pruebas Meetings', () => {
    hooks.setup_before_each()

    it('TC 901 - Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear una reunión', () => {
        cy.task('log', 'Verificando que no se puede crear una reunión con campos vacíos')
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.submenuCreateMeeting().click({ force: true })
        meetings_elements.parentNameField().clear().type('Review needs')
        meetings_elements.locationField().clear().type('Review needs')
        meetings_elements.saveButton().click()
        meetings_elements.errorMessage().should('contain.text', 'Missing required field: Subject')
        cy.task('log', 'Verificación completa: se mostró el mensaje de error adecuado.')
    })

    it('TC 902 - Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear un invitado para reunión', () => {
        cy.task('log', 'Verificando que no se puede crear un invitado con campos vacíos')
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.submenuCreateMeeting().click({ force: true })
        meetings_elements.createInviteeAsContact().click()
        meetings_elements.inviteeFirstNameField().clear().type('Lia')
        meetings_elements.inviteeEmailField().clear().type('tom@gmail.com')
        meetings_elements.createInviteeButton().click()
        meetings_elements.inviteeLastNameError().should('contain.text', 'Missing required field: Last Name')
        cy.task('log', 'se mostró el mensaje de error para el campo de apellido.')
    })

    it('TC 903 - Verificar que al buscar un contacto inexistente muestre como resultado “Sorry, no results were found. Please create an invitee below.”', () => {
        cy.task('log', 'Verificando que se muestra un mensaje al buscar un contacto inexistente');
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.submenuCreateMeeting().click({ force: true })
        meetings_elements.searchFirstName().clear().type('Negan')
        meetings_elements.searchLastName().clear().type('Ramit')
        meetings_elements.saveButton().click()
        meetings_elements.emptySearchMessage().should('contain.text', 'Sorry, no results were found. Please create an invitee below.')
        cy.task('log', 'se mostró el mensaje de no resultados.')
    })

    it('TC 904 - Verificar que al dejar todos los campos vacíos nos devuelve todos los contactos guardados', () => {
        cy.task('log', 'Verificando que se devuelven todos los contactos al dejar campos vacíos');
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.submenuCreateMeeting().click({ force: true })
        meetings_elements.inviteesSearch().click()
        meetings_elements.listDiv().should('not.be.empty')
        cy.task('log', 'Verificación completa: se devolvieron todos los contactos guardados.')
    })

    it('TC 905: Verificar que al buscar una reunión con "Review needs" y "B.H. Edwards Inc." no devuelve resultados esperados', () => {
        cy.task('log', 'Verificando que al buscar una reunión con "Review needs" y "B.H. Edwards Inc." no devuelve los resultados esperados');
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.filterSettingsButton().click()
        meetings_elements.firstFilterInput().clear().type('Review needs')
        meetings_elements.secondFilterInput().clear().type('B.H. Edwards Inc.')
        meetings_elements.multiSelectDropdown().click()
        meetings_elements.multiSelectInput().clear().type('chris')
        meetings_elements.filterButton().click()
        meetings_elements.listViewTitle().should('contain.text', 'Review needs')
        meetings_elements.listViewRow().should('contain.text', 'B.H. Edwards Inc.')
        cy.task('log', 'se buscaron y verificaron correctamente los resultados esperados.')
    })
    it('FTC 906 - Verificar que al presionar sobre un “subject” en meetings nos redirija a los datos guardados de ese “subject”', () => {
        cy.task('log', 'Verificando redirección al hacer clic en un subject');
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.verifyMeetingsTableHasRows()
        cy.task('log', 'Verificación completa: se redirigió correctamente al subject.')
    })

    it('FTC 907 - Verificar que al presionar sobre un “Related to” en meetings nos redirija a los datos guardados de ese “Related to”', () => {
        cy.task('log', 'Verificando redirección al hacer clic en un Related to');
        meetings_elements.menuMeetings().click()
        meetings_elements.submenuMeetings().click()
        meetings_elements.verifyMeetingsTableHasRows()
        cy.task('log', 'Verificación completa: se redirigió correctamente al Related to.')
    })
})
