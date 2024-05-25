import payload from '../../fixtures/payload.json'
///<reference types ="cypress"/>

describe('verify the api with fixtures', function () {

    it('POST call', function () {
        cy.log(payload.post)
        payload.post.email = `kodekartiki01@${Math.floor(Math.random() * 10000) + 1}.com`
        let token = `cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517`
        cy.request({

            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: payload.post,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (res) {
                expect(res.status).to.eq(201)
            })
    })

    it('PUT call', function () {
        cy.log(payload.put)
        payload.put.email = `kodekartiki01@${Math.floor(Math.random() * 10000) + 1}.com`
        let token = `cd2ac6be51d3e141feb492b0cc0ddd8d3eb8d0bc7da80d1a1ef57ecdd74bf517`
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/6888742",
            body: payload.put,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
            })
    })


})