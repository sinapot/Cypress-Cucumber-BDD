const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When ("I send POST request",()=>{
    cy.request({
        method: 'POST',
        url: "https://petstore.swagger.io/v2/pet",
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: {
            "id": 4,
            "category": {
              "id": 4,
              "name": "Butchoy"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 4,
                "name": "Butchoy"
              }
            ],
            "status": "available"
          }
    }).as('newpet');
})
Then ("new pet is added to the store",()=>{
    cy.get("@newpet").should((response)=>{
        expect(response.body).to.have.property("name", "doggie")
        expect(response.body).to.have.property("status", "available")
        expect(response.body.category).to.have.property("id", 4)

    })
})

When ("I send GET request", ()=>{
    cy.request({
        method: 'GET',
        url: "https://petstore.swagger.io/v2/pet/4",
        headers: {
            accept: "application/json"
        },
    }).as("petinfo")
})
Then ("I should receive pet information",()=>{
    cy.get("@petinfo").should((response)=>{
        expect(response.body).to.have.property("id",4);
        expect(response.body).to.have.property("name","doggie");
        expect(response.body).to.have.property("status","available");
        expect(response.body.category).to.have.property("id",4);
        expect(response.body.category).to.have.property("name","Butchoy");
    })
})

