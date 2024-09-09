
import * as hooks from '../../support/hooks'
import { AccountElements } from "../../support/pages_objects/account_elements";
const account_element = new AccountElements()

describe('Pruebas Accounts',() => {
  hooks.setup_before_each()
  

it('TC 501 - Verificar que al aplicar un filtro con el campo Name nos devuelve una lista de cuentas de acuerdo al filtro', { tags: ['smoketest'] }, () => {
    
    account_element.account_submenu_view.click({ force: true })
    
    cy.task('log','Cambio  a la pestaña accounts')
    cy.url().should('include','#/accounts/index?return_module=Accounts&return_action=DetailView')

    account_element.account_title_page.should('be.visible')

    account_element.account_button_filter_general.click()

    cy.url().should('include','#/accounts/index?return_module=Accounts&return_action=DetailView')
    
    cy.fixture('account_data.json').then((account_data) => {
      account_element.account_name_filter.should('be.visible').click().type(account_data.account_filter)
    })

    cy.task('log','Campo Name llenado')

    account_element.account_button_search_filter
      .click()
      .wait(2000)
      account_element.account_column_name
      .each(($el) => {
        const text = $el.text().trim();
        expect(text.startsWith('M') || text.startsWith('m')).to.be.true
       })
    
    cy.task('log','Filtro aplicado y verificado')
  
})
   

it('TC 502 - Verificar que al no llenar el campo Name en formulario de creación no me permita crear la cuenta', { tags: ['smoketest'] }, () => {
 
    account_element.account_submenu_create.click({ force: true })
    cy.task('log','Cambio al formulario de creacion de Cuenta ')

    cy.url().should('include','/#/accounts/edit?return_module=Accounts&return_action=DetailView')

    account_element.account_text_page_create.and('be.visible')

    cy.fixture('account_data.json').then((account_data) => {
      
      account_element.account_website_form_create.should('be.visible').click().type(account_data.account_website)
      account_element.account_button_plus_form_create.click(({ force: true }))
      cy.wait(2000)
      account_element.account_email_fomr_create.should('be.visible').click().type(account_data.account_email)
    })
    cy.task('log','Campos llenados email y website')

    account_element.account_button_save_form_create
      .should('be.visible')
      .click()

    account_element.account_message_alert_form_create
      .should('contain','There are validation errors, unable to perform action.')
      .and('be.visible')
    
    cy.task('log','Mensaje de error verificado')
   
  }) 

  it('FTC 503 - Verificar que al presionar “View Account” me muestra una lista de la cuentas.', { tags: ['functional'] }, () => {
    
    cy.task('log','Cambio  a la pestaña accounts')
    account_element.account_submenu
      .should('be.visible')
      .click()
    cy.url().should('include','#/accounts')

    account_element.account_title_page
      .should('be.visible')
     
    account_element.account_column_name.should('not.be.empty')
    cy.task('log','Lista de cuentas verificada')
    
  }) 

})


