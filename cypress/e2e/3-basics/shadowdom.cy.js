/// <reference types="cypress" />

describe('verify the shadow element', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('firstway to get element in shadowdom', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.wait(20000)
        cy.get('#pizza',{includeShadowDom:true}).should('be.visible').type("hello")
    })


})