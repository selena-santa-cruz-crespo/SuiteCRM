export class OpportunityElements{
    get opportunity_submenu_view(){
        return cy.get('.dropdown-menu.submenu').contains('View Opportunities')
    }
    get opportunity_tittle_page(){
        return cy.get('.list-view-title').contains('OPPORTUNITIES')
    }
    get opportunity_button_filter_general(){
        return cy.get('.filter-settings-button').should('contain.text', 'Filter')
    }
    get opportunity_button_search_account_name(){
        return cy.get('.btn.btn-sm').contains('Cursor Icon')
    }

    get opportunity_button_search_filter(){
        return cy.get('.filter-button.btn').first()
    }

    get opportunity_column_account_name(){
        return cy.get('table.cdk-table tbody tr.cdk-row')
        .should('have.length.greaterThan', 0) 
        .and('be.visible') 
        .find('.dynamic-field.dynamic-field-mode-list.dynamic-field-name-name.dynamic-field-type-name.ng-star-inserted')
    }
    
    get opportunity_button_clear_filter(){
        return cy.get('.clear-filters-button').should('contain.text', 'Clear')
    }

    get opportunity_button_next_account_name(){
        return cy.get('body > ngb-modal-window > div > div > scrm-record-list-modal > scrm-modal > div > div.m-0.modal-body.small-font > div > div > div > div:nth-child(2) > div > scrm-table > div > scrm-table-header > div > div > div.mx-0.pl-0.table-pagination-wrapper > scrm-pagination > div > button.pagination-button.pagination-next.ng-star-inserted')
    }

    get opportunity_submenu_create(){
        return  cy.get('.dropdown-menu.submenu').contains('Create Opportunity')
    }

    get opportunity_text_form_create(){
        return cy.get('a.tab-link.nav-link.active').should('contain.text', 'BASIC')
    }

    get opportunity_amount_select_form_create(){
        return cy.get('.custom-select.custom-select-sm').eq(0)
    }

    get opportunity_amount_form_create(){
        return cy.get('scrm-varchar-edit.ng-star-inserted > .form-control').eq(1)
    }

    get opportunity_probability_form_create(){
        return cy.get('scrm-varchar-edit.ng-star-inserted > .form-control').eq(2)
    }

    get opportunity_next_step_form_create(){
        return cy.get('scrm-varchar-edit.ng-star-inserted > .form-control').eq(3)
    }

    get opportunity_button_save_create(){
        return cy.get('button.button-group-button.settings-button').contains('Save')
    }

    get opportunity_create_message_alert(){
        return  cy.get('.alert')
    }

    get opportunity_option_submenu(){
        return  cy.get('.ng-star-inserted > .top-nav-link').contains('Opportunities')
    }

    get opportunity_name_form_search(){
        return cy.get('scrm-varchar-filter.ng-star-inserted > .form-control').eq(0)
    }

    get opportunity_button_search(){
        return cy.get('.filter-button.btn').should('contain.text', 'Search')
    }

    get opportunity_button_compose_email(){
        return cy.get('button.button-group-button[title ="Compose Email"]')
    }

}
