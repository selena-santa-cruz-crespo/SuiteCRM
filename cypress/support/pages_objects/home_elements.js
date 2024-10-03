export class HomeElements{
    get more_button(){
        return cy.get('.ng-star-inserted > ul > li > a').eq(1)
    }
    get more_menu(){
        return cy.get('.dropdown-menu.more-menu.submenu.show')
    }
    get plus_button(){
        return cy.get('.action-btn-icon').eq(0)
    }
    get plus_menu(){
        return cy.get('.dropdown-menu.dropdown-menu-left.border')
    }
    get create_opportunity_button(){
        return cy.get('.new-list-item-label.ng-tns-c2669675920-2').contains('Create Opportunity')
    }
    get search_input() {
        return cy.get('.form-control')
    }
    get no_results_message() {
        return cy.getIframe('iframe').find('#pagecontent > p.error')
    }
    get search_results_table() {
        return cy.getIframe('iframe').find('#pagecontent > div:nth-child(7) > table')
    }
    get employees_link() {
        return cy.get('[href="#/employees/index"]').contains('Employees')
    }
    get unauthorized_message() {
        return cy.get('body > app-root > div > scrm-message-ui > div > div > div')
    }
    get actions_tab() {
        return cy.getIframe('iframe').find('#tab-actions > a > span')
    }
    get add_dashlets_button() {
        return cy.getIframe('iframe').find('#tab-actions > ul > li:nth-child(1) > input')
    }
    get modal_add_dashlet() {
        return cy.getIframe('iframe').find('#pagecontent > div.modal.fade.modal-add-dashlet.in')
    }
    get modal_close_button() {
        return cy.getIframe('iframe').find('#pagecontent > div.modal.fade.modal-add-dashlet.in > div > div > div.modal-footer > button')
    }

    get accounts_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Accounts')
    }
    
    get contacts_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Contacts')
    }
    
    get opportunities_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Opportunities')
    }
    
    get quotes_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Quotes')
    }
    
    get calendar_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Calendar')
    }
    
    get documents_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Documents')
    }
    
    get emails_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Email - Template...')
    }
    


    get table_header() {
        return cy.get('scrm-table-header.ng-star-inserted')
    }

    get table_actions() {
        return cy.get('.list-view-tableactions')
    }

    get header_row() {
        return cy.get('.cdk-header-row')
    }

    get data_row() {
        return cy.get('.cdk-row')
    }

    get data_rows() {
        return cy.get('.cdk-row')
    }

    get header_checkbox() {
        return cy.get('.cdk-header-row > .cdk-column-checkbox')
    }



    get campaigns_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Campaigns')
    }
    
    get calls_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Calls')
    }
    
    get calls_menu_item() {
        return cy.get('.top-nav .dropdown-menu').contains('Calls')
    }
    
    get meetings_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Meetings')
    }
    
    get tasks_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Tasks')
    }
    
    get tasks_menu_item() {
        return cy.get('.top-nav .dropdown-menu').contains('Tasks')
    }
    
    get notes_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Notes')
    }
    
    get invoices_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Invoices')
    }
    

    get contracts_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Contracts')

    }

    get cases_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Cases') 
    }

    get targets_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Targets') 
    }

    get nav_link() {
        return cy.get('.nav-link-nongrouped > scrm-label')
    }

    get targets_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Targets - Lists')
    }

    get projects_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Projects')
    }

    get events_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Events')
    }

    get reports_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Reports')
    }

    get products_tab() {
        return cy.get('.top-nav .dropdown-menu').contains('Products')
    }

    get list_view_title() {
        return cy.get('.list-view-title')
    }

    get table_actions() {
        return cy.get('scrm-table-header .list-view-tableactions')
    }

    get table_body() {
        return cy.get('scrm-table-body')
    }

    get header_row() {
        return cy.get('.cdk-header-row .cdk-column-name')
    }



    get list_view_title() {
        return cy.get('.list-view-title')
    }

    get table_header() {
        return cy.get('scrm-table-header.ng-star-inserted')
    }

    get table_actions() {
        return cy.get('.list-view-tableactions')
    }

    get table_body() {
        return cy.get('scrm-table-body')
    } 
    get table_body2() {
        return cy.get('scrm-table-body')
    } 
    get header_row() {
        return cy.get('.cdk-header-row')
    }

    get data_rows2() {
        return cy.get('.cdk-row')
    }

    get data_rows3() {
        return cy.get('.cdk-row')
    }

    get data_rows4() {
        return cy.get('.cdk-row')
    }

}