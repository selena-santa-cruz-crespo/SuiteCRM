import * as hooks from '../../support/hooks'
import { CalendarElements } from '../../support/pages_objects/calendar_elements'
import { HomeElements } from "../../support/pages_objects/home_elements"

const home_elements = new HomeElements()
const calendar_elements = new CalendarElements()

describe('Pruebas Home', () => {
    hooks.setup_before_each()

    it('TC 701 - Verificar que al buscar un nombre inexistente, el sistema muestre el mensaje "No results matching your search criteria. Try broadening your search."', () => {
        cy.get('.form-control').type('Nivea{enter}')
        cy.url().should('include', '/search?query_string=Nivea')
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#pagecontent > div.moduleTitle > h2').should('be.visible')
            cy.wrap($iframeBody).find('#pagecontent > p.error')
              .should('be.visible')
              .and('contain.text', 'No results matching your search criteria. Try broadening your search.')
        })
    })

    it('TC 702 - Verificar que al buscar un nombre que existe, el sistema muestre todas las tablas donde existe el nombre ', () => {
        cy.get('.form-control').click()
        cy.get('.form-control').type('AtoZ{enter}')
        cy.url().should('include', '/search?query_string=AtoZ')
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#pagecontent > div.moduleTitle > h2').should('be.visible')
            cy.wrap($iframeBody).find('#pagecontent > ul').should('be.visible')
            cy.wrap($iframeBody).find('#pagecontent > div:nth-child(7) > table').each(($table) => {
                cy.wrap($table).find('tbody > tr').should('have.length.greaterThan', 0)
                cy.wrap($table).find('tbody > tr').each(($row) => {
                    cy.wrap($row).find('td:nth-child(2) > a > span')
                      .should('be.visible')
                })
            })
        })
        
    })
    it('TC 703 - Verificar que al intentar acceder employees desde el user icon sin permisos, el sistema muestre un “You are not authorized to view this page. Please contact your system administrator.”. ', () => {
        cy.get('[href="#/employees/index"]')
        .contains('Employees').click({ force: true })
        cy.get('body > app-root > div > scrm-message-ui > div > div > div')
        .should('be.visible')
        .and('contain.text', 'You are not authorized to view this page. Redirecting to Home Page...')
    })
    it('FTC 704 - Verificar que se abra y cierre correctamente el modal de ACCIONS', () => {
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#tab-actions > a > span').click({ force: true })
            cy.wrap($iframeBody).find('#tab-actions > ul > li:nth-child(1) > input')
            .should('have.attr', 'value', 'Add Dashlets')
            .click();
            cy.wait(1000);
            cy.wrap($iframeBody).find('#pagecontent > div.modal.fade.modal-add-dashlet.in').should('be.visible');
            cy.wrap($iframeBody).find('#pagecontent > div.modal.fade.modal-add-dashlet.in > div > div > div.modal-footer > button', { timeout: 20000 })
            cy.wrap($iframeBody).find('#pagecontent > div.modal.fade.modal-add-dashlet.in > div > div > div.modal-footer > button').click({ force: true })
        })
    })
    
    
    
    it('FTC 705 - Verificar que al hacer click en "Accounts" nos redirija al apartado correcto', () => {
        cy.get(':nth-child(1) > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > [data-target=".navbar-collapse"] > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .top-nav-link > .ng-star-inserted')
            .click();
        cy.url().should('include', 'accounts');
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'ACCOUNTS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
        cy.get('.cdk-header-row > .cdk-column-checkbox').click()
    })
    
    it('FTC 706 - Verificar que al hacer click en "Contacts" nos redirija al apartado correcto', () => {
        cy.get(':nth-child(2) > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > [data-target=".navbar-collapse"] > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .top-nav-link')
            .click();
        cy.url().should('include', 'contacts')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'CONTACTS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
        cy.get('.cdk-header-row > .cdk-column-checkbox').click()
    })
    
    it('FTC 707 - Verificar que al hacer click en "Opportunities" nos redirija al apartado correcto', () => {
        cy.get(':nth-child(3) > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > [data-target=".navbar-collapse"] > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .top-nav-link')
            .click()
        cy.url().should('include', 'opportunities')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'OPPORTUNITIES')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)   
    })
    
    it('FTC 708 - Verificar que al hacer click en "Quotes" nos redirija al apartado correcto', () => {
        cy.get(':nth-child(5) > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > [data-target=".navbar-collapse"] > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .top-nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'quotes')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'QUOTES')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
    })
    
    it('FTC 709 - Verificar que al hacer click en "Calendar" nos redirija al apartado correcto', () => {
        cy.get(':nth-child(6) > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > [data-target=".navbar-collapse"] > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .top-nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'calendar')
    })
    
    it('FTC 710 - Verificar que al hacer click en "Documents" nos redirija al apartado correcto', () => {
        cy.get(':nth-child(7) > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > [data-target=".navbar-collapse"] > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .top-nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'documents')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'DOCUMENTS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
    })
    
    it('FTC 711 - Verificar que al hacer click en "Emails" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(23) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.url().should('include', 'email-templates')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'EMAIL - TEMPLATES')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
    })
    
    it('FTC 712 - Verificar que al hacer click en "Campaigns" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(3) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'campaigns')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'CAMPAIGNS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
    })
    
    it('FTC 713 - Verificar que al hacer click en "Calls" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'calls')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'CALLS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
    })
    
    it('FTC 714 - Verificar que al hacer click en "Meetings" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link')
            .click()
        cy.url().should('include', 'meetings')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'MEETINGS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
    })
    

    it('FTC 715 - Verificar que al hacer click en "Tasks" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(6) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link')
            .click()
        cy.url().should('include', 'tasks')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'TASKS')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
    })
    

    it('FTC 716 - Verificar que al hacer click en "Notes" nos redirija al apartado correcto', () => {
        cy.get('.top-nav > .nav-link-nongrouped').click()
        cy.get(':nth-child(7) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'notes')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'NOTES')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
        cy.get('.cdk-row').should('have.length.greaterThan', 0)
    })
    
    it('FTC 717 - Verificar que al hacer click en "Invoices" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(8) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted')
            .click()
        cy.url().should('include', 'invoices')
        cy.get('.list-view-title').should('be.visible').and('contain.text', 'INVOICES')
        cy.get('scrm-table-header.ng-star-inserted').should('exist')
        cy.get('.list-view-tableactions').should('exist')
        cy.get('.cdk-header-row').should('exist')
    })
    

    it('FTC 718 - Verificar que al hacer click en "Contracts" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Contracts').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
    })
    
    it('FTC 719 - Verificar que al hacer click en "Cases" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Cases').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
        cy.get('.cdk-header-row .cdk-column-name').should('be.visible');
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    it('FTC 720 - Verificar que al hacer click en "Targets" nos redirija al apartado correcto', () => {
        cy.get('.top-nav > .nav-link-nongrouped').click()
        cy.get('.top-nav .dropdown-menu').contains('Targets').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    it('FTC 721 - Verificar que al hacer click en "Targets - Lists" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Targets - Lists').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    it('FTC 722 - Verificar que al hacer click en "Projects" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Projects').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
        cy.get('.cdk-header-row .cdk-column-name').should('be.visible')
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    it('FTC 723 - Verificar que al hacer click en "Events" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Events').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    

    it('FTC 724 - Verificar que al hacer click en "Reports" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Reports').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('scrm-table-header .list-view-tableactions').should('be.visible')
        cy.get('.cdk-column-name').should('be.visible')
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    it('FTC 725 - Verificar que al hacer click en "Products" nos redirija al apartado correcto', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav .dropdown-menu').contains('Products').click()
        cy.get('.list-view-title').should('be.visible')
        cy.get('.cdk-header-row .cdk-column-name').should('be.visible')
        cy.get('.cdk-row .cdk-column-name').should('be.visible')
        cy.get('scrm-table-body').find('tr').should('have.length.greaterThan', 0)
    })
    
    it('FTC 726 - Verificar que al presionar el boton "More" e ingresar al formulario "Schedule Meeting" desde la barra de navegacion, el menu desplegado desaparece', () => {
    cy.task('log','Buscando y presionando el boton "More"')
    home_elements.more_button.click()
    cy.task('log','Verificando que el menu se despliegue')
    home_elements.more_menu.should('be.visible')
    cy.task('log','Cambiando a la ruta del formulario de agenda de reunion')
    calendar_elements.schedule_meeting_page().click({force: true})
    cy.url().should('include', '/#/meetings/edit?return_module=Meetings&return_action=DetailView')
    cy.task('log','Verificando que el menu desplegado haya desaparecido')
    home_elements.more_menu.should('not.be.visible')
})

    it('FTC 727 - Verificar que al presionar el boton "+" de la barra de navegacion y seleccionar "Create Opportunity", el menu desplegado desaparece', () => {
    home_elements.plus_button.click()
    home_elements.plus_menu.should('be.visible')
    home_elements.create_opportunity_button.click()
    cy.url().should('include', '/#/opportunities/edit?return_module=Opportunities&return_action=DetailView')
    home_elements.plus_menu.should('not.be.visible')

})
})