const { When, Then, Given, Before } = require("@badeball/cypress-cucumber-preprocessor");


Before(()=>{
    //login procedure
    cy.visit("https://opencart.abstracta.us/");
    cy.get("a[title='My Account']").click()
    cy.contains("Login").click();
    cy.get("#input-email").type("alon@sharklasers.com");
    cy.get("#input-password").type("alonalon")
    cy.get("input[value='Login']").click();
    cy.url().should("equal","https://opencart.abstracta.us/index.php?route=account/account")
    cy.visit("https://opencart.abstracta.us/");
})

When("I search iPhone", () => {
    cy.get("input[placeholder='Search']").type("iphone{enter}");
});

Then("I should iPhone in the result", () => {
    cy.contains("iPhone").should("be.visible");
});