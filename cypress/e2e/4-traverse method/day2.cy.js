/// <reference types="cypress" />

describe('verify the assertions ',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
     })

     it('implicit assertion',function(){
        cy.get('#tea').should('have.text','Tea')
        cy.get('#tea').should('have.attr','id','tea')
        cy.get('#tea').then(function(el){
          
            cy.log(el)
         
            cy.log(el.text())
            
            expect(el.text()).eq('Tea')
        })
     })


     it('loop through elements',function(){
        let expectedArray = ["Coffee","Tea","Milk","Espresso","Sugar"]
       cy.get('.traversal-drinks-list').children().each(function(el,index){
           
            expect(el.text()).to.eq(expectedArray[index])
       })
     })
     


})