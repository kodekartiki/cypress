/// <reference types="cypress"/>

describe('api req of GET,POST,PUT,DELETE', function () {

    it('get req', function () {
        let found = false
        let expectedValue = "Michael"
        cy.request({
            url: "https://reqres.in/api/users?page=2",
            method: "GET"
        })
            .then(function (res) {
                let found = false
                let expectedValue = "Michael"
                expect(res.status).to.eq(200)
                expect(res.body.per_page).to.eq(res.body.data.length)
                expect(res.body.data[0]).to.have.keys(["id", "email", "first_name", "last_name", "avatar"])
                res.body.data.forEach(element => {
                    if (element.first_name == expectedValue) {
                        found = true
                    }
                });
                res.body.data.forEach(element => {
                    expect(element.id).be.not.null
                    expect(element.email).be.not.null
                    expect(element.first_name).be.not.null
                    expect(element.last_name).be.not.null
                    expect(element.avatar).be.not.null

                });

                expect(found).to.eq(true)

            })
    })

    it('post req', function () {
        let payload = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: payload
        })
        .then(function(res){
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.duration).to.be.lte(700)
            expect(res.body).to.have.keys(["name","job","createdAt","id"])
            expect(res.body.name).to.eq(payload.name)
            expect(res.body.job).to.eq(payload.job)

            
        })

    })


    it('put req', function () {
        let payload = {
            "name": "CHINMAY",
            "job": "TEST AUTOMATION"

        }
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body: payload
        })
        .then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lte(600)
            expect(res.body).to.have.keys(["name","job","updatedAt"])
            expect(res.body.name).to.eq(payload.name)
            expect(res.body.job).to.eq(payload.job)
            
        })

    })
    it('delete user',function(){
        cy.request({
            url:"https://reqres.in/api/users/2",
            method: "DELETE",
        })
        .then(function(res){
            expect(res.status).to.eq(204)
        })
    })


})