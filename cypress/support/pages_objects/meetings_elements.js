// meetings_elements.js
export class MeetingsElements {

    menuMeetings() {
        return cy.get('.nav-link-nongrouped > scrm-label')
    }

    submenuMeetings() {
        return cy.get(':nth-child(5) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .nav-link')
    }

    submenuCreateMeeting() {
        return cy.get('.active > .ng-tns-c3520175481-2 > scrm-base-menu-item.ng-star-inserted > .menu-item-wrapper > .dropdown-menu > :nth-child(1) > scrm-menu-item-link > scrm-base-menu-item-link.ng-star-inserted > .sub-nav-link > span.ng-star-inserted')
    }

    setIframe() {
        return cy.getIframe('iframe');
    }

    parentNameField() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#parent_name'))
    }

    locationField() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#location'))
    }

    saveButton() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#SAVE_HEADER'))
    }

    errorMessage() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#detailpanel_-1 > div > div:nth-child(1) > div:nth-child(1) > div.col-xs-12.col-sm-8.edit-view-field > div'))
    }

    createInviteeAsContact() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#create_invitee_as_contact'))
    }

    inviteeFirstNameField() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]'))
    }

    inviteeLastNameError() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(2) > td:nth-child(2) > div'))
    }

    searchFirstName() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#search_first_name'))
    }

    searchLastName() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#search_last_name'))
    }
    inviteeEmailField(){
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#createInviteeForm > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]'))
    }

    createInviteeButton(){
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#create-invitee-btn'))
    }
    emptySearchMessage() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#empty-search-message'))
    }

    inviteesSearch() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#invitees_search'))
    }

    listDiv() {
        return this.setIframe().then($iframeBody => cy.wrap($iframeBody).find('#list_div_win > table'))
    }
    filterSettingsButton() {
        return cy.get('.filter-settings-button')
    }

    firstFilterInput() {
        return cy.get(':nth-child(1) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control')
    }

    secondFilterInput() {
        return cy.get(':nth-child(2) > .d-flex > :nth-child(2) > .field > .dynamic-field > scrm-varchar-filter.ng-star-inserted > .form-control')
    }

    multiSelectDropdown() {
        return cy.get('#pn_id_6 > .p-multiselect-label-container > .p-multiselect-label')
    }

    multiSelectInput() {
        return cy.get('.p-inputtext')
    }

    filterButton() {
        return cy.get('.filter-button > .ng-star-inserted')
    }

    listViewTitle() {
        return cy.get('.list-view-title')
    }

    listViewRow() {
        return cy.get('.list-view-row')
    }

    meetingsTable() {
        return cy.get('body > app-root > div > scrm-list > div > scrm-list-container > div > div > div > scrm-table > div > scrm-table-body > div > table')
    }

    verifyMeetingsTableHasRows() {
        this.meetingsTable()
            .should('exist')
            .and(($table) => {
                expect($table.find('tbody > tr').length).to.be.greaterThan(0)
            });
    }
}
