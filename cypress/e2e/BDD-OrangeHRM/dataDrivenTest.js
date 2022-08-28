const { When, Then, Given, DataTable, Before } = require("@badeball/cypress-cucumber-preprocessor");
import { loginPage } from "./pageobjects/loginPage";

Before(()=>{
    //use page object to login, cy.session is also captured there
    loginPage.loginsession();
 })

Given ("I open Add Employee page",()=>{
    cy.contains("Add").click();
})
When ("Add new employees",(DataTable) =>{
    //type first name
    
    for (let i = 1; i <= 3; i++) {
        //text += cars[i] + "<br>";
        cy.get("input[placeholder='First Name']").type(DataTable.rawTable[i][0])
        cy.get("input[placeholder='Middle Name']").type(DataTable.rawTable[i][1])
        cy.get("input[placeholder='Last Name']").type(DataTable.rawTable[i][2])
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(DataTable.rawTable[i][3])
        cy.contains("Save").click()
        //validate employee is saved
        cy.contains("Successfully Saved").should("be.visible")
        //go back to homepage and click Add employee
        cy.visit("/pim/addEmployee")
      }

})
Then ("all of them should be added",(DataTable)=>{
    cy.visit("/pim/viewEmployeeList")
    cy.get("[data-v-013b3fcc][data-v-654f8522][data-v-0e8bed4e]").eq(2).click({force: true});
    cy.contains("Decending").click({force: true})
    cy.get('[role="row"]').eq(1).find("[data-v-c186142a]").eq(2).should("have.text","ZZZ")
    cy.get('[role="row"]').eq(2).find("[data-v-c186142a]").eq(2).should("have.text","ZZZ")
    cy.get('[role="row"]').eq(3).find("[data-v-c186142a]").eq(2).should("have.text","ZZZ")
})