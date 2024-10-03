import * as hooks from '../../support/hooks'
import { CalendarElements } from '../../support/pages_objects/calendar_elements'
import { HomeElements } from "../../support/pages_objects/home_elements"

const home_elements = new HomeElements()
const calendar_elements = new CalendarElements()

describe('Pruebas Home', () => {
    hooks.setup_before_each()

    it('TC 701 - Verificar que al buscar un nombre inexistente, el sistema muestre el mensaje "No results matching your search criteria."', () => {
        home_elements.search_input.type('Nivea{enter}')
        cy.task('log', 'Verificando que la URL sea la correcta')
        cy.url().should('include', '/search?query_string=Nivea')
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#pagecontent > div.moduleTitle > h2')
            .should('be.visible')
            cy.task('log', 'Verificando el mensaje de "No results matching your search criteria."')
            home_elements.no_results_message
            .should('be.visible')
            .and('contain.text', 'No results matching your search criteria. Try broadening your search.')
        })
    })

    it('TC 702 - Verificar que al buscar un nombre que existe, el sistema muestre todas las tablas donde existe el nombre', () => {
        cy.task('log', 'Ingresando nombre existente "AtoZ" en la barra de búsqueda')
        home_elements.search_input.click().type('AtoZ{enter}')
        cy.task('log', 'Verificando que la URL sea la correcta')
        cy.url().should('include', '/search?query_string=AtoZ')
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#pagecontent > div.moduleTitle > h2').should('be.visible')
            cy.wrap($iframeBody).find('#pagecontent > ul').should('be.visible')
            cy.task('log', 'Verificando los resultados de búsqueda')
            home_elements.search_results_table.each(($table) => {
                cy.wrap($table).find('tbody > tr').should('have.length.greaterThan', 0)
                cy.wrap($table).find('tbody > tr').each(($row) => {
                cy.wrap($row).find('td:nth-child(2) > a > span')
                .should('be.visible')
                })
            })
        })
    })

    it('TC 703 - Verificar que al intentar acceder employees desde el user icon sin permisos, el sistema muestre un “You are not authorized to view this page. Please contact your system administrator.”', () => {
        cy.task('log', 'Intentando acceder a Employees sin permisos')
        home_elements.employees_link.click({ force: true })
        cy.task('log', 'Verificando el mensaje “You are not authorized to view this page. Please contact your system administrator."')
        home_elements.unauthorized_message
            .should('be.visible')
            .and('contain.text', 'You are not authorized to view this page. Redirecting to Home Page...')
    })

    it('FTC 704 - Verificar que se abra y cierre correctamente el modal de ACCIONS', () => {
        home_elements.actions_tab.click({ force: true },{timeout: 2000})
        home_elements.add_dashlets_button.click()
        cy.wait(1000)
        cy.task('log', 'Verificando que el modal de Add Dashlet esté visible')
        home_elements.modal_add_dashlet.should('be.visible')
        cy.task('log', 'Cerrando el modal de Add Dashlet')
        home_elements.modal_close_button.click({ force: true })
    })

    it('FTC 705 - Verificar que al hacer click en "Accounts" nos redirija al apartado correcto', () => {
        home_elements.accounts_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "accounts"')
        cy.url().should('include', 'accounts')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "ACCOUNTS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'ACCOUNTS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows.should('have.length.greaterThan', 0)
        home_elements.header_checkbox.click()
    })

    it('FTC 706 - Verificar que al hacer click en "Contacts" nos redirija al apartado correcto', () => {
        home_elements.contacts_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "contacts"')
        cy.url().should('include', 'contacts')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "CONTACTS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'CONTACTS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows.should('have.length.greaterThan', 0)
        home_elements.header_checkbox.click()
    })

    it('FTC 707 - Verificar que al hacer click en "Opportunities" nos redirija al apartado correcto', () => {
        home_elements.opportunities_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "opportunities"')
        cy.url().should('include', 'opportunities')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "OPPORTUNITIES"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'OPPORTUNITIES')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows.should('have.length.greaterThan', 0)
    })

    it('FTC 708 - Verificar que al hacer click en "Quotes" nos redirija al apartado correcto', () => {
        home_elements.quotes_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "quotes"')
        cy.url().should('include', 'quotes')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "QUOTES"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'QUOTES')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
    })

    it('FTC 709 - Verificar que al hacer click en "Calendar" nos redirija al apartado correcto', () => {
        home_elements.calendar_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "calendar"')
        cy.url().should('include', 'calendar')
    })

    it('FTC 710 - Verificar que al hacer click en "Documents" nos redirija al apartado correcto', () => {
        home_elements.documents_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "documents"')
        cy.url().should('include', 'documents')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "DOCUMENTS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'DOCUMENTS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
    })

    it('FTC 711 - Verificar que al hacer click en "Emails" nos redirija al apartado correcto', () => {
        home_elements.emails_tab.click({ force: true }, { timeout: 2000 })
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "EMAIL - TEMPLATES"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'EMAIL - TEMPLATES')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows.should('have.length.greaterThan', 0)
        
    })
    
    
    it('FTC 712 - Verificar que al hacer click en "Campaigns" nos redirija al apartado correcto', () => {
        home_elements.campaigns_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "campaigns"')
        cy.url().should('include', 'campaigns')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "CAMPAIGNS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'CAMPAIGNS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
    })

    it('FTC 713 - Verificar que al hacer click en "Calls" nos redirija al apartado correcto', () => {
        home_elements.calls_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "calls"')
        cy.url().should('include', 'calls')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "CALLS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'CALLS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_row.should('have.length.greaterThan', 0)
    })

    it('FTC 714 - Verificar que al hacer click en "Meetings" nos redirija al apartado correcto', () => {
        home_elements.meetings_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "meetings"')
        cy.url().should('include', 'meetings')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "MEETINGS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'MEETINGS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows2.should('have.length.greaterThan', 0)
    })

    it('FTC 715 - Verificar que al hacer click en "Tasks" nos redirija al apartado correcto', () => {
        home_elements.tasks_tab.click({ force: true }, {timeout: 2000})
        cy.task('log','Verificando que la URL contenga "tasks"')
        cy.url().should('include', 'tasks')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "TASKS"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'TASKS')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows3.should('have.length.greaterThan', 0)
    })

    it('FTC 716 - Verificar que al hacer click en "Notes" nos redirija al apartado correcto', () => {
        home_elements.notes_tab.click({ force: true }, {timeout: 2000})
        cy.task('log','Verificando que la URL contenga "notes"')
        cy.url().should('include', 'notes')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "NOTES"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'NOTES')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.data_rows4.should('have.length.greaterThan', 0)
    })

    it('FTC 717 - Verificar que al hacer click en "Invoices" nos redirija al apartado correcto', () => {
        home_elements.invoices_tab.click({ force: true }, {timeout: 2000})
        cy.task('log','Verificando que la URL contenga "invoices"')
        cy.url().should('include', 'invoices')
        cy.task('log','Verificando que el título de la vista de lista sea visible y contenga "INVOICES"')
        home_elements.list_view_title.should('be.visible').and('contain.text', 'INVOICES')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        home_elements.header_row.should('exist')
    })

    it('FTC 718 - Verificar que al hacer click en "Contracts" nos redirija al apartado correcto', () => {
        home_elements.contracts_tab.click({ force: true },{timeout: 2000})
        cy.task('log','Verificando que la URL contenga "contracts"')
        cy.url().should('include', 'contracts')
        home_elements.list_view_title.should('be.visible')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
    })

    it('FTC 719 - Verificar que al hacer click en "Cases" nos redirija al apartado correcto', () => {
        home_elements.cases_tab.click({ force: true }, {timeout: 2000})
        cy.task('log','Verificando que la URL contenga "cases"')
        cy.url().should('include', 'cases')
        home_elements.list_view_title.should('be.visible')
        home_elements.table_header.should('exist')
        home_elements.header_row.should('be.visible')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body.find('tr')
        .should('have.length.greaterThan', 0)
    })

    it('FTC 720 - Verificar que al hacer click en "Targets" nos redirija al apartado correcto', () => {
        home_elements.targets_tab.click({ force: true }, {timeout: 2000})
        cy.task('log','Verificando que la URL contenga "prospect-lists"')
        cy.url().should('include', 'prospect-lists')
        home_elements.list_view_title.should('be.visible')
        home_elements.table_header.should('exist')
        home_elements.table_actions.should('exist')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body2.find('tr')
        .should('have.length.greaterThan', 0)
    })
    it('FTC 721 - Verificar que al hacer click en "Targets - Lists" nos redirija al apartado correcto', () => {
        home_elements.nav_link.click()
        home_elements.targets_tab.click()
        home_elements.list_view_title.should('be.visible')
        home_elements.table_actions.should('be.visible')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body.find('tr')
        .should('have.length.greaterThan', 0)
    })

    it('FTC 722 - Verificar que al hacer click en "Projects" nos redirija al apartado correcto', () => {
        home_elements.nav_link.click()
        home_elements.projects_tab.click()
        home_elements.list_view_title.should('be.visible')
        home_elements.table_actions.should('be.visible')
        home_elements.header_row.should('be.visible')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body.find('tr')
        .should('have.length.greaterThan', 0)
    })

    it('FTC 723 - Verificar que al hacer click en "Events" nos redirija al apartado correcto', () => {
        home_elements.nav_link.click()
        home_elements.events_tab.click()
        home_elements.list_view_title.should('be.visible')
        home_elements.table_actions.should('be.visible')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body.find('tr')
        .should('have.length.greaterThan', 0)
    })

    it('FTC 724 - Verificar que al hacer click en "Reports" nos redirija al apartado correcto', () => {
        home_elements.nav_link.click()
        home_elements.reports_tab.click()
        home_elements.list_view_title.should('be.visible')
        home_elements.table_actions.should('be.visible')
        home_elements.header_row.should('be.visible')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body.find('tr')
        .should('have.length.greaterThan', 0)
    })

    it('FTC 725 - Verificar que al hacer click en "Products" nos redirija al apartado correcto', () => {
        home_elements.nav_link.click()
        home_elements.products_tab.click()
        home_elements.list_view_title.should('be.visible')
        home_elements.header_row.should('be.visible')
        cy.task('log','Verificando que la tabla no este vacia')
        home_elements.table_body.find('tr')
        .should('have.length.greaterThan', 0)
    })

    it.skip('FTC 726 - Verificar que al presionar el boton "More" e ingresar al formulario "Schedule Meeting" desde la barra de navegacion, el menu desplegado desaparece', () => {
    cy.task('log','Buscando y presionando el boton "More"')
    home_elements.more_button.click()
    cy.task('log','Verificando que el menu se despliegue')
    home_elements.more_menu.should('be.visible')
    cy.task('log','Cambiando a la ruta del formulario de agenda de reunion')
    calendar_elements.schedule_meeting_page().click({force: true})
    cy.task('log','Verificando que la URL contenga "accounts"')
    cy.url().should('include', '/#/meetings/edit?return_module=Meetings&return_action=DetailView')
    cy.task('log','Verificando que el menu desplegado haya desaparecido')
    home_elements.more_menu.should('not.be.visible')
})

    it.skip('FTC 727 - Verificar que al presionar el boton "+" de la barra de navegacion y seleccionar "Create Opportunity", el menu desplegado desaparece', () => {
    home_elements.plus_button.click()
    home_elements.plus_menu.should('be.visible')
    home_elements.create_opportunity_button.click()
    cy.task('log','Verificando que la URL sea corecta')
    cy.url().should('include', '/#/opportunities/edit?return_module=Opportunities&return_action=DetailView')
    home_elements.plus_menu.should('not.be.visible')

})
})