///<reference types='cypress' />
import myp from "../../pages/2.orangeHRM"
import data from "../../fixtures/2.orange.json"

describe('verify orange hrm login page', function () {
  let page= new myp
  it('verify login with valid cri',function(){
    page.visiturl() 
    page.loginUser(data.valid)
    cy.url().should('contain','/dashboard/index')
  })  

  it('verify login with invalid cri',function(){
    page.visiturl() 
    page.loginUser(data.invalid)
    cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
  })
})