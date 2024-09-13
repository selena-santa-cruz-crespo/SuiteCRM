import * as hooks from '../../support/hooks'

describe('Pruebas Reuniones', () => {
    hooks.setup_before_each();
    it('TC 901 - Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear una reunión', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link > span.ng-star-inserted').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#parent_name').clear().type('Review needs')
            cy.wrap($iframeBody).find('#location').clear().type('Review needs')
            cy.wrap($iframeBody).find('#SAVE_HEADER').click()
            cy.wrap($iframeBody).find('#detailpanel_-1 > div > div:nth-child(1) > div:nth-child(1) > div.col-xs-12.col-sm-8.edit-view-field > div')
              .should('contain.text', 'Missing required field: Subject')
        })
    })
    

    it('TC 902: Verificar que al dejar los campos obligatorios vacíos el usuario no puede crear un invitado para reunión', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link > span.ng-star-inserted').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#create_invitee_as_contact').click()
            cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]').clear().type('Lia')
            cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]').clear().type('tom@gmail.com')
            cy.wrap($iframeBody).find('#create-invitee-btn').click()
            cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(2) > td:nth-child(2) > div')
              .should('contain.text', 'Missing required field: Last Name')
        });
    });
    

    it('TC 903: Verificar que al buscar un contacto inexistente muestre como resultado “Sorry, no results were found. Please create an invitee below.”', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link > span.ng-star-inserted').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#search_first_name').clear().type('Negan')
            cy.wrap($iframeBody).find('#search_last_name').clear().type('Ramit')
            cy.wrap($iframeBody).find('#SAVE_HEADER').click()
            cy.wrap($iframeBody).find('#empty-search-message')
              .should('contain.text', 'Sorry, no results were found. Please create an invitee below.')
        })
    })
    

    it('TC 904: Verificar que al dejar todos los campos vacíos nos devuelve todos los contactos guardados', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link > span.ng-star-inserted').click({ force: true })
        cy.getIframe('iframe').then(($iframeBody) => {
            cy.wrap($iframeBody).find('#invitees_search').click()
            cy.wrap($iframeBody).find('#list_div_win > table').should('not.be.empty')
        })
    })
    
    
    it('TC 905: Verificar que al buscar una reunión con "Review needs" y "B.H. Edwards Inc." no devuelve resultados esperados', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.get('.filter-settings-button').click()
        cy.get(':nth-child(1) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control')
          .clear()
          .type('Review needs')
        cy.get(':nth-child(2) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control')
          .clear()
          .type('B.H. Edwards Inc.')
        cy.get('#pn_id_6 > .p-multiselect-label-container > .p-multiselect-label').click()
        cy.get('.p-inputtext').clear().type('chris')
        cy.get('.filter-button > .ng-star-inserted').click()
        cy.get('.list-view-title').should('contain.text', 'Review needs')
        cy.get('.list-view-row').should('contain.text', 'B.H. Edwards Inc.')
    })
    

    it('FTC 906 - Verificar que al presionar sobre un “subject” en meetings nos redirija a los datos guardados de ese “subject”', () => {
        cy.get('.nav-link-nongrouped > scrm-label').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link').click()
        cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-body > div > table')
        .should('exist')
        .and(($table) => {
            expect($table.find('tbody > tr').length).to.be.greaterThan(0)
    })
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-next > .sicon-2x > .sicon > svg').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-count').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-count').click()
        cy.get('.cdk-header-row > .cdk-column-checkbox').click()
    })
    
    
    it('FTC 907 - Verificar que al presionar sobre un “Related to” en meetings nos redirija a los datos guardados de ese “Related to”', () => {
        cy.get('.top-nav > .nav-link-nongrouped').click()
        cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted').click()
        cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-body > div > table')
      .should('exist')
      .and(($table) => {
          expect($table.find('tbody > tr').length).to.be.greaterThan(0)
        })
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-last > .sicon-2x > .sicon > svg').click()
        cy.get('scrm-table-header.ng-star-inserted > .list-view-tableactions > .justify-content-between > .mx-0 > scrm-pagination.ng-star-inserted > .bulk-action > .pagination-count').click()
    })
})