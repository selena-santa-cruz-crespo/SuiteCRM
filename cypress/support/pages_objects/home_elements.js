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
}