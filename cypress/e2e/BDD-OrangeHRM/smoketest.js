const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit OrangeHRM", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

Then("I should see Login", () => {
  cy.contains("Login").should("be.visible");

});


Given("I open login page", ()=>{
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

When("I enter my credentials", () => {
  cy.get("input[placeholder='Username']").type("Admin");
  cy.get("input[placeholder='Password']").type("admin123{enter}")
});

Then("I should be able to login", () => {
  cy.url().should("equal","https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

});