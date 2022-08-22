const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit Opencart", () => {
  cy.visit("https://opencart.abstracta.us/");
});

Then("I should see Your Store", () => {
  cy.contains("Your Store").should("be.visible");

});


Given("I open login page", ()=>{
  cy.visit("https://opencart.abstracta.us/");
  cy.get("a[title='My Account']").click()
  cy.contains("Login").click();

})

When("I enter my credentials", () => {
  cy.get("#input-email").type("alon@sharklasers.com");
  cy.get("#input-password").type("alonalon")
  cy.get("input[value='Login']").click();

});

Then("I should be able to login", () => {
  cy.url().should("equal","https://opencart.abstracta.us/index.php?route=account/account")

});