describe('manage date picker cypress using js', function () {

    it('date-picker in js', function () {

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')

        let date = new Date()
        date.setDate(date.getDate() + 400)

        cy.log(date.getFullYear()) // 2025
        //cy.log(date.getMonth())
        cy.log(date.getDate())
        cy.log(date.toLocaleString("default", { month: "long" }))
        let year = date.getFullYear() // 2025
        let month = date.toLocaleString("default", { month: "long" }) // May
        let dayDate = date.getDate() // 17
        cy.get('#datepicker').click()
        function selectMonthYear() {

            // year selection
            cy.get('.datepicker-switch').first().then(function (currentDate) {
                //cy.log(currentDate.text())
                if (!currentDate.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthYear();
                }

            }).then(function () {
                // month selection
                cy.get('.datepicker-switch').first().then(function (currentDate) {
                    //cy.log(currentDate.text())
                    if (!currentDate.text().includes(month)) {
                        cy.get('.next').first().click()
                        selectMonthYear();
                    }

                })

            })

        }

        function selectFutureDate(){
            cy.contains(dayDate).click()
        }

        selectMonthYear()
        selectFutureDate()
    })


})