///<reference types="cypress" />
describe('verify multitab and multi window in cypress', function () {
    it('verify href property of multitab-letkode', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').should('have.attr', 'href').and('include', '/courses')
    })

    it('verify href property of multitab-letkode removing target property', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/courses')
    })

    it('verify href property of multitab-letkode without removing target property', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="opentab"]').then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', '/courses')
        })
    })

    it('verify muti window property in cypress-letkodeit', function () {
        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })


        cy.get('[id="openwindow"]').click()
        cy.url().should('contain', '/courses')
    })

    it('verify muti window property in cypress-rohitshetty', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })

        cy.get('[id="openwindow"]').click()
        cy.url().should('contain', 'qaclickacademy')


    })

})