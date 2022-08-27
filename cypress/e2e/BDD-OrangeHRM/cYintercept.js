const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
import { loginPage } from "./pageobjects/loginPage";
import { pimPage } from "./pageobjects/employeeList";

Given("I'm logged in", () => {
    loginPage.loginsession();
})
When("Search for developers", () => {
    //setup to intercept the network call
    cy.intercept('GET','**/pim/employees*',
        {
            body: {
                "data":[
                   {
                      "empNumber":27,
                      "lastName":"AAAAAA",
                      "firstName":"XXXXXX",
                      "middleName":"",
                      "employeeId":"0204",
                      "terminationId":null,
                      "jobTitle":{
                         "id":7,
                         "title":"Software Engineer",
                         "isDeleted":false
                      },
                      "subunit":{
                         "id":4,
                         "name":"!!!!!!!!!"
                      },
                      "empStatus":{
                         "id":3,
                         "name":"Full-Time Permanent"
                      },
                      "supervisors":[
                         {
                            "empNumber":8,
                            "lastName":"Grace",
                            "firstName":"Fiona",
                            "middleName":""
                         }
                      ]
                   },
                ],
             }
        })

    pimPage.clickJobTitleDropown();
    
})
Then("I should see only one developer", () => {
    cy.get(".orangehrm-paper-container").contains("Software Engineer").should("be.visible");

})