export class AccountElements{
    get account_submenu_view(){
        return cy.get('.dropdown-menu.submenu').contains('View Accounts')
    }
    get account_title_page(){
        return cy.get('.list-view-title').contains('ACCOUNTS')
    }
    get account_button_filter_general(){
        return cy.get('.filter-settings-button').should('contain.text', 'Filter')
    }
    get account_name_filter(){
        return cy.get('scrm-varchar-filter.ng-star-inserted > .form-control').eq(0)
    }
    get account_button_search_filter(){
        return  cy.get('.filter-button.btn').should('contain.text', 'Search')
    }
    get account_column_name(){
        return cy.get('table.cdk-table tbody tr.cdk-row').should('have.length.greaterThan', 0).and('be.visible').find('.dynamic-field.dynamic-field-mode-list.dynamic-field-name-name.dynamic-field-type-name.ng-star-inserted') 
    }
    get account_submenu_create(){
        return cy.get('.dropdown-menu.submenu').contains('Create Account') 
    }
    get account_text_page_create(){
        return cy.get('a.tab-link.nav-link.active').should('contain.text', 'OVERVIEW')
    }
    get account_website_form_create(){
        return cy.get('scrm-varchar-edit.ng-star-inserted > .form-control').eq(2) 
    }
    get account_email_fomr_create(){
        return cy.get('scrm-varchar-edit.ng-star-inserted > .form-control').eq(4)
    }
    get account_button_plus_form_create(){
        return cy.get('.btn.btn-sm').contains('Plus Icon')
    }
    get account_button_save_form_create(){
        return  cy.get('button.button-group-button.settings-button').contains('Save')
    }
    get account_message_alert_form_create(){
        return cy.get('.alert')
    }
    get account_submenu(){
        return cy.get('.ng-star-inserted > .top-nav-link').contains('Accounts')
    }

}