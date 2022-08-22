const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit Automation Practice", () => {
  cy.visit("http://automationpractice.com/index.php/");
});
Then("I should see the Store", () => {
  cy.contains("Automation Practice Website").should("be.visible");
});

Given("I open login page", ()=>{
  cy.visit("http://automationpractice.com/index.php/");
  cy.contains('Sign in').click();
})
When("I enter my credentials", () => {
    cy.get('#email').type(email);
    cy.get('#passwd').type(password);
    cy.get('span').contains('Sign in').click();
    
});
Then("I should be able to login", () => {
    cy.get('span').contains('My account').should('be.visible');
});