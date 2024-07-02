///<reference types="cypress"/>
describe('Handling multitab and multiwindow in cypress', function () {
    it('verify href property of multitab-rahulsheetyprac', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').should('have.attr', 'href').and('include', 'www.qaclickacademy.com')
    })

    it('Handling multitab and multiwindow for removing target property', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'www.qaclickacademy.com')
    })

    it('handle href property of multiple-rahulsheetyprac without removing target property', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').then(function (newtab) {
            let url = newtab.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'www.qaclickacademy.com')
        })
    })

    it('handle multiwindow property in cypress', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })

        cy.get('[id="openwindow"]').click()
        cy.url().should('contain', 'www.qaclickacademy.com')
    })

})
