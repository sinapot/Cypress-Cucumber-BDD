const { When, Then, Given, Before, And } = require("@badeball/cypress-cucumber-preprocessor");
import { addEmployeePage } from "./pageobjects/addemployeePage";
import { pimPage } from "./pageobjects/employeeList";
import { loginPage } from "./pageobjects/loginPage";
import { reportsPage } from "./pageobjects/reportspage";

//call the login helper function and restore the session
Before(()=>{
    //use page object to login, cy.session is also captured there
    loginPage.loginsession();
})

Given ("I add an employee",()=>{
    cy.url().should("include","/pim/viewEmployeeList")
    pimPage.clickAddBtn()
})
When ("fill out the form and save",()=>{
    // use pageobjects
    addEmployeePage.addemployee("Juan","Dela","Cruz");
})
Then ("employee should be added",()=>{
    cy.contains("Successfully Saved").should("be.visible")
})

When ("I tick checkbox and delete employee",()=>{
    // use pageobjects
    pimPage.tickfirstcheckbox();
    pimPage.clickDeleteBtn();
    pimPage.clickYes();
})
Then ("selected employee should be deleted",()=>{
    cy.contains("Successfully Deleted").should("be.visible")
})

When ("I search for an employee",()=>{
    // use pageobjects
    pimPage.searchforrole("Lisa");
})
Then ("search employee should be displayed",()=>{
    cy.get(".orangehrm-paper-container").contains("Software Engineer").should("be.visible");
})

When ("I click Reports",()=>{
    // use pageobjects
    pimPage.clickreports();
})
And ("click Employee Job Details reports",()=>{
    // use pageobjects
    reportsPage.clickreportsbtn();
})
Then ("Employee Job Details should be displayed",()=>{
    cy.get(".orangehrm-card-container").contains("Employee Job Details").should("be.visible")
})