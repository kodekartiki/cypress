export class contactUs{

    weblocators = {

        contactPageHeading:'h2',
        firstName:'[name = "first_name"]',
        lastName:'[name = "last_name"]',
        email:'[name = "email"]',
        Comment:'[name = "message"]',
        reset:'input[type = "reset"]',
        submit:'input[type = "submit"]',
    }

    fillForm(fn,ln,email,Comment){
        cy.get(this.weblocators.firstName).type(fn)
        cy.get(this.weblocators.lastName).type(ln)
        cy.get(this.weblocators.email).type(email)
        cy.get(this.weblocators.Comment).type(Comment)
    }

    formSubmit(){
        cy.get(this.weblocators.submit).click()
    }

    formReset(){
        cy.get(this.weblocators.reset).click()
    }
}