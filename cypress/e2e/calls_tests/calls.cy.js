import * as hooks from '../../support/hooks'

describe('Pruebas Reuniones', () => {
    hooks.setup_before_each();
    it('TC 801 - Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear una llamada', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#parent_name').clear().type('Review needs')
            cy.wrap($iframeBody).find('#SAVE_HEADER').click()
            cy.wrap($iframeBody).find('#detailpanel_-1 > div > div:nth-child(1) > div:nth-child(1) > div.col-xs-12.col-sm-8.edit-view-field > div')
              .should('contain.text', 'Missing required field: Subject')
        })
    })
it('TC 802 - Verificar que al llenar todos los campos obligatorios y hacer click en cancelar nos redirija a la lista de llamadas', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#parent_name').clear().type('Review needs')
            cy.wrap($iframeBody).find('#description').type('prueba llamadas')
            cy.wrap($iframeBody).find('#CANCEL').click()
        });
    });
 it('TC 803: Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear un invitado', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#create_invitee_as_contact').click()
            cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]').clear().type('Lia')
            cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]').clear().type('tom@gmail.com')
            cy.wrap($iframeBody).find('#create-invitee-btn').click()
            cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(2) > td:nth-child(2) > div')
              .should('contain.text', 'Missing required field: Last Name')
            })
    })
    

    it('TC 804: Verificar que al buscar un contacto inexistente muestre como resultado “Sorry, no results were found. Please create an invitee below.”', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#search_first_name').clear().type('Negan')
            cy.wrap($iframeBody).find('#search_last_name').clear().type('Ramit')
            cy.wrap($iframeBody).find('#SAVE_HEADER').click()
            cy.wrap($iframeBody).find('#empty-search-message')
              .should('contain.text', 'Sorry, no results were found. Please create an invitee below.')
    })
    
    
})
    

it.skip('TC 805: Verificar que al buscar una llamada con los datos correctos devuelve solo esa llamada', () => {
    cy.get('.nav-link-nongrouped > scrm-label').click();
    cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
    cy.get('.filter-settings-button').click()
    cy.get(':nth-child(1) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control').clear().type('Left a message')
    cy.get(':nth-child(2) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control').clear().type('JCB Banking Inc')
    cy.get('#pn_id_9 > .p-multiselect-label-container > .p-multiselect-label').click();
    cy.get('.p-inputtext').clear().type('chris')
    cy.get('.filter-button').click()
    cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-body > div > div > p')
      .should('exist')
      .and(($tableBody) => {
          const rows = $tableBody.find('table > tbody > tr')
          expect(rows.length).to.be.greaterThan(0)
      });
});

 it('FTC 806 - Verificar que al presionar sobre un “>” avance a los siguientes 20 llamadas', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-next > .sicon-2x > .sicon > svg').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action').click()
    })
it('FTC 807 - Verificar que al presionar sobre un “>>” avance al final de las llamadas', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-last > .sicon-2x > .sicon > svg').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action').click()
        cy.get('.cdk-header-row > .cdk-column-checkbox').click()
    })
})
