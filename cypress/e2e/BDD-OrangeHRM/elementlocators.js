const { When, Then, Given, Before, And } = require("@badeball/cypress-cucumber-preprocessor");

Before(()=>{
    cy.session("login", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123{enter}")
    })
})

Given ("I add an employee",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    cy.url().should("equal","https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    cy.contains("Add").click()
})
When ("fill out the form and save",()=>{
    cy.get("input[placeholder='First Name']").type("Juan")
    cy.get("input[placeholder='Middle Name']").type("Dela")
    cy.get("input[placeholder='Last Name']").type("Cruz")
    cy.contains("Save").click()
})
Then ("employee should be added",()=>{
    cy.contains("Successfully Saved").should("be.visible")
})

When ("I tick checkbox and delete employee",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    cy.get(".oxd-table-card input").eq(0).click({force: true})
    cy.contains("Delete Selected").click({force: true})
    cy.contains("Yes").click()

})
Then ("selected employee should be deleted",()=>{
    cy.contains("Successfully Deleted").should("be.visible")
})

When ("I search for an employee",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    cy.get("input[data-v-7c56a434]").eq(0).type("Alice")
    cy.get("[data-v-2fe357a6]  [data-v-013b3fcc] ").eq(2).click({force: true})
    cy.get("[role='listbox']").contains("Account Assistant").click();
    cy.contains("Search").click({force: true})
})
Then ("search employee should be displayed",()=>{
    cy.get(".orangehrm-paper-container").contains("Account Assistant").should("be.visible");
    //cy.get('[role="row"]').eq(1).find("[data-v-c186142a]").eq(3).should("have.text","Account Assistant")
})

When ("I click Reports",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    cy.contains("Reports").click()
})
And ("click Employee Job Details reports",()=>{
    cy.get("[data-v-9971f952]").eq(3).find("button[data-v-654f8522]").eq(2).click()


})
Then ("Employee Job Details should be displayed",()=>{
    cy.get(".orangehrm-card-container").contains("Employee Job Details").should("be.visible")
})