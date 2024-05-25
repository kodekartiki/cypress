///<reference types ="cypress"/>

describe('UI login', function () {

    it('ui login', function () {
        let usercridentials = { username: "kartikikode", password: "Kartiki@01" }

        cy.request("POST", "https://bookcart.azurewebsites.net/api/login", usercridentials)
            .its('body')
            .then(function (body) {
                const token = body.token

                cy.visit('https://bookcart.azurewebsites.net/', {
                    onBeforeLoad(browser) {
                        browser.localStorage.setItem('authtoken', token)
                    }
                })
                cy.get('class=mdc-button_label').eq(1).should ('have.text', `${usercridentials.username}`)
            })
        cy.wait(2000)
    })
})