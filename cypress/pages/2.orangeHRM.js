class myPage {
    selector = {
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        username: '[name="username"]',
        password: '[type="password"]',
        loginBtn: '[type="submit"]'
    }

    visiturl() {
        cy.visit(this.selector.url)
    }

    loginUser(userdata) {
        cy.get(this.selector.username).type(userdata.username)
        cy.get(this.selector.password).type(userdata.password) 
        cy.get(this.selector.loginBtn).click()
    }

}
export default myPage