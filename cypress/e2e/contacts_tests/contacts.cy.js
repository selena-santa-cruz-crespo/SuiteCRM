import * as hooks from '../../support/hooks'
import { ContactsElements } from '../../support/pages_objects/contacts_elements'

const contacts_elements = new ContactsElements;

describe('Contacts Tests', () => {
    hooks.setup_before_each()

it('TC 401 - Verificar que al presionar sobre el título de cualquier columna que sea ordenable entonces el sistema ordenará los registros según los valores de ese campo en orden ascendente', () => {
    cy.get('.top-nav-link').contains('Contacts').click()
    cy.url().should('include', 'contacts')
    contacts_elements.contact_table.should('be.visible')
    cy.task('log', 'Presionar dobleclick para acceder al orden ascendente')
    contacts_elements.order_button.dblclick()
    cy.wait(4000)
    contacts_elements.name_column.then(elements => {
        const actualOrder = [...elements].map(el => el.innerText.trim());
        cy.task('log', 'Contactos ordenados según la función: ' + JSON.stringify(actualOrder));
        const sortedOrder = actualOrder.sort();
        cy.task('log', 'Ordenar resultados en caso de error para su verificación: ' + JSON.stringify(sortedOrder));
        expect(actualOrder).to.deep.equal(sortedOrder);
    })
})

it('TC 402 - Verificar que al presionar sobre el título de cualquier columna que sea ordenable entonces el sistema ordenará los registros según los valores de ese campo en orden descendente', () => {
    cy.get('.top-nav-link').contains('Contacts').click()
    cy.url().should('include', 'contacts')
    contacts_elements.contact_table.should('be.visible')
    contacts_elements.order_button.click()
    cy.wait(3000)
    contacts_elements.name_column.then(elements => {
        const actualOrder = [...elements].map(el => el.innerText.trim());
        cy.task('log', 'Contactos ordenados según la funcción: ' + JSON.stringify(actualOrder));
        const sortedOrder = actualOrder.sort((a,b) => b - a);
        cy.task('log', 'Ordenar resultados en caso de error para su verificación: ' + JSON.stringify(sortedOrder));
        expect(actualOrder).to.deep.equal(sortedOrder);
    })
}) 

it('TC 403 - Verificar que al llenar campo “First Name” del formulario de filtro, el sistema devuelva lo estipulado', () => {
    cy.visit('/#/contacts')
    contacts_elements.contact_table.should('be.visible')
    cy.task('log', 'Acceder a formulario [Filtrar contactos]')
    contacts_elements.filter.should('be.visible').click()
        cy.task('log', 'Ingreso de valor "Ol" en campo [First Name]')
        contacts_elements.filter_placeholder.type('Ol')
        cy.contains('scrm-label.ng-star-inserted', 'Search').click()
        cy.get('td.cdk-cell.cdk-column-name.column-name.column-type-name.ng-star-inserted > scrm-field > scrm-dynamic-field > a > scrm-varchar-detail:contains("Ol")')
        .should('exist')
    })

it('TC 404 - Verificar que al presionar el button "next" de paginación, el contador de los resultados cambia de valor', () => {
    cy.visit('/#/contacts')
    contacts_elements.title_contact.should('contain.text', 'CONTACTS')
    contacts_elements.pagination_contact.should('contain.text', '(1 - 20')
    contacts_elements.pagination_button.last().click()
        cy.task('log', 'Verificación de contador de siguiente página de contactos')
        contacts_elements.pagination_contact.should('contain.text', '(21 - 40 of 200)')
    })

it('TC 405 - Verificar que al presionar ícono ">>" estemos en la última vista de paginación', () => {
    cy.visit('/#/contacts')
    contacts_elements.title_contact.should('contain.text', 'CONTACTS')
    cy.wait(2000)
    contacts_elements.pagination_full_button.first().click()
    cy.wait(1000)
    cy.task('log', 'Verificando contador de última página de contactos')
    contacts_elements.pagination_contact.first()
    .invoke('text')
    .then(elements => {
        const pagination = elements.match(/[\d]+|[^\w\s]/g);
        cy.log(JSON.stringify(pagination));
        expect(pagination[3]).to.equal(pagination[pagination.length - 2]);
        })
    })

it('TC 406 - Verificar que al dejar el campo obligatorio vacío el usuario no puede crear un contacto.', () => {
    contacts_elements.createContactButton.click({ force: true })
    contacts_elements.verifyContactFormPage()
    contacts_elements.contact_page.should('contain.text', 'OVERVIEW').and('be.visible')
    cy.task('log', 'Ingresando los datos del contacto a crear')
    cy.fixture('contact_data.json').then((contact_data) => {
    contacts_elements.name_contact.should('be.visible').type(contact_data.contact_name)
    contacts_elements.phone_contact.type(contact_data.contact_office_phone)
    contacts_elements.mobile_contact.type(contact_data.contact_mobile)
    contacts_elements.jobTitle_contact.type(contact_data.contact_job_title)
    contacts_elements.department_contact.type(contact_data.contact_department)
    contacts_elements.fax_contact.type(contact_data.contact_fax)
    contacts_elements.address_contact.type(contact_data.contact_primary_adress_street)
    contacts_elements.postal_contact.type(contact_data.contact_postal)
    contacts_elements.city_contact.type(contact_data.contact_city)
    contacts_elements.state_contact.type(contact_data.contact_state)
    contacts_elements.country_contact.type(contact_data.contact_country)
    contacts_elements.description_contact.type(contact_data.contact_description)    
    contacts_elements.save_contact_button.click()
    cy.task('log', 'Verificando mensajes de advertencia...')
    contacts_elements.alert.should('exist').and('be.visible')
    contacts_elements.create_contact_error
        .should('contain.text', 'Missing required field: Last Name')
        .and('be.visible')
        })
    })

it('TC 407 - Verificar que al presionar ícono "Editar" se muestre el formulario de detalles de un contacto', () => {
    cy.visit('/#/contacts')
    cy.get('scrm-varchar-detail').first().click()
    cy.get('.record-action-button.ng-star-inserted').first().click()
    cy.task('log', 'Verificar visualización de formulario [Editar contacto]')
    cy.get('.field-layout.edit').should('exist')
    })

it('FTC 408 - Verificar que al no llenar ningún campo el sistema muestra mensaje de advertencia "Missing required field: Last Name"', { tags: ['functional'] }, () => {
    cy.task('log', 'Acceder a formulario [Crear contacto]')
    contacts_elements.createContactButton.click({ force: true })
    contacts_elements.verifyContactFormPage()
    contacts_elements.contact_label.should('contain.text', 'Create')
    cy.task('log', 'Presionar save sin llenar ningún campo')
    contacts_elements.save_contact_button.click()
    cy.task('log', 'Visualización mensaje de advertencia')
    contacts_elements.create_contact_error.should('be.visible')
    })
})