import * as hooks from '../../support/hooks'
import { search_account_name_element } from '../../support/utils'
import { OpportunityElements } from "../../support/pages_objects/opportunity_elements";
const opportunity_element = new OpportunityElements()

describe('Pruebas Opportunities',() => {
    hooks.setup_before_each()

it('TC 601 - Verificar que al borrar el filtro aplicado se listen todas las oportunidades creadas', { tags: ['smoketest'] }, () => {
    opportunity_element.opportunity_submenu_view.click({ force: true })
    cy.url().should('include','#/opportunities')
    cy.task('log','El la pestaña Opportunity')
    opportunity_element.opportunity_tittle_page.should('be.visible')
    opportunity_element.opportunity_button_filter_general.click()
    cy.url().should('include','#/opportunities')
    opportunity_element.opportunity_button_search_account_name.click({ force: true })
    .wait(1000)
    search_account_name_element('a.clickable.field-link > scrm-varchar-detail.ng-star-inserted','Trait Institute Inc',5)
    cy.task('log','Filtro Name Account seleccionado')
    opportunity_element.opportunity_button_search_filter
    .should('contain.text', 'Search')
    .click()
    .wait(1000)
    opportunity_element.opportunity_column_account_name
    .each(($el) => {
        const text = $el.text().trim();
        expect(text).to.include('Trait Institute Inc');
    })
    cy.task('log','Filtro verificado')
    cy.url().should('include', '/#/opportunities/index?return_module=Opportunities&return_action=DetailView')
    opportunity_element.opportunity_button_filter_general.click()
    cy.url().should('include', '/#/opportunities/index?return_module=Opportunities&return_action=DetailView')
    opportunity_element.opportunity_button_clear_filter.click()
    cy.task('log','Filtro limpiado')
    opportunity_element.opportunity_button_search_filter
    .should('contain.text', 'Search')
    .click()
    .wait(1000)
    opportunity_element.opportunity_column_account_name
    .should('not.be.empty')
    cy.task('log','Lista completa verificada')
    cy.url().should('include', '/#/opportunities/index?return_module=Opportunities&return_action=DetailView')
})

it('TC  602 - Verificar que al no llenar los campos obligatorios en formulario de creación no permita crear la oportunidad', { tags: ['smoketest'] }, () => {
    opportunity_element.opportunity_submenu_create.click({ force: true })
    cy.task('log','El la pestaña Opportunity')
    cy.url().should('include','/#/opportunities/edit?return_module=Opportunities&return_action=DetailView')
    opportunity_element.opportunity_text_form_create.should('be.visible')
    opportunity_element.opportunity_amount_select_form_create.select('USD')
    cy.task('log','Amount en USD seleccionado')
    cy.fixture('opportunity_data.json').then((opportunity_data) => {
        opportunity_element.opportunity_amount_form_create.should('be.visible').click().type(opportunity_data.opportunity_amount)
        opportunity_element.opportunity_probability_form_create.should('be.visible').click().type(opportunity_data.opportunity_probability)
        opportunity_element.opportunity_next_step_form_create.should('be.visible').click().type(opportunity_data.opportunity_next_step)
    })
    cy.task('log','Campos llenados')
    opportunity_element.opportunity_button_save_create.should('be.visible').click()
    opportunity_element.opportunity_create_message_alert
    .should('contain','There are validation errors, unable to perform action.')
    .and('be.visible') 
    cy.task('log','Mensaje de error verificado')
})

it('FTC 604 - Verificar que al presionar el icono de mensaje se muestre un formulario para mandar un correo electrónico', { tags: ['functional'] }, () => {
    opportunity_element.opportunity_option_submenu.should('be.visible').click()
    cy.url().should('include','#/opportunities')
    cy.task('log','El la pestaña Opportunity')
    opportunity_element.opportunity_tittle_page.should('be.visible')
    opportunity_element.opportunity_column_account_name.should('not.be.empty')
    cy.task('log','Listado de Opportunity')
    opportunity_element.opportunity_button_filter_general.click()
    cy.fixture('opportunity_data.json').then((opportunity_data) => {
        opportunity_element.opportunity_name_form_search.should('be.visible').click().type(opportunity_data.opportunity_name)
    })
    opportunity_element.opportunity_button_search.click()
    .wait(1000)
    opportunity_element.opportunity_column_account_name
    .each(($el) => {
        const text = $el.text().trim();
        expect(text).to.include('Trait Institute Inc');
    })
    opportunity_element.opportunity_button_compose_email.click() 
    cy.task('log','Formulario de email desplegado')
    cy.url().should('include','/#/emails/compose?return_module=Opportunities&return_action=index')
})
})