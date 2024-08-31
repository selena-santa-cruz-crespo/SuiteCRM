export class LeadsElements {
    verifyHomePageUrl() {
        cy.url().should('include', '/#/home');
    }
    get navbar() {
        return cy.get('scrm-navbar-ui')
    }
    get createLeadButton() {
        return cy.get('.dropdown-menu.submenu').contains('Create Lead')
    }
    get titleSelect() {
        return cy.get('.custom-select')
    }
    get fullNameField() {
        return cy.get('.dynamic-field-name-full_name .form-control').first()
    }
    get jobTitleField() {
        return cy.get(':nth-child(2) .field-column-bordered .form-control').eq(2)
    }
    get departmentField() {
        return cy.get(':nth-child(3) .field-column-bordered .form-control').eq(3)
    }
    get projectField() {
        return cy.get(':nth-child(4) .field-column-bordered .form-control')
    }
    get primaryAddressStreetField() {
        return cy.get('.dynamic-field-name-primary_address :nth-child(2) .form-control').eq(1)
    }
    get primaryAddressCityField() {
        return cy.get('.dynamic-field-name-primary_address :nth-child(3) .form-control')
    }
    get primaryAddressDistrictField() {
        return cy.get('.dynamic-field-name-primary_address :nth-child(4) .form-control')
    }
    get primaryAddressCountryField() {
        return cy.get('.dynamic-field-name-primary_address :nth-child(5) .form-control')
    }
    get emailField() {
        return cy.get(':nth-child(1) .form-control').eq(1)
    }
    get phoneNumbersField() {
        return cy.get(':nth-child(1) .form-control').eq(3)
    }
    get numbersField() {
        return cy.get(':nth-child(2) .form-control').eq(5)
    }
    get faxNumbersField() {
        return cy.get(':nth-child(3) .form-control').eq(7)
    }
    get websiteField() {
        return cy.get(':nth-child(4) > :nth-child(2) > .d-flex > .flex-grow-1 > .field > .dynamic-field > scrm-varchar-edit.ng-star-inserted > .form-control')
    }
    get altAddressStreetField() {
        return cy.get('.dynamic-field-name-alt_address :nth-child(2) .form-control').eq(1)
    }
    get altAddressCityField() {
        return cy.get('.dynamic-field-name-alt_address :nth-child(3) .form-control')
    }
    get altAddressDistrictField() {
        return cy.get('.dynamic-field-name-alt_address :nth-child(4) .form-control')
    }
    get altAddressCountryField() {
        return cy.get('.dynamic-field-name-alt_address :nth-child(5) .form-control')
    }
    get saveButton() {
        return cy.get(':nth-child(1) > .button-group-button')
    }
    get noResultsFoundText() {
        return cy.get('div.ng-star-inserted > .lead > scrm-label')
    }
    get groupButton() {
        return cy.get('.button-group-button')
    }
    get validationError() {
        return cy.get('.invalid-feedback')
    }
    get alert() {
        return cy.get('.alert')
    }
    get viewLeadsButton() {
        return cy.get('.dropdown-menu.submenu').contains('View Leads')
    }
    get filterSettingsButton() {
        return cy.get('.filter-settings-button')
    }
    get basicFilterCompanyField() {
        return cy.get(':nth-child(3) .form-control').eq(7)
    }
    get filterButton() {
        return cy.get('.filter-button > .ng-star-inserted')
    }
    get leadListRows() {
        return cy.get('table.cdk-table tbody tr.cdk-row')
    }
    get checkmarkCheckbox() {
        return cy.get('.pb-4 .checkmark')
    }
    get sortOrderAscCheckbox() {
        return cy.get('#sortOrder-asc')
    }
    get sortOrderLabel() {
        return cy.get('.sortOrder-asc .form-check-label')
    }
    get dynamicLabel() {
        return cy.get('.dynamic-label')
    }
    get phoneIcon() {
        return cy.get('#line-action-div .button-group-button .sicon')
    }
    get cancelButton(){
        return cy.get(':nth-child(2) > .button-group-button > .ng-star-inserted')
    }
    get cancelOkButton(){
        return cy.get('.btn-main > .ng-star-inserted')
    }
    get leadsTitle(){
        return cy.get('.list-view-title')
    }
}