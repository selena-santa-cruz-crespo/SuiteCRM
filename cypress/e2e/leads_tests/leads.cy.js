import lead_Data from '../../fixtures/lead_data.json';
import { LeadsElements } from '../../support/pages_objects/leads_elements';
import * as hooks from '../../support/hooks';

const leads_elements = new LeadsElements();

describe('Pruebas Leads ', () => {
hooks.setup_before_each()

it('TC 201 - Verificar que al intentar crear un usuario sin completar los campos obligatorios, se muestre un mensaje de error.', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.createLeadButton.click({ force: true })
    leads_elements.titleSelect.select(lead_Data.title)
    leads_elements.fullNameField.type(lead_Data.fullName).should('be.visible')
    leads_elements.jobTitleField.type(lead_Data.jobTitle).should('be.visible')
    leads_elements.departmentField.type(lead_Data.department).should('be.visible')
    leads_elements.projectField.type(lead_Data.project).should('be.visible')
    leads_elements.primaryAddressStreetField.type(lead_Data.primaryAddress.street).should('be.visible')
    leads_elements.primaryAddressCityField.type(lead_Data.primaryAddress.city).should('be.visible')
    leads_elements.primaryAddressDistrictField.type(lead_Data.primaryAddress.district).should('be.visible')
    leads_elements.primaryAddressCountryField.type(lead_Data.primaryAddress.country).should('be.visible')
    leads_elements.emailField.type(lead_Data.email).should('be.visible')
    leads_elements.phoneNumbersField.type(lead_Data.phoneNumbers).should('be.visible')
    leads_elements.numbersField.type(lead_Data.numbers).should('be.visible')
    leads_elements.faxNumbersField.type(lead_Data.faxNumbers).should('be.visible')
    leads_elements.websiteField.type(lead_Data.website).should('be.visible')
    leads_elements.altAddressStreetField.type(lead_Data.altAddress.street).should('be.visible')
    leads_elements.altAddressCityField.type(lead_Data.altAddress.city).should('be.visible')
    leads_elements.altAddressDistrictField.type(lead_Data.altAddress.district).should('be.visible')
    leads_elements.altAddressCountryField.type(lead_Data.altAddress.country).should('be.visible')
    cy.task('log', 'Intentando guardar el lead sin campos obligatorios completos')
    leads_elements.saveButton.click()
    cy.task('log', 'Verificando que se muestre el mensaje de error de validación')
    leads_elements.validationError.should('be.visible')
    cy.task('log', 'Verificando que se muestre la alerta de error')
    leads_elements.alert.should('be.visible')
});

it('TC 202 - Verificar redirección al intentar crear un usuario y cancelar la creación ', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.createLeadButton.click({ force: true })
    leads_elements.titleSelect.select(lead_Data.title)
    leads_elements.fullNameField.type(lead_Data.fullName).should('be.visible')
    leads_elements.jobTitleField.type(lead_Data.jobTitle).should('be.visible')
    leads_elements.departmentField.type(lead_Data.department).should('be.visible')
    leads_elements.projectField.type(lead_Data.project).should('be.visible')
    leads_elements.primaryAddressStreetField.type(lead_Data.primaryAddress.street).should('be.visible')
    leads_elements.primaryAddressCityField.type(lead_Data.primaryAddress.city).should('be.visible')
    leads_elements.primaryAddressDistrictField.type(lead_Data.primaryAddress.district).should('be.visible')
    leads_elements.primaryAddressCountryField.type(lead_Data.primaryAddress.country).should('be.visible')
    leads_elements.emailField.type(lead_Data.email).should('be.visible')
    leads_elements.phoneNumbersField.type(lead_Data.phoneNumbers).should('be.visible')
    leads_elements.numbersField.type(lead_Data.numbers).should('be.visible')
    leads_elements.faxNumbersField.type(lead_Data.faxNumbers).should('be.visible')
    leads_elements.websiteField.type(lead_Data.website).should('be.visible')
    leads_elements.altAddressStreetField.type(lead_Data.altAddress.street).should('be.visible')
    leads_elements.altAddressCityField.type(lead_Data.altAddress.city).should('be.visible')
    leads_elements.altAddressDistrictField.type(lead_Data.altAddress.district).should('be.visible')
    leads_elements.altAddressCountryField.type(lead_Data.altAddress.country).should('be.visible')
    cy.task('log', 'Cancelando la creación del cliente potencial')
    leads_elements.cancelButton.click().should('be.visible')
    cy.task('log', 'Confirmando la cancelación')
    leads_elements.cancelOkButton.click().should('be.visible')
    cy.task('log', 'Verificando que se redirige correctamente a la lista de leads')
    leads_elements.leadsTitle.click().should('be.visible')
});

