/// <reference types="cypress"/>

describe('verify GET,POST,UPDATE buttons', function () {
    it('GET BUTTON', function () {
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }).as('getButton')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getButton').then(function (response) {
            cy.log(response.response.body.body)
            cy.get('.network-comment').should('have.text', response.response.body.body)
        })
    })

    it('POST BUTTON', function () {
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments',
            method: 'POST'
        }).as('postButton')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postButton').then(function (response) {
            expect(response.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('have.text','POST successful!')
        })
    })

    it.only('UPDATE BUTTON',function(){
        cy.intercept({
            method:'PUT',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('updateButton')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateButton').then(function(response){
            cy.log(response)
            expect(response.response.statusCode).to.eq(200)
            expect(response.response.statusMessage).to.eq("OK")

        })
    })



})