const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit Parabank", () => {
  cy.visit("https://parabank.parasoft.com");
});

Then("I should see a login", () => {
  cy.contains("Log In").should("be.visible");

});