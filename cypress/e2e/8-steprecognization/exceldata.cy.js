///<reference types= "cypress"/>

describe('verify login with excel payload', function () {
    it('login with valid cridentials', function () {
        cy.parseXlsx('E:/cypress/cypress/fixtures/Book2.xlsx')
            .then(function (jasonData) {
                cy.log(jasonData[0].data)
                for (let i = 0; i < jasonData[0].data.length; i++) {
                    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                    cy.get('[name="first_name"]').type(jasonData[0].data[i][0])
                    cy.get('[name="last_name"]').type(jasonData[0].data[i][1])
                    cy.get('[name="email"]').type(jasonData[0].data[i][2])
                    cy.get('[name="message"]').type(jasonData[0].data[i][3])
                    cy.get('[type="submit"]').click()

                }
            })
    })
})