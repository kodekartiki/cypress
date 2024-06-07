///<reference types="cypress"/>
import page from "../../pages/AutoEx"
import data from "../../fixtures/AEpayload"

describe("verify login function", function () {
    let title = undefined
    it('create new user', function () {

        let pg = new page
        pg.visiturl()
        pg.btnClick(pg.selector.loginsignup)
        pg.newUsersignUp(data)
        pg.btnClick(pg.selector.signUpbtn)

        //new user create
        if (data.title == 'Mrs') {
            title = pg.selector.titleMrs
        }
        else {
            title = pg.selector.titleMr
        }
        pg.newUserCreate(title, data)
        pg.validatetext(pg.selector.accountcreatedtext, 'Account Created!')
        pg.btnClick(pg.selector.loginsignup)
        pg.btnClick(pg.selector.logout)
        pg.loginUser(data)
        pg.validatetext(pg.selector.loginTextvalidation, data.username)
    })
})