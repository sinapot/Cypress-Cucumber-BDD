const { When, Then, Given, And, Before } = require("@badeball/cypress-cucumber-preprocessor");
import { loginPage } from "./pageobjects/loginPage";
import { pimPage } from "./pageobjects/employeeList";

Before(()=>{
   //use page object to login, cy.session is also captured there
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

When ("Modify the request to server as a Job Title ID",()=>{
   //Controlling the outgoing request
   cy.intercept('GET','**/pim/employees*',
      (req) =>{
         //changing request call from jobTitleId=7 (Software Engineer) to jobTitleId=9 (QA Engineer)
         req.url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&jobTitleId=9&sortField=employee.firstName&sortOrder=ASC'
         req.continue()
      }
   ).as("newJobTitle9")
   //search for Software Engineer
   pimPage.clickJobTitleDropown();
   //intercept and change the server request to QA Engineer
   cy.wait("@newJobTitle9")
})
Then ("server response should be for the new Job Title", ()=>{
   //verify the server responded with QA Engineers
   cy.get(".orangehrm-paper-container").contains("QA Engineer").should("be.visible");
})