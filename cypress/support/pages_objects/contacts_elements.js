export class ContactsElements {
    verifyHomePageUrl() {
        cy.url().should('include', '/#/home');
    }
    verifyContactFormPage(){
        cy.url().should('include','/#/contacts/edit?return_module=Contacts&return_action=DetailView')
    }
    get title_contact () {
        return cy.get('.list-view-title')
    }
    get contact_page() {
        return cy.get('a.tab-link.nav-link.active')
    }
    get contact_table(){
        return cy.get('.cdk-table.list-view-table.striped-table.table')
    }
    get pagination_contact () {
        return cy.get('.pagination-count')
    }
    get pagination_button () {
        return cy.get('.pagination-button.pagination-next.ng-star-inserted')
    }
    get pagination_full_button () {
        return cy.get('button[aria-label="Next page"]')
    }
    get order_button () {
        return cy.get('.cdk-column-name > scrm-sort-button.ng-star-inserted > .btn')
    }
    get name_column () {
        return cy.get('td.cdk-cell.cdk-column-name.column-name.column-type-name.ng-star-inserted > scrm-field > scrm-dynamic-field > a > scrm-varchar-detail')
    }
    get createContactButton() {
        return cy.get('.sub-nav-link').contains('Create Contact')
    }
    get name_contact() {
        return cy.get('scrm-varchar-edit.ng-star-inserted').first()
    }
    get phone_contact() {
        return cy.get('.form-control').eq(3)
    }
    get mobile_contact() {
        return cy.get('.form-control').eq(4)
    }
    get jobTitle_contact() {
        return cy.get('.form-control').eq(5)
    }
    get department_contact() {
        return cy.get('.form-control').eq(6)
    }
    get fax_contact() {
        return cy.get('.form-control').eq(7)
    }
    get address_contact() {
        return cy.get('.form-control').eq(8)
    }
    get postal_contact() {
        return cy.get('.form-control').eq(9)
    }
    get city_contact() {
        return cy.get('.form-control').eq(10)
    }
    get state_contact() {
        return cy.get('.form-control').eq(11)
    }
    get country_contact() {
        return cy.get('.form-control').eq(12)
    }
    get description_contact() {
        return cy.get('.form-control').last()
    }
    get save_contact_button() {
        return cy.get('.ng-star-inserted').contains('Save')
    }
    get create_contact_error() {
        return cy.get('.dynamic-label').last()
    }
    get contact_label() {
        return cy.get('.dynamic-label')
    }
    get filter() {
        return cy.get('.filter-settings-button.btn.btn-sm.settings-button')
    }
    get filter_placeholder() {
        return cy.get('div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > scrm-field > scrm-dynamic-field > scrm-varchar-filter > input')
    }
    get alert() {
        return cy.get('.alert-dismissible').contains('There are validation errors, unable to perform action.')
    }
}