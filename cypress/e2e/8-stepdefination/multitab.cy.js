///<reference types="cypress" />
describe('verify multitab', function () {
    it('verify href property of multitab', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').should('have.attr', 'href').and('include', 'summerhd24/')
    })

    it('verify multitab using remove attribute', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'summerhd24/')
    })

    it.only('verify multitab without removing target attribute', function () {
        cy.visit('https://www.kesari.in/')
        cy.get('[class="blink-text ng-tns-c36-0"]').then((newTab) => {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'summerhd24/')
        })

        cy.go('back')
        cy.wait(4000)
        cy.go('forward')
    })
})