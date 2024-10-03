import { OpportunityElements } from "../support/pages_objects/opportunity_elements";
const opportunity_element = new OpportunityElements()
export function search_account_name_element(selector, text, max_pages) {
    let current_page = 1
  
    function search() {
      cy.get('body').then(($body) => {
        if ($body.find(selector).length > 0 && $body.find(selector).text().includes(text)) {
          cy.get(selector).contains(text).then($el => {
            cy.wrap($el).contains(text).should('be.visible')
            cy.get(selector).contains(text).click({ force: true })
            cy.task('log','Elemento encontrado')
          })
        } else if (current_page < max_pages) {
          opportunity_element.opportunity_button_next_account_name.click()
          current_page++
          search()
        } else {
          cy.task('log','Elemento no encontrado')
        }
      })
    }
  
    search()
  }
