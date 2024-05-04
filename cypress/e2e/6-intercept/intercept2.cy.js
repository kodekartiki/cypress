
/// <reference types ="cypress"/>


describe('intercept in cy',function(){

    it('TCase 1',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(info){
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain','laudantium enim quasi est quidem magnam voluptate')

        })
    })


    it('Tcase 2',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(info){
            cy.log(info)
            expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('have.text',info.response.body.body)

        })
    })

    it('Tcase 2',function(){
        let text = undefined
        cy.request({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"
        })
        .then(function(info){
            text = info.body.body
        })
        .then(function(){
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.get('.network-comment').should('have.text',text)

        })
    })

})