it('TC 203 - Verificar que al aplicar un filtro con el nombre de una empresa existente, se muestren los clientes potenciales asociados.', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.viewLeadsButton.click({ force: true })
    leads_elements.filterSettingsButton.click()
    cy.task('log', `Aplicando filtro con el nombre de la empresa existente: ${lead_Data.basic_Filter.validCompanyName}`)
    leads_elements.basicFilterCompanyField.clear().type(lead_Data.basic_Filter.validCompanyName).should('be.visible')
    leads_elements.filterButton.click();
    cy.task('log', 'Verificando que se muestren clientes potenciales asociados')
    leads_elements.leadListRows.should('have.length.greaterThan', 0).and('be.visible')
});

it('TC 204 - Verificar que al aplicar un filtro con el nombre de una empresa inexistente, se muestre "No results found".', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.viewLeadsButton.click({ force: true })
    leads_elements.filterSettingsButton.click({ force: true })
    leads_elements.basicFilterCompanyField.clear().type(lead_Data.basic_Filter.invalidCompanyName).should('be.visible')
    leads_elements.filterButton.click()
    cy.task('log', 'Verificando que se muestre el mensaje "No results found".')
    leads_elements.noResultsFoundText.should('contain.text', 'No results found.').and('be.visible')
    cy.task('log', 'Verificando que no existan filas en la lista de leads')
    leads_elements.leadListRows.should('not.exist')
});

it('TC 205 - Verificar que al intentar crear un filtro rápido sin completar los campos obligatorios, se muestre un mensaje de error.', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.viewLeadsButton.click({ force: true })
    leads_elements.filterSettingsButton.click({ force: true })
    leads_elements.checkmarkCheckbox.click({ force: true })
    leads_elements.sortOrderAscCheckbox.check({ force: true })
    leads_elements.titleSelect.select('0: name')
    leads_elements.sortOrderLabel.click({ force: true })
    leads_elements.groupButton.first().click({ force: true })
    leads_elements.groupButton.eq(1).click({ force: true })
    cy.task('log', 'Verificando que se muestre un mensaje de error en el campo vacio')
    leads_elements.dynamicLabel
    .should('contain.text', 'Missing required field: Name')
    .and('be.visible')
    cy.task('log', 'Verificando que se muestre un mensaje de alerta - There are validation errors, unable to perform action')
    leads_elements.alert
    .should('contain.text', 'There are validation errors, unable to perform action.')
    .and('be.visible')
});

it('FTC: 206  -  Verificar que al hacer click en visualizar la lista de clientes potenciales, se muestran una tabla con los clientes potenciales', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.viewLeadsButton.click({ force: true })
    cy.task('log', 'Verificando que la lista de clientes potenciales no esté vacía')
    leads_elements.leadListRows.should('have.length.greaterThan', 0)
    cy.task('log', 'Verificando que cada fila de la lista tenga un nombre de cliente potencial no vacío')
    leads_elements.leadListRows.each(($row) =>
    cy.wrap($row).find('td.column-name').should('not.be.empty')
    )
    cy.task('log', 'Verificando la URL de la lista de clientes potenciales')
    cy.url().should('eq', 'https://suite8demo.suiteondemand.com/#/leads/index?return_module=Leads&return_action=DetailView')
});

it('FTC: 207 - Verificar que al intentar iniciar una llamada desde la interfaz, se redirige al formulario de creación de llamadas.', () => {
    cy.task('log', 'Verificando URL de la página de inicio')
    leads_elements.verifyHomePageUrl()
    cy.task('log', 'Verificando que la barra de navegación sea visible')
    leads_elements.navbar.should('be.visible')
    leads_elements.viewLeadsButton.click({ force: true })
    cy.task('log', 'Verificando que el icono de teléfono sea visible y hacer click')
    leads_elements.phoneIcon.first().should('be.visible').click()
    cy.task('log', 'Verificando la URL para confirmar la redirección al formulario de creación de llamadas')
});
})