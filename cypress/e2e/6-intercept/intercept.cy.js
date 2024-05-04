/// <reference types="cypress" />


describe('verify the intercept', function () {

    it('testcase one', function () {
        cy.intercept({
            url: ("https://jsonplaceholder.cypress.io/comments/1"),
            method: "GET"
        }).as("GETComment")
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains('Get Comment').click()
        cy.wait('@GETComment')
        cy.get('.network-comment').should('contain', 'laudantium')
    })
})



it('testcase 2', function () {
    cy.intercept({
        url: ("https://jsonplaceholder.cypress.io/comments/1"),
        method: "GET"
    }).as("GETComment")
    cy.visit("https://example.cypress.io/commands/network-requests")
    cy.contains('Get Comment').click()
    cy.wait('@GETComment').then(function({response , request }){
        cy.log(response.body.body)
        cy.get('.network-comment').should('have.text' , response.body.body)
    })
})


it.only('stub network and mock',function(){
    cy.intercept({
        url: "https://jsonplaceholder.cypress.io/comments/1",
        method:"GET"
    },
        {
           body: {
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "kartiki"
              }
        }
    ).as("GETComment")
    cy.visit("https://example.cypress.io/commands/network-requests")
    cy.contains('Get Comment').click()
    cy.wait('@GETComment').then(function({response , request }){
        cy.log(response.body.body)
        cy.get('.network-comment').should('have.text' , response.body.body)           
    })
       



})
