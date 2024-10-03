export class CallsElements {
    constructor() {
        this.iframeBody = null
    }

    setIframe() {
        return cy.getIframe('body > app-root > div > scrm-classic-view-ui > div > iframe').then((iframe) => {
            this.iframeBody = iframe
        })
    }

    menuCalls() {
        return cy.get('.nav-link-nongrouped > scrm-label')
    }

    submenuCalls() {
        return cy.get('.top-nav > .dropdown-menu > :nth-child(4) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link > .ng-star-inserted')
    }

    submenuCreateCall() {
        return cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link')
    }

    parentNameField() {
        return cy.wrap(this.iframeBody).find('#parent_name')
    }

    description() {
        return cy.wrap(this.iframeBody).find('#description')
    }

    cancel() {
        return cy.wrap(this.iframeBody).find('#CANCEL')
    }

    saveButton() {
        return cy.wrap(this.iframeBody).find('#SAVE_HEADER')
    }

    errorMessage() {
        return cy.wrap(this.iframeBody).find('#detailpanel_-1 > div > div:nth-child(1) > div:nth-child(1) > div.col-xs-12.col-sm-8.edit-view-field > div')
    }


    createInviteeAsContact() {
        return cy.wrap(this.iframeBody).find('#create_invitee_as_contact')
    }

    inviteeFirstNameField() {
        return cy.wrap(this.iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]')
    }

    inviteeEmailField() {
        return cy.wrap(this.iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]')
    }

    inviteeLastNameError() {
        return cy.wrap(this.iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(2) > td:nth-child(2) > div')
    }

    createInviteeButton() {
        return cy.wrap(this.iframeBody).find('#create-invitee-btn')
    }

    searchfirstname() {
        return cy.wrap(this.iframeBody).find('#search_first_name')
    }

    searchlastname() {
        return cy.wrap(this.iframeBody).find('#search_last_name')
    }

    emptySearchMessage() {
        return cy.wrap(this.iframeBody).find('#empty-search-message')
    }
    
    paginationNextButton() {
        return cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-header > div > div > div.mx-0.pl-0.table-pagination-wrapper > scrm-pagination > div > button.pagination-button.pagination-next.ng-star-inserted > scrm-image > svg-icon > svg')
    }

    paginationLastButton() {
        return cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-header > div > div > div.mx-0.pl-0.table-pagination-wrapper > scrm-pagination > div > button.pagination-button.pagination-last.ng-star-inserted > scrm-image > svg-icon > svg')
    }

    filterSettingsButton() {
        return cy.wrap(this.iframeBody).find('.filter-settings-button')
    }

    filterCallSubject() {
        return cy.wrap(this.iframeBody).find(':nth-child(1) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control')
    }
}
