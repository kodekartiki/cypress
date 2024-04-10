/// <reference types="cypress" />

describe('verify the radio button , checkbox , dropdown', function(){

    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
    })
   
    it('verify the radio button',function(){
      cy.get('input[value="green"]').click()
      cy.get('input[value="green"]').should('be.checked')
      cy.get('input[value="green"]').check()
      cy.get('input[value="green"]').should('be.checked')
      cy.get('input[value="blue"]').should('not.be.checked')
    })

    it('verify the checkbox button',function(){
      
        
    })

    it('verify the dropdown button',function(){

        
    })

})