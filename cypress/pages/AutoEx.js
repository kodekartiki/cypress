export default class myPage {
    selector = {
        AEUrl: 'https://www.automationexercise.com/',
        loginsignup: 'a[href="/login"]',
        signUpbtn: '[data-qa="signup-button"]',
        username: '[data-qa="signup-name"]',
        email: '[data-qa="signup-email"]',
        titleMr: '[value="Mr"]',
        titleMrs: '[value="Mrs"]',
        password: '[id="password"]',
        dd: '[id="days"]',
        mm: '[id="months"]',
        yy: '[id="years"]',
        checkbox1: '[id="newsletter"]',
        checkbox2: '[id="optin"]',
        firstname: '[id="first_name"]',
        lastname: '[id="last_name"]',
        company: '[id="company"]',
        address1: '[id="address1"]',
        address2: '[id="address2"]',
        country: '[id="country"]',
        state: '[id="state"]',
        city: '[id="city"]',
        zipcode: '[id="zipcode"]',
        Mobno: '[id="mobile_number"]',
        createbtn: '[data-qa="create-account"]',
        accountcreatedtext: '[data-qa="account-created"] > b',
        logout: '[href="/logout"]',
        loginemail: '[data-qa="login-email"]',
        loginPassword: '[data-qa="login-password"]',
        loginBtn: '[data-qa="login-button"]',
        loginTextvalidation: 'a>b'


    }
    visiturl() {
        cy.visit(this.selector.AEUrl)
    }

    btnClick(css) {
        cy.get(css).click()
    }

    newUsersignUp(data) {
        cy.get(this.selector.username).type(data.username)
        cy.get(this.selector.email).type(data.email)
    }

    validatetext(locater,text){
        cy.get(locater).should('contain',text)
    }

    newUserCreate(title, data) {
        cy.get(title).check()
        cy.get(this.selector.password).type(data.password)
        cy.get(this.selector.dd).select(data.dd)
        cy.get(this.selector.mm).select(data.mm)
        cy.get(this.selector.yy).select(data.yy)
        cy.get(this.selector.checkbox1).check()
        cy.get(this.selector.checkbox2).check()
        cy.get(this.selector.firstname).type(data.firstname)
        cy.get(this.selector.lastname).type(data.lastname)
        cy.get(this.selector.company).type(data.company)
        cy.get(this.selector.address1).type(data.address1)
        cy.get(this.selector.address2).type(data.address2)
        cy.get(this.selector.country).select(data.country)
        cy.get(this.selector.state).type(data.state)
        cy.get(this.selector.city).type(data.city)
        cy.get(this.selector.zipcode).type(data.zipcode)
        cy.get(this.selector.Mobno).type(data.Mobno)
        cy.get(this.selector.createbtn).click()

    }

    loginUser(data) {
        cy.get(this.selector.loginemail).type(data.email)
        cy.get(this.selector.loginPassword).type(data.password)
        cy.get(this.selector.loginBtn).click()
    }

}    